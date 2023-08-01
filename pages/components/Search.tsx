import { SearchDiv, SearchInput, SearchLogo } from "@/styles/Search.Styled";

export default function Search() {
  return (
    <SearchDiv>
      <SearchLogo src="./assets/icon-search.svg" alt="" />
      <SearchInput
        type="text"
        name=""
        id=""
        placeholder="Search for movies or TV series"
      />
    </SearchDiv>
  );
}
