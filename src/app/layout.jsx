import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Coogle Clone Nextjs13",
  description: "Google Clone created by Next js 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Исправляем "плавающий"footer gg26 27 min */}
      <body className="relative min-h-screen">
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
