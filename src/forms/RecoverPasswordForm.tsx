import { useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Button from "@/components/button";
import { Input } from "@/forms/Input";
import * as yup from "yup";
import { TextsProvider } from "@/translation";
import { FormErrors } from "@/forms/FormErrors";
import { useRouter } from "next/navigation";

interface IEmailForm {
  email: string;
}

export function RecoverPasswordForm() {
  const formRef = useRef<FormHandles>(null);
  const texts = TextsProvider.get();
  const router = useRouter();

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
          router.push("/login");
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
      className="flex flex-col gap-3 bg-white lg:gap-28"
    >
      <label>
        <span className="text-sd1 text-primaryGray font-semibold">
          {texts.EMAIL_INPUT_LABEL}
        </span>
        <Input
          name="email"
          type="text"
          variant={{ type: "text" }}
          placeholder={texts.RECOVER_PASSWORD_PLACEHOLDER}
        />
      </label>
      <Button.Root variant={{ type: "contained" }} type="submit">
        <span className="text-nm">{texts.RECOVER_PASSWORD_BUTTON}</span>
      </Button.Root>
    </Form>
  );
}
