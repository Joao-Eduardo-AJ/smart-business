import { useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Button from "@/components/button";
import { Input } from "@/forms/Input";
import * as yup from "yup";
import { TextsProvider } from "@/translation";
import { FormErrors } from "@/forms/FormErrors";
import Image from "next/image";

interface IEmailForm {
  email: string;
}

export function EmailForm() {
  const formRef = useRef<FormHandles>(null);
  const texts = TextsProvider.get();

  const formValidationSchema: yup.ObjectSchema<IEmailForm> = yup
    .object()
    .shape({
      email: yup.string().required().email(),
    });

  function handleSubmit(data: IEmailForm) {
    formValidationSchema
      .validate(data, { abortEarly: false })
      .then(validatedData => {
        if (validatedData instanceof Error) {
          console.log(Error);
        } else {
          console.log(validatedData);
        }
      })
      .catch((errors: yup.ValidationError) => {
        const validationErrors: FormErrors = {};
        errors.inner.forEach(error => {
          if (!error.path) return;

          validationErrors[error.path] = error.message;
        });

        formRef.current?.setErrors(validationErrors);
      });
  }

  return (
    <Form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-16 w-full lg:w-490 lg:flex-row lg:bg-white lg:gap-0 items-center lg:pr-3"
    >
      <Input
        name="email"
        type="text"
        variant={{ type: "news" }}
        placeholder={texts.EMAIL_INPUT_PLACEHOLDER}
      >
        <Image
          src="icons/letter.svg"
          alt="email input"
          width={18}
          height={14}
        />
      </Input>
      <Button.Root variant={{ type: "dark" }} type="submit">
        <span className="font-semibold text-nm">
          {texts.REGISTER_INPUT_BUTTON}
        </span>
      </Button.Root>
    </Form>
  );
}
