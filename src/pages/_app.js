import Layout from "@containers/Layout";

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
  return (
    <ProviderAuth>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProviderAuth>
  );
}

export default MyApp;
