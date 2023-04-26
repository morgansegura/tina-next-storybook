import type { AppProps } from "next/app";
// [Styles]
// import { GlobalStyles } from "@styles/global/global.styles";
import "@styles/global/global.scss";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* <GlobalStyles /> */}
            <Component {...pageProps} />
        </>
    );
}
