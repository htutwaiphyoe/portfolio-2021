import "../sass/main.scss";
import Layout from "@/components/Layout/Layout";
function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;
