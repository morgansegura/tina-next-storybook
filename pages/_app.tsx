import type { AppProps } from "next/app";

// [Styles]
import "@public/global.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}
