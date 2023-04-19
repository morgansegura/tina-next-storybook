import { config } from "@config";
// [Components]
import Layout from "@components/layout/default-layout/default-layout.component";
import { Container } from "@components/elements/container";

export default function Home() {
    const {
        seo: {
            homeScreen: { description, title },
        },
    } = config;

    return (
        <Layout title={title} description={description}>
            <Container maxWidth="desktop-large">
                Main Content of Home Page
            </Container>
        </Layout>
    );
}
