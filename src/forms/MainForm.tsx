import CheckboxInput from "@/forms/Checkbox";
import { Input } from "@/forms/Input";
import { TextsProvider } from "@/translation";
import { Form } from "@unform/web";
import { useRef } from "react";
import * as Button from "@/components/button";
import * as yup from "yup";
import { FormErrors } from "./FormErrors";
import { FormHandles } from "@unform/core";

export function MainForm({
  onClickForgottenPass,
}: {
  onClickForgottenPass: () => void;
}) {
  const texts = TextsProvider.get();
  const formRef = useRef<FormHandles>(null);

  interface IFormData {
    email: string;
    password: string;
    remember: boolean;
  }

  const formValidationSchema: yup.ObjectSchema<IFormData> = yup.object().shape({
    email: yup.string().required().email(),
    password: yup
      .string()
      .required()
      .matches(
        /^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
      ),
    remember: yup.boolean().required(),
  });

  function handleSubmit(data: IFormData) {
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
      className="flex flex-col gap-16 lg:gap-32"
    >
      <p className="text-neutral200 text-3.5xl">{texts.LOGIN}</p>
      <label>
        {texts.EMAIL_INPUT_LABEL}
        <Input
          name="email"
          placeholder={texts.EMAIL_INPUT_PLACEHOLDER}
          variant={{ type: "outlined" }}
        />
      </label>
      <label>
        {texts.PASSWORD_INPUT_LABEL}
        <Input
          name="password"
          placeholder={texts.PASSWORD_INPUT_PLACEHOLDER}
          variant={{ type: "outlined" }}
          type="password"
        />
      </label>
      <div className="flex justify-between">
        <CheckboxInput
          name="remember"
          label={texts.REMEMBER_CREDENTIALS_CHECKBOX_LABEL}
        />
        <span
          className="text-primaryLight cursor-pointer"
          onClick={() => onClickForgottenPass()}
        >
          {texts.FORGOTTEN_PASSWORD}
        </span>
      </div>
      <Button.Root variant={{ type: "contained" }} type="submit">
        <span className="text-nm">{texts.LOGIN_BUTTON}</span>
      </Button.Root>
      <div className="flex justify-around">{texts.OR}</div>
    </Form>
  );
}
