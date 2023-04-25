import { config } from "@config";
import { useTina } from "tinacms/dist/react";
// [Components]
import Layout from "@components/layout/default-layout/default-layout.component";
import { Container } from "@components/elements/container";

export default function Home(props: { query: any; variables: any; data: any }) {
    const {
        seo: {
            homeScreen: { description, title },
        },
    } = config;

    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });
    <p></p>;

    return (
        <Layout title={title} description={description}>
            <Container maxWidth="desktop-large">
                Main Content of Home Page
            </Container>

            <div></div>
            <p></p>
        </Layout>
    );
}
