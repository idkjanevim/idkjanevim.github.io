/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: '',
    },
    basePath: 'https://idkjanevim.github.io/',
    assetPrefix: 'https://idkjanevim.github.io/',
};

module.exports = nextConfig;
