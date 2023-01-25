import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { useLocation } from "../../contexts/LocationContext";
interface Props {
  placeholder: string;
}
export default function Search({ placeholder }: Props) {
  const { onSearch } = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch(query);
  };
  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={handleSearch}
      value={searchQuery}
    />
  );
}
