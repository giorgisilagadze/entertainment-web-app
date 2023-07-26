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
} from "@/styles/LogIn.Styled";
import Link from "next/link";

const schema = yup
  .object({
    email: yup.string().required("Email cannot be empty"),
    password: yup.string().required("Password cannot be empty"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function LogIn() {
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
        <Title>Login</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Email address"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <Hr />

          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <Hr />

          <Button>Login to your account</Button>
          <BelowDiv>
            <Already>Don’t have an account?</Already>
            <StyledLink href="./signUp">
              <ChangePage>Sign Up</ChangePage>
            </StyledLink>
          </BelowDiv>
        </form>
      </LogInDiv>
    </>
  );
}
