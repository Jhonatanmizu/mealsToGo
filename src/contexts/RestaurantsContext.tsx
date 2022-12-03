import React, {
  useState,
  useEffect,
  createContext,
  useMemo,
  PropsWithChildren,
  useContext,
  ContextType,
  Context,
} from "react";
import {
  getRestaurants,
  transformRestaurantsData,
} from "../services/restaurants/restaurantsService";
interface RestaurantsContextInterface {
  restaurants?: any[];
  isLoading?: boolean;
  error?: boolean;
}
export const RestaurantsContext =
  createContext<RestaurantsContextInterface | null>(null);

export const RestaurantsProvider = ({ children }: PropsWithChildren) => {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    getRestaurants()
      .then((res) => {
        setIsLoading(false);
        setRestaurants(transformRestaurantsData(res));
      })
      .catch((e) => {
        setIsLoading(false);
        setError(true);
        console.error(e);
      });
  }, []);
  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
export function useRestaurants() {
  const context = useContext(RestaurantsContext);
  if (context === null) {
    throw new Error("useRestaurants must be used within a RestaurantsProvider");
  }
  return context;
}
