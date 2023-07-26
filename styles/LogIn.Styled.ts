import styled from "styled-components";
import Link from "next/link";

export const Logo = styled.img`
  margin: 48px auto 0px;
  display: block;
`;

export const LogInDiv = styled.div`
  width: 327px;
  margin: 48.5px auto 0px;
  border-radius: 10px;
  background-color: #161d2f;
  padding: 24px 24px 32px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  color: white;
  font-size: 15px;
  font-weight: 300;
  line-height: normal;
  opacity: 0.5;
  border: none;
  background-color: #161d2f;
  margin-top: 28px;

  &:focus {
    outline: none;
  }
`;

export const Hr = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #5a698f;
  margin-top: 5px;
  border: none;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  background-color: #fc4747;
  color: white;
  font-size: 15px;
  font-weight: 300;
  line-height: normal;
  border: none;
  margin-top: 54px;
`;

export const BelowDiv = styled.div`
  display: flex;
  gap: 9px;
  justify-content: center;
  margin-top: 24px;
`;

export const Already = styled.p`
  color: white;
  font-size: 15px;
  font-weight: 300;
  line-height: normal;
`;

export const ChangePage = styled.p`
  color: #fc4747;
  font-size: 15px;
  font-weight: 300;
  line-height: normal;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Error = styled(ChangePage)`
  font-size: 12px;
  margin-top: 5px;
`;
