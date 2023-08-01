import styled from "styled-components";

export const SearchDiv = styled.div`
  width: 100%;
  padding: 24px 16px;
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const SearchLogo = styled.img`
  width: 24px;
  height: 24px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 24px;
  border: none;
  background-color: #10141e;
  color: white;
  font-size: 16px;
  font-weight: 300;
  line-height: normal;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: white;
    opacity: 0.5;
  }
`;
