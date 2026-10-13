export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Gridlords Wiki",
  shortName: "Gridlords",
  logoText: "GL",
  tagline: "Guides, Builds, Heroes & Strategy",
  description: "Explore Gridlords Wiki for strategy guides, gameplay tips, builds, tactical information, and essential resources to improve your performance and master every battle.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gridlords.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://gridlords.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/3768400/Gridlords/",
  heroVideoId: "bdErgZ5jF5E", // Official Gridlords Early Access Release Trailer (Goblinz Publishing)
  social: {
    discord: "https://discord.gg/goblinzstudio",
    youtube: "https://www.youtube.com/c/GoblinzPublishing",
    twitter: "https://twitter.com/studio_goblinz",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
