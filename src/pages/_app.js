import DefaultLayout from "@containers/DefaultLayout";

//Import context
import { ProviderAuth } from "@hooks/useAuth";

//Importing bootstrap and fontawesome
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

//Importing own styles
import "@styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <ProviderAuth>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProviderAuth>
  );
}

export default MyApp;
