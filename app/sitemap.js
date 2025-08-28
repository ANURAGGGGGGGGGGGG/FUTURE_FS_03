export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const routes = [""] .map((route) => ({
    // Fix: use /\/+$\/ to match one or more trailing slashes
    url: `${base}/${route}`.replace(/\/+$/, "/"),
    lastModified: new Date(),
  }));
  return routes;
}