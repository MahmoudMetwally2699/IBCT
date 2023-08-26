
import {  FilterProps, FirstApiDataItem, SecondApiData,HomeProps2 } from "@types";


export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};




interface ErrorResponse {
  code: string;
  message: string;
  data: {
    status: number;
  };
}
export async function IBCT(filters: FilterProps) {

  const { per_page,search,level_of_certification } = filters;


  // Set the required headers for the API request
  const response = await fetch(
    `https://test.ketodietnutrition.org/TestKeto/wp-json/wp/v2/ibct-trainers/?per_page=${per_page}&search=${search}&level_of_certification=${level_of_certification}`
  );
  // Parse the response as JSON

  const result = await response.json();

  console.log(result)

  return result;
}

// export async function IBCT(limit: number) {
//     const response = await fetch(`https://test.ketodietnutrition.org/TestKeto/wp-json/wp/v2/ibct-trainers/?per_page=${limit}`);
//     const data: FirstApiDataItem= await response.json();
//   return data;
// }

// imageUtils.js

export async function fetchImages(secondaryImages:string) {

 
    const secondApiResponse = await fetch(
      `http://test.ketodietnutrition.org/TestKeto/wp-json/wp/v2/media/${secondaryImages}`
    );
    const secondApiData = await secondApiResponse.json();  

  return secondApiData.source_url ;
}




