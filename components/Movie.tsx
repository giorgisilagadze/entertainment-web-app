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
  movie: any;
  year: number;
  category: string;
  rating: string;
  isData: Array<{}>;
  id: string;
  setIsData: (isData: Array<{}>) => void;
}

export default function Movie({
  image,
  title,
  movie,
  year,
  category,
  rating,
  isData,
  id,
  setIsData,
}: Movie) {
  return (
    <div>
      <EachCont>
        <EachMovieImg src={image} />
        <BookmarkDiv
          onClick={() => {
            const index = isData.findIndex((movie: any) => movie.id == id);
            const clone: any = [...isData];
            clone[index].isBookmarked = !clone[index].isBookmarked;
            setIsData(clone);
            console.log(index);
          }}
        >
          <BookmarkIcon
            src={
              movie.isBookmarked
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
