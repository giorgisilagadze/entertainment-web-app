import styled from "styled-components";
import { StyledLink } from "./LogIn.Styled";

interface Style {
  filter?: string;
}

export const StyledHeader = styled.div`
  width: 100%;
  padding: 16px;
  background-color: #161d2f;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  border: 1px solid var(--pure-white, #fff);
`;

export const Logo = styled.img`
  width: 25px;
  height: 20px;
`;

export const ChildCategory = styled(Logo)<Style>`
  width: 16px;
  height: 16px;
  filter: ${({ filter }) => filter};
`;

export const StyledLinkCat = styled(StyledLink)`
  width: 16px;
  height: 16px;
`;
