/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "static1.squarespace.com"
        },

        ]

    }
}

module.exports = nextConfig
