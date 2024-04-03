import Nextra from "nextra";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withNextra = Nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

export default withNextra(nextConfig);
