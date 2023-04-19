import React from "react";
import Head from "next/head";
import { config } from "@config";
{
    /* https://developers.google.com/search/docs/beginner/seo-starter-guide */
}
// [Components]
import { ISeo } from "@components/layout/seo/seo.types";

export default function Seo({
    children,
    description,
    image,
    title,
    path,
}: ISeo) {
    const {
        brand: { name },
    } = config;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta name="description" content={description} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={path} />
                <meta property="og:image" content={image} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="675" />
                <meta property="og:locale" content="en" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:site_name" content={name} />
                <meta property="og:type" content="website" />
                <meta name="theme-color" content="#ffffff" />
                <meta charSet="utf-8" />
                <meta content="IE=Edge" httpEquiv="X-UA-Compatible" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                {/* <link
                    rel="manifest"
                    href="/_pwa/developers/manifest.json"
                    crossOrigin="use-credentials"
                ></link> */}
                <meta name="session_expiry" content="0" />
            </Head>
            {children}
        </>
    );
}
