import { mocks } from "./mock";
import camelize from "camelize";

export const getRestaurants = async (
  location: string = "37.7749295,-122.4194155"
) => {
  return new Promise((resolve, reject) => {
    console.log("Location", location);
    const mock = mocks["37.7749295,-122.4194155"];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
export const transformRestaurantsData = (restaurants: any[]) => {
  const mappedResult = restaurants.results.map((r: any) => {
    return {
      ...r,
      isClosedTemporarily: r.bussiness_status === "CLOSED_TEMPORARILY",
      isOpenNow: r.opening_hours && r.opening_hours.open_now,
    };
  });
  const camelizedResult = camelize(mappedResult);
  return camelizedResult;
};
