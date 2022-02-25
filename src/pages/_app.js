import DefaultLayout from "@containers/DefaultLayout";
import SSRProvider from "react-bootstrap/SSRProvider";
import { SessionProvider } from "next-auth/react";

//Importing bootstrap and fontawesome
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

//Importing own styles
import "@styles/globals.scss";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <SessionProvider session={session}>
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </SessionProvider>
  );
}

export default MyApp;
