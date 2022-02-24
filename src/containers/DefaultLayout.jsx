import GlobalNav from "@containers/GlobalNav";
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
