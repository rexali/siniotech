/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname:  '*',
                port: '',
                pathname: '/uploads/*'
            }
        ],
        dangerouslyAllowSVG: true,
        // domains: ['images.unsplash.com', 'placehold.co', 'localhost'],
    },
}

module.exports = nextConfig
