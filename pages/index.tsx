import { config } from "@config";
import { useTina } from "tinacms/dist/react";
// [Components]
import Layout from "@components/layout/default-layout/default-layout.component";
import Container from "@components/elements/container/container.component";
import Typography from "@components/elements/typography/typography.component";
import Spacer from "@components/elements/spacer/spacer.component";
import HeroExplore from "@components/layout/hero-explore/hero-explore.component";
import PlayIcon from "@components/elements/icons/play/play.component";

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

    return (
        <Layout
            title={title}
            description={description}
        >
            <Container>
                <HeroExplore
                    shadowColor="#b196b0"
                    title="Restoring the World"
                    copy="Isaiah 61 describes a new creation filled with joy and abundance. But for God to set everything right, he must first reverse everything that's wrong."
                    image={[
                        {
                            src: "/Isaiah%2061/isaiah-61_web-header.jpg",
                            alt: "Restoring the World",
                            fill: true,
                            sizes: "(max-width: 1023px) 100vw",
                            quality: 65,
                        },
                        {
                            src: "/Isaiah%2061/isaiah-61_web-header.jpg",
                            alt: "Restoring the World",
                            sizes: "(max-width: 1024px) 100vw",
                            fill: true,
                            quality: 65,
                        },
                    ]}
                    selectors={[
                        {
                            label: "Watch Isaiah 61",
                            onClick: () => alert("Playing Exous 1-18"),
                            icon: <PlayIcon />,
                        },
                        {
                            label: "Explore the Visual Commentary Series",
                            href: "/explore",
                        },
                    ]}
                />
            </Container>

            <Container maxWidth="desktop-large">
                <Spacer
                    bottom
                    variant={{ bg: "body", border: "center-dashed-rainbow" }}
                />
                <Typography
                    as="p"
                    variant="xl"
                >
                    Main Content of Home Page
                </Typography>
            </Container>
        </Layout>
    );
}
