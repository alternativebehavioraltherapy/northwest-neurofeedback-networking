import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "Northwest Neurofeedback Networking";

function publicShareHost(): string {
  const raw = String(process.env.VITE_PUBLIC_HOSTNAME ?? "")
    .split(",")[0]
    .trim()
    .split(":")[0]
    .toLowerCase();
  if (!raw || !raw.includes(".") || /^\d{1,3}(?:\.\d{1,3}){3}$/.test(raw)) return "";
  if (raw === "vercel.app" || raw.endsWith(".vercel.app")) return "";
  return raw;
}

function shareImageMeta() {
  const host = publicShareHost();
  if (!host) return [];
  const ogImage = `https://${host}/og.jpg`;
  const xBanner = `https://${host}/x-banner.jpg`;
  return [
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "x:game:image", content: xBanner },
    { property: "x:game:image:width", content: "1200" },
    { property: "x:game:image:height", content: "264" },
  ];
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Oregon and Washington advocacy network for education, civic voice, and professional connection around neurofeedback.",
      },
      { name: "theme-color", content: "#1B365D" },
      ...shareImageMeta(),
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", sizes: "64x64", href: "/brand/nnn-icon-64.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/brand/nnn-icon-192.png" },
      { rel: "apple-touch-icon", href: "/brand/nnn-icon-192.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
