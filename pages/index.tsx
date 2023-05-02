import { config } from "@config";
import { useTina } from "tinacms/dist/react";
// [Components]
import Button from "@components/elements/button/button.component";
import Container from "@components/elements/container/container.component";
import HeroExplore from "@components/layout/hero-explore/hero-explore.component";
import Image from "@components/elements/image/image.component";
import Layout from "@components/layout/default-layout/default-layout.component";
import PlayIcon from "@components/elements/icons/play/play.component";
import Spacer from "@components/elements/spacer/spacer.component";
import Typography from "@components/elements/typography/typography.component";

// [Styles]
import * as s from "@styles/pages/home/home.styled";

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
                            sizes: "(max-width: 1024px) 100vw, 33vw",
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

            <Container maxWidth="desktop">
                <Spacer
                    bottom
                    variant={{ bg: "body" }}
                />
                <s.SupportBlock>
                    <s.Content>
                        <s.Title>
                            We believe that the story of Jesus has the power to
                            transform people and entire communities.
                        </s.Title>
                        <s.Copy>
                            Your generous support helps us continue making
                            biblical resources for our growing global audience.
                        </s.Copy>
                        <s.Button>
                            <Button
                                href="/support"
                                label="Support BibleProject"
                            />
                        </s.Button>
                    </s.Content>
                    <s.Grid>
                        <s.Column>
                            <s.Grid>
                                <s.Column>
                                    <s.Chart>
                                        <s.ChartInner>
                                            <s.Title>2%</s.Title>
                                            <s.Copy>604 Patrons</s.Copy>
                                        </s.ChartInner>
                                    </s.Chart>
                                </s.Column>
                                <s.Column>
                                    <s.ChartMeta>
                                        <s.Supertitle>
                                            April Funding
                                        </s.Supertitle>
                                        <s.Title>
                                            87% Monthly Goal Funded
                                        </s.Title>
                                    </s.ChartMeta>
                                </s.Column>
                            </s.Grid>
                        </s.Column>
                        <s.Column>
                            <s.Grid>
                                <s.Column>
                                    <s.Chart>
                                        <s.ChartInner>
                                            <s.ChartImage>
                                                <Image
                                                    src="Classroom%202.0/class-1-corinthians-lucy-peppiatt-square.jpg"
                                                    alt="Restoring the World"
                                                    fill={true}
                                                    sizes="(max-width: 224px) 100vw"
                                                    quality={65}
                                                />
                                            </s.ChartImage>
                                        </s.ChartInner>
                                    </s.Chart>
                                </s.Column>
                                <s.Column>
                                    <s.ChartMeta>
                                        <s.Supertitle>
                                            Latest on the App
                                        </s.Supertitle>
                                        <s.Title>The Exodus From Egypt</s.Title>
                                    </s.ChartMeta>
                                </s.Column>
                            </s.Grid>
                        </s.Column>
                    </s.Grid>
                </s.SupportBlock>
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
