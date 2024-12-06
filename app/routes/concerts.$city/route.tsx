import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }) => {
  return params.city;
};
const CityUnderConcerts = () => {
  const city = useLoaderData();
  console.log(city);
  return <div>Dynamic City: {city} under concerts</div>;
};

export default CityUnderConcerts;
