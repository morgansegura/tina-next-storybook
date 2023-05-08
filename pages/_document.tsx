import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

interface IDocument {}

export default class MyDocument extends Document<IDocument> {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }

    render() {
        return (
            <Html>
                <head>
                    <Head />
                    <link
                        rel="stylesheet"
                        href="/_next/static/style.css"
                    />
                </head>

                <body>
                    <Main />
                    <div id="root" />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
