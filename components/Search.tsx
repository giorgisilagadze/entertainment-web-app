import { Recomended } from "@/styles/Home.Styled";
import { SearchDiv, SearchInput, SearchLogo } from "@/styles/Search.Styled";
import { useState } from "react";
import Movie from "./Movie";

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

interface Input {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
}

export default function Search(
  { isData, setIsData }: Data,
  { inputValue, setInputValue }: Input
) {
  const [filteredData, setFilteredData] = useState<any>([]);
  return (
    <>
      <SearchDiv>
        <SearchLogo src="./assets/icon-search.svg" alt="" />
        <SearchInput
          type="text"
          placeholder="Search for movies or TV series"
          onChange={(event) => {
            event.preventDefault();
            console.log(event.target.value);

            setInputValue(event.target.value);
            const filtered = isData.filter((item) =>
              item.title
                .toLowerCase()
                .includes(event.target.value.toLowerCase())
            );
            setFilteredData(filtered);

            console.log(filteredData);

            // setIsData([...filteredData]);
          }}
        />
      </SearchDiv>
      {inputValue != "" && filteredData.length != 0 && (
        <Recomended>
          {filteredData.map((item: Data) => (
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
            />
          ))}
        </Recomended>
      )}
    </>
  );
}
