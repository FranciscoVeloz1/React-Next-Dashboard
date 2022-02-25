import GlobalNav from "@containers/GlobalNav";
import { ToastContainer } from "react-toastify";

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
