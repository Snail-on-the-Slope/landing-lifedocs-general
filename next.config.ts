import path from 'node:path';
import type { NextConfig } from 'next';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(path.resolve(__dirname, '..'));
loadEnvConfig(__dirname);

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
