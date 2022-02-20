import GlobalNav from "@components/GlobalNav";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalNav />
      {children}
    </>
  );
};

export default Layout;
