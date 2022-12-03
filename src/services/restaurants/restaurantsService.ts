import { mockImages, mocks } from "./mock";
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
    setTimeout(() => {
      resolve(mock);
    }, 40);
  });
};
export const transformRestaurantsData = (restaurants: any) => {
  console.log("RESTAURANTS ON TRANSFORM", restaurants);
  // TODO check if results r have business_status
  const mappedResult = restaurants.results.map((r: any) => {
    r.photos = r.photos.map(() => {
      return mockImages[Math.ceil(Math.random() * mockImages.length - 1)];
    });
    return {
      ...r,
      isClosedTemporarily: r.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: r.opening_hours && r.opening_hours.open_now,
    };
  });
  const camelizedResult = camelize(mappedResult);
  return camelizedResult;
};
