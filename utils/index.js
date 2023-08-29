export const updateSearchParams = (type, value) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};

export const deleteSearchParams = (type) => {
  const newSearchParams = new URLSearchParams(window.location.search);
  newSearchParams.delete(type.toLocaleLowerCase());
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;
  return newPathname;
};

export async function IBCT(filters) {
  const { per_page, search, level_of_certification } = filters;
  const response = await fetch(
    `https://test.ketodietnutrition.org/TestKeto/wp-json/wp/v2/ibct-trainers/?per_page=${per_page}&search=${search}&level_of_certification=${level_of_certification}`
  );
  const result = await response.json();
  return result;
}

export async function fetchImages(secondaryImages) {
  const secondApiResponse = await fetch(
    `https://test.ketodietnutrition.org/TestKeto/wp-json/wp/v2/media/${secondaryImages}`
  );
  const secondApiData = await secondApiResponse.json();
  return secondApiData.source_url;
}
