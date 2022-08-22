import { MainFooter } from "./main-footer";
import { MainNavbar } from "./main-navbar";

export const MainLayout = ({ children }) => {
  return (
    <>
      <MainNavbar />
      {children}
      <MainFooter />
    </>
  );
};
