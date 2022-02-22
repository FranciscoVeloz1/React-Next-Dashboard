import GlobalNav from "@components/GlobalNav";
import { ToastContainer } from "react-bootstrap";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <GlobalNav />
      {children}
      <ToastContainer />
    </>
  );
};

export default DefaultLayout;
