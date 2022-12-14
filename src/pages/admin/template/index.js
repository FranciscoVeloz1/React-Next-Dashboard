import List from "@containers/template/List";
import AdminLayout from "@containers/AdminLayout";
import { getSession } from "next-auth/react";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session === null) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

const index = () => {
  return <List />;
};

index.Layout = AdminLayout;

export default index;
