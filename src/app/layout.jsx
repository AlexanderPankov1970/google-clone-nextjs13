import "./globals.css";

export const metadata = {
  title: "Coogle Clone Nextjs13",
  description: "Google Clone created by Next js 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
