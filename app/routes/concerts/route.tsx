import { Outlet } from "@remix-run/react";

import Favourite from "./favourite-cookie";

const concerts = () => {
  return (
    <div>
      <h1>Concerts Page</h1>
      <Favourite />
      <Outlet />
    </div>
  );
};

export default concerts;
