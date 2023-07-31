import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Logo,
  LogInDiv,
  Title,
  Input,
  Hr,
  Button,
  BelowDiv,
  Already,
  ChangePage,
  StyledLink,
  Error,
} from "@/styles/LogIn.Styled";
import { GlobalStyled } from "@/styles/Global.Styled";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Email cannot be empty")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/,
        "Looks like this is not an email"
      ),
    password: yup
      .string()
      .required("Password cannot be empty")
      .min(8, "Password must contain at least 8 characters")
      .max(20, "Password must contain a maximum of 20 characters"),
    repeatPassword: yup
      .string()
      .required("Password cannot be empty")
      .min(8, "Password must contain at least 8 characters")
      .max(20, "Password must contain a maximum of 20 characters"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <>
      <Logo src="./assets/logo.svg" alt="logo" />
      <LogInDiv>
        <Title>Sign Up</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Email address"
            {...register("email")}
          />

          <Hr />
          <Error>{errors.email?.message}</Error>

          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
          />

          <Hr />
          <Error>{errors.password?.message}</Error>

          <Input
            type="password"
            placeholder="Repeat Password"
            {...register("repeatPassword")}
          />

          <Hr />
          <Error>{errors.password?.message}</Error>

          <Button>Create an account</Button>
          <BelowDiv>
            <Already>Alread have an account?</Already>
            <StyledLink href="./signUp">
              <ChangePage>Login</ChangePage>
            </StyledLink>
          </BelowDiv>
        </form>
      </LogInDiv>
    </>
  );
}

SignUp.getLayout = function pageLayout(page: any) {
  return (
    <>
      <GlobalStyled />
      {page}
    </>
  );
};
