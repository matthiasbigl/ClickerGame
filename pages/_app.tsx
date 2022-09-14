import "../styles/globals.scss";
import type { AppProps } from 'next/app'
import {Layout} from "../components";

function MyApp({ Component, pageProps }: AppProps) {

    return(
        // @ts-ignore
            <Layout>
                <Component {...pageProps} />
            </Layout>


    );
}

export default MyApp
