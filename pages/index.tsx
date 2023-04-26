import { config } from "@config";
import { useTina } from "tinacms/dist/react";
// [Components]
import Layout from "@components/layout/default-layout/default-layout.component";
import Container from "@components/elements/container/container.component";
import Typography from "@components/elements/typography/typography.component";
import Spacer from "@components/elements/spacer/spacer.component";
import HeroExplore from "@components/layout/hero/hero-explore/hero-explore.component";
import PlayIcon from "@components/elements/icons/play/play.component";
import Button from "@components/elements/button/button.component";
import Image from "@components/elements/image/image.component";

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
        <Layout title={title} description={description}>
            {/* <HeroExplore
                bgColor="#b196b0"
                title="The Last Will Be First"
                copy="Discover how God overturns human-made systems of status and redefines power as love."
                selectors={
                    <>
                        <Button
                            icon="left"
                            label="Watch The Last Will Be First"
                            path="/"
                            variant="play-rounded-light"
                        >
                            <PlayIcon />
                        </Button>
                        <Button
                            icon="left"
                            label="Watch The Last Will Be First"
                            path="/"
                            variant="outline-squarish-light"
                        ></Button>
                    </>
                }
                image={
                    <Image
                        src="Isaiah%2061/isaiah-61_web-header.jpg"
                        alt="Hero Explore"
                        variant="cover-image"
                        quality={65}
                        // objectFit="cover"
                        // objectPosition="center"
                    />
                }
            /> */}
            <Container maxWidth="desktop-large">
                <Typography>Main Content of Home Page</Typography>
                <Spacer
                    bottom
                    top
                    variant={{ bg: "body", border: "center-dashed-rainbow" }}
                />
                <Typography>Main Content of Home Page</Typography>
            </Container>
        </Layout>
    );
}
