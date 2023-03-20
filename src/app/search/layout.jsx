import Footer from "@/components/Footer";
import SearchHeader from "@/components/SearchHeader";
import "./../globals.css";

export const metadata = {
  title: "Coogle Clone Nextjs13",
  description: "Google Clone created by Next js 13",
};

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
