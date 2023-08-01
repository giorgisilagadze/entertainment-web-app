import {
  EachCont,
  EachMovieImg,
  PropsMovie,
  TitleMovie,
} from "@/styles/Movie.Styled";
import {
  BookmarkDiv,
  BookmarkIcon,
  Properties,
  PropertiesText,
  Dot,
  IconMovie,
  TitleBookm,
} from "@/styles/Home.Styled";

interface Movie {
  image: string;
  isChecked: Array<string>;
  setIsChecked: (isChecked: Array<string>) => void;
  title: string;
  movie: {};
  year: string;
  category: string;
  rating: string;
}

interface Bookmark {
  isBookmarked: Array<{}>;
}

export default function Movie(
  {
    image,
    setIsChecked,
    isChecked,
    title,
    movie,
    year,
    category,
    rating,
  }: Movie,
  { isBookmarked }: Bookmark
) {
  return (
    <div>
      <EachCont>
        <EachMovieImg src={image} />
        <BookmarkDiv
          onClick={() => {
            isChecked.push(title);
            isBookmarked.push(movie);
            console.log(isBookmarked);
          }}
        >
          <BookmarkIcon
            src={
              isChecked.includes(title)
                ? "./assets/icon-bookmark-full.svg"
                : "./assets/icon-bookmark-empty.svg"
            }
            alt=""
          />
        </BookmarkDiv>
      </EachCont>
      <PropsMovie>
        <PropertiesText>{year}</PropertiesText>
        <Dot />
        <IconMovie
          src={
            category == "Movie"
              ? "./assets/icon-nav-movies.svg"
              : "./assets/icon-nav-tv-series.svg"
          }
          alt=""
        />
        <PropertiesText>{category}</PropertiesText>
        <Dot />
        <PropertiesText>{rating}</PropertiesText>
      </PropsMovie>
      <TitleMovie>{title}</TitleMovie>
    </div>
  );
}
