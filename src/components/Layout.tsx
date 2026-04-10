import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <ScrollToTop />
    <Navbar />
    <main className="pt-16 md:pt-20">{children}</main>
    <Footer />
  </>
);

export default Layout;
