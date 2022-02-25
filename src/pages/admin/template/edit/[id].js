import Form from "@containers/template/Form";
import AdminLayout from "@containers/AdminLayout";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

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

const edit = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Form />
    </>
  );
};

edit.Layout = AdminLayout;

export default edit;
