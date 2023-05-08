import { useEffect, useState } from "react";
import { config } from "@config";
// [Components]
import Layout from "@components/layouts/layout/Layout";
import Container from "@components/elements/container/Container";
// [Styles]
// import * as s from "@styles/pages/about/about.styled";
// [Types]
import { IAboutScreen } from "@styles/pages/about/about.types";

// [Data]
// import { client } from "@tina/__generated__/client";

const {
    seo: {
        homeScreen: { description, title },
    },
} = config;

// export function getPosts() {
//     const postsResponse: any = client?.queries?.postConnection();
//     const posts = postsResponse.data.postConnection?.edges.map((post: any) => {
//         return { slug: post?.node._sys.filename };
//     });

//     return posts || "Morgan is cool";
// }

export default function about({}: IAboutScreen) {
    // const data = getPosts();

    // const [posts, setPosts] = useState<any>(data);

    // useEffect(() => {
    //     setPosts(posts);
    //     console.log(posts);
    // }, [posts]);

    return (
        <Layout
            title={title}
            description={description}
        >
            <Container>About Page</Container>
        </Layout>
    );
}
