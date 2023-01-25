import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext, PropsWithChildren } from "react";
import {
  locationRequest,
  locationTransform,
} from "../services/locations/locationService";

interface LocationContextInterface {
  location: string | null;
  isLoading: boolean;
  error: any;
  keyword: string;
  onSearch: (keyword: string) => void;
}

const LocationContext = createContext<LocationContextInterface | null>({});

export const LocationProvider = ({ children }: PropsWithChildren) => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyWord, setKeyword] = useState("san francisco");

  const onSearch = async (searchKeyword: string = "Antwerp") => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    console.log("Search keyword", searchKeyword);
    if (!searchKeyword.length) {
      return;
    }
    try {
      const result: any = await locationRequest(searchKeyword.toLowerCase());
      console.log("RESULT ", result);
      setLocation(result);
      setIsLoading(false);
    } catch (e) {
      console.log("Error when we tried to search a location", e);
      setIsLoading(false);
      setError(e);
    }
  };
  useEffect(() => {
    onSearch(keyWord);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <LocationContext.Provider
      value={{ location, isLoading, error, keyWord, onSearch }}
    >
      {children}
    </LocationContext.Provider>
  );
};
export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === null) {
    throw new Error("Location context is not available");
  }
  return context;
};
