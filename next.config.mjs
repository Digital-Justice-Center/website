import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages. Trailing slashes make every page
  // a directory with index.html, which any static host serves as-is.
  output: 'export',
  trailingSlash: true,
};

export default withNextIntl(nextConfig);
