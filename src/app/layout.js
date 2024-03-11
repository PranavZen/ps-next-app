import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { OurStoreProvider } from "@/store/OurStoreContext";
import './globals.css';
import "../assets/css/bootstrap.min.css";


export const metadata = {
  title: "Punjabsind | Next App",
  description: "Punjabsind by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <OurStoreProvider>
          <Header />
          {children}
          <Footer />
        </OurStoreProvider>
      </body>
    </html>
  );
}
