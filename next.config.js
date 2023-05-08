/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    // swcMinify: true,
    // compiler: {
    //     styledComponents: true,
    // },
    // sassOptions: {
    //     includePaths: [path.join(__dirname, "styles")],
    // },
    images: {
        domains: ["ik.imagekit.io"],
    },
};

module.exports = nextConfig;
