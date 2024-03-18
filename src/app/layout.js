import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "./globals.css";
import "../assets/css/bootstrap.min.css"; 
import { ProviderFunc } from "@/store/ProviderFunc";

export const metadata = {
  title: "Punjabsind | Next App",
  description: "Punjabsind by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProviderFunc>
          <Header />
          {children}
          <Footer />
        </ProviderFunc>
      </body>
    </html>
  );
}
