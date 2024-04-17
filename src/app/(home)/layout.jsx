import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopNav from "./components/TopNav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <TopNav />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}