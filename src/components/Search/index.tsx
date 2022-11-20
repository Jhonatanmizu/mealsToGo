import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
interface Props {
  placeholder: string;
}
export default function Search({ placeholder }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={handleSearch}
      value={searchQuery}
    />
  );
}
