import Form from "@containers/template/Form";
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

const add = () => {
  return (
    <>
      <Form />
    </>
  );
};

add.Layout = AdminLayout;

export default add;
