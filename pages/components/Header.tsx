import {
  StyledHeader,
  Category,
  Avatar,
  Logo,
  ChildCategory,
  StyledLinkCat,
} from "@/styles/Header.Styled";
import { useState } from "react";

const category = [
  {
    source: "./assets/icon-nav-home.svg",
    alt: "home",
    link: "/",
  },
  {
    source: "./assets/icon-nav-movies.svg",
    alt: "movie",
    link: "/movies",
  },
  {
    source: "./assets/icon-nav-tv-series.svg",
    alt: "tv-serie",
    link: "/tv-series",
  },
  {
    source: "./assets/icon-nav-bookmark.svg",
    alt: "bookmark",
    link: "/bookmark",
  },
];

export default function Header() {
  const [isChecked, setIsChecked] = useState("home");
  return (
    <StyledHeader>
      <Logo src="./assets/logo.svg" alt="logo" />
      <Category>
        {category.map((item) => (
          <StyledLinkCat href={item.link} key={Math.random()}>
            <ChildCategory
              src={item.source}
              alt={item.alt}
              onClick={() => setIsChecked(item.alt)}
              filter={
                isChecked == item.alt
                  ? "invert(100%) sepia(6%) saturate(0%) hue-rotate(115deg) brightness(508%) contrast(108%);"
                  : ""
              }
            />
          </StyledLinkCat>
        ))}
      </Category>
      <Avatar src="./assets/image-avatar.png" alt="avatar" />
    </StyledHeader>
  );
}
