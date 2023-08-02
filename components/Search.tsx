import { SearchDiv, SearchInput, SearchLogo } from "@/styles/Search.Styled";

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

export default function Search({ isData, setIsData }: Data) {
  return (
    <SearchDiv>
      <SearchLogo src="./assets/icon-search.svg" alt="" />
      <SearchInput
        type="text"
        placeholder="Search for movies or TV series"
        onChange={(event) => {
          event.preventDefault();
          console.log(isData);

          const inputValue = event.target.value.trim().toLowerCase();
          const filteredData = isData.filter((item) =>
            item.title.toLowerCase().includes(inputValue)
          );
          setIsData(filteredData);
        }}
      />
    </SearchDiv>
  );
}
