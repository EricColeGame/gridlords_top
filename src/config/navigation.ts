interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "builds", path: "/builds", isContentType: true },
  { key: "units", path: "/units", isContentType: true },
  { key: "platforms", path: "/platforms", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
