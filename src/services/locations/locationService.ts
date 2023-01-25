import camelize from "camelize";

import { locations } from "./mock/locationMock";

export const locationRequest = (searchTerm: string | any) => {
  console.log("SEARCH", searchTerm);

  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];

    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result: any) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
