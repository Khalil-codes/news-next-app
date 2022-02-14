import Header from "../components/Header";
import "../styles/globals.css";
import "../styles/header.css";
function MyApp({ Component, pageProps }) {
  return (
    <div className="main-container">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
