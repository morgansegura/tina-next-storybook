import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

interface IDocument {}

export default class MyDocument extends Document<IDocument> {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props: any) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                // styles: [initialProps.styles],
                styles: (
                    <>
                        {initialProps.styles}
                        {/* {sheet.getStyleElement()} */}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head />

                <body>
                    <Main />
                    <div id="root" />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
