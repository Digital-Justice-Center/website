// The <html> element lives in app/[locale]/layout.tsx so it can carry the
// locale. This root layout only exists for the root redirect and 404 pages.
export default function RootLayout({children}: {children: React.ReactNode}) {
  return children;
}
