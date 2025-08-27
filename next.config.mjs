/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.forkinthekitchen.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'levalorcafe.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'mocktail.net',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/wikipedia/commons/**',
      },
      {
        protocol: 'https',
        hostname: 'midwestniceblog.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'brighteyedbaker.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'ucarecdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.osoaa.in',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'osoaa.in',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'www.thespruceeats.com',
        pathname: '/thmb/**',
      },
      {
        protocol: 'https',
        hostname: 'www.partnerscoffee.com',
        pathname: '/cdn/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.loveandlemons.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'hips.hearstapps.com',
        pathname: '/hmg-prod/images/**',
      }
    ]
  }
};

export default nextConfig;
