import styled from "styled-components";
import { EachImg, EachTranding } from "./Home.Styled";

export const EachCont = styled(EachTranding)`
  width: 164px;
  height: 110px;
  border-radius: 8px;
`;

export const EachMovieImg = styled(EachImg)`
  width: 164px;
  height: 110px;
  border-radius: 8px;
`;

export const PropsMovie = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 8px;
`;

export const TitleMovie = styled.h1`
  color: white;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  margin-top: 5px;
`;
