/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'qydrdpgikrvsejkkemre.supabase.co',
      },
    ],
  },
};

module.exports = nextConfig;
