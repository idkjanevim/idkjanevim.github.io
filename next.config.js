/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: '',
    },
    basePath: '/idkjanevim.github.io',
    assetPrefix: '/idkjanevim.github.io/',
};

module.exports = nextConfig;
