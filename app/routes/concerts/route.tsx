import { Outlet } from "@remix-run/react";

const concerts = () => {
  return (
    <div>
      <h1>Concerts Page</h1>
      <Outlet />
    </div>
  );
};

export default concerts;
