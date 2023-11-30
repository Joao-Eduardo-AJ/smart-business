import CheckboxInput from "@/forms/Checkbox";
import { Input } from "@/forms/Input";
import { TextsProvider } from "@/translation";
import { Form } from "@unform/web";
import * as Button from "@/components/button";
import * as yup from "yup";
import { FormErrors } from "./FormErrors";
import { usePagesContext } from "@/context";
import { useEffect } from "react";
import Confetti from "@/components/confetti";
import Image from "next/image";

export function MainForm({
  onClickForgottenPass,
}: {
  onClickForgottenPass: () => void;
}) {
  const texts = TextsProvider.get();
  const {
    mainFormRef,
    emailFieldValue,
    confettiVisible,
    handleConfettiVisible,
    handlePasswordVisible,
    passwordVisible,
  } = usePagesContext();

  interface IFormData {
    email: string;
    password: string;
  }

  const formValidationSchema: yup.ObjectSchema<IFormData> = yup.object().shape({
    email: yup.string().required().email(),
    password: yup
      .string()
      .required()
      .min(8)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*])[A-Za-z\d!@#$%&*]*$/
      ),
  });

  function handleSubmit(data: IFormData) {
    formValidationSchema
      .validate(data, { abortEarly: false })
      .then(validatedData => {
        console.log(data);
        if (validatedData instanceof Error) {
          console.log(Error);
        } else {
          handleConfettiVisible(true);
          setTimeout(() => handleConfettiVisible(false), 5000);
          console.log(validatedData);
        }
      })
      .catch((errors: yup.ValidationError) => {
        const validationErrors: FormErrors = {};
        errors.inner.forEach(error => {
          if (!error.path) return;

          validationErrors[error.path] = error.message;
        });

        mainFormRef.current?.setErrors(validationErrors);
      });
  }

  useEffect(() => {
    mainFormRef.current?.setFieldValue("email", emailFieldValue);
  }, [emailFieldValue, mainFormRef]);

  return (
    <Form
      ref={mainFormRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-16 lg:gap-32"
    >
      <p className="text-neutral200 text-3.5xl">{texts.LOGIN}</p>
      {confettiVisible && <Confetti />}
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
        <div className="relative h-58">
          <Input
            name="password"
            placeholder={texts.PASSWORD_INPUT_PLACEHOLDER}
            variant={{ type: "outlined" }}
            type={passwordVisible ? "text" : "password"}
          />
          <Image
            src="/icons/opened-eye.png"
            alt="see password"
            width={17}
            height={17}
            className={`transition-all duration-200 absolute right-16 top-1/2 -translate-y-1/2 cursor-pointer h-16 ${
              passwordVisible ? "py-16" : "py-0"
            }`}
            onClick={() => handlePasswordVisible()}
          />
          <Image
            src="/icons/closed-eye.png"
            alt="see password"
            width={17}
            height={17}
            className={`transition-all duration-200 absolute right-16 top-1/2 -translate-y-1/2 cursor-pointer h-16 ${
              passwordVisible ? "py-0" : "py-16"
            }`}
            onClick={() => handlePasswordVisible()}
          />
        </div>
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
