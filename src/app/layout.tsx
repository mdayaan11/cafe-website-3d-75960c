export const metadata = { title: "cafe website 3d", description: "Built by Heaven AI Engine" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}