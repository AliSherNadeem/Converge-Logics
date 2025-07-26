import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/NavBar";
// import Footer from '@/components/layout/footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Converge Logics",
  description: "Cutting-edge technology solutions for modern businesses",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
