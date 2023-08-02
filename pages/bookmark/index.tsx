import Movie from "@/components/Movie";
import Search from "@/components/Search";
import { Recomended, Trending } from "@/styles/Home.Styled";

interface Data {
  isData: Array<{
    thumbnail: {
      trending?: {
        small: string;
        large: string;
        id: string;
      };
      regular: {
        small: string;
        medium: string;
        large: string;
        id: string;
      };
    };
    title: string;
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
    id: string;
  }>;
  setIsData: (isData: Array<{}>) => void;
}

export default function Bookmark({ isData, setIsData }: Data) {
  const movies = isData.filter(
    (movie) => movie.isBookmarked == true && movie.category == "Movie"
  );
  return (
    <>
      <Search />
      <Trending>Bookmarked Movies</Trending>
      <Recomended>
        {movies.map((item) => (
          <Movie
            key={Math.random()}
            image={item.thumbnail.regular.small}
            title={item.title}
            movie={item}
            year={item.year}
            rating={item.rating}
            category={item.category}
            isData={isData}
            id={item.id}
            setIsData={setIsData}
          ></Movie>
        ))}
      </Recomended>
    </>
  );
}
