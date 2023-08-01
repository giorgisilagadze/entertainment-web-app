import styled from "styled-components";

interface Style {
  bc?: string;
}

export const Trending = styled.h1`
  color: white;
  font-size: 20px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.312px;
  margin-left: 16px;
`;

// export const CarouselSlider = styled(Carousel)`
//   display: flex;
// `;

export const TrendingDiv = styled.div`
  margin: 16px 0px 0px 16px;
  display: flex;
  gap: 16px;
  overflow-x: auto;
`;

export const EachTranding = styled.div<Style>`
  width: 240px;
  height: 140px;
  position: relative;
`;

export const EachImg = styled.img`
  width: 240px;
  height: 140px;
  border-radius: 8px;
`;

export const BookmarkDiv = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    border-radius: 50%;
  }
`;

export const BookmarkIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Properties = styled.div`
  position: absolute;
  top: 86px;
  left: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const PropertiesText = styled.p`
  color: white;
  font-size: 12px;
  font-weight: 300;
  line-height: normal;
  opacity: 0.75;
`;

export const Dot = styled.div`
  width: 3px;
  height: 3px;
  background-color: white;
  opacity: 0.75;
  border-radius: 50%;
`;

export const IconMovie = styled.img`
  width: 12px;
  height: 12px;
  filter: invert(100%) sepia(6%) saturate(0%) hue-rotate(115deg)
    brightness(508%) contrast(108%);
  opacity: 0.75;
`;

export const TitleBookm = styled.h1`
  position: absolute;
  top: 105px;
  left: 16px;
  color: white;
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
`;
