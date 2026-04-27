import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";
import Input from "../Input/Input";
import {
  LoginFormComponent,
  Title,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  Error,
} from "./styles";
import type { LoginFormValues } from "./types";

function LoginForm() {
  // Создание валидационной схемы
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Field email is required")
      .email("Field has type email")
      .min(10, "Min 10 symbols")
      .max(20, "Max 20 symbols"),
    password: Yup.number()
      .required("Field password is required")
      .typeError("Value password must be number")
      //   .min(2)
      //   .max(10)
      .test(
        "Check length",
        "Min 8 symbols",
        (passw) => String(passw).length >= 8,
      ),
    agree: Yup.boolean().oneOf([true], "You should agree"),
    age: Yup.number()
      .typeError("Must be number")
      .min(18, "Min age 18")
      .max(70, "Max age 70"),
  });

  // Настройка формы через formik
  // Для контроля формы через формик нужно использовать хук из Fromik, который
  // называется useFormik. Этот хук принимает в качестве аргумента объект с
  // настройками и возвращает объект, с помощью которого мы можем контролировать
  // определённую форму
  const formik = useFormik({
    // В объекте есть два обязательных свойства initialValues и onSubmit
    // initialValues содержит объект, у которого ключами являются значения
    // из атрибута name полей, а значениями - первоначальные значения в полях
    initialValues: {
      email: "",
      password: "",
      agree: false,
      age: "",
    } as LoginFormValues,
    // Привязка валидационной схемы к формику
    validationSchema: schema,
    validateOnChange: false,
    // В параметре onSubmit принимает значения из полей в момент события submit
    onSubmit: (values: LoginFormValues) => {
      console.table(values);
    },
  });

  console.log(formik);

  return (
    // handleSubmit необходимо привязывать к элементу form!
    <LoginFormComponent onSubmit={formik.handleSubmit}>
      <Title>Login Form</Title>
      <Input
        name="email"
        label="Email*"
        placeholder="Enter your email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Input
        name="password"
        label="Password*"
        placeholder="Enter your password"
        // type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Input
        name="age"
        label="Age"
        placeholder="Enter your age"
        type="number"
        value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.errors.age}
      />
      <CheckboxContainer>
        <Checkbox
          name="agree"
          type="checkbox"
          id="agree"
          checked={formik.values.agree}
          onChange={formik.handleChange}
        />
        <CheckboxLabel htmlFor="agree">I agree</CheckboxLabel>
        <Error>{formik.errors.agree}</Error>
      </CheckboxContainer>
      <Button name="LOGIN" type="submit" />
    </LoginFormComponent>
  );
}

export default LoginForm;
