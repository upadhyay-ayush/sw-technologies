
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SW Technologies",
  description: "Modern Web Development Company",
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
