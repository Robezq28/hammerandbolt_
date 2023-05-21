"use client";
import NavBar from "@/components/NavBar";
import "./globals.css";
import { Roboto } from "next/font/google";
import LanguageContextProvider from "@/contexts/LanguageContextProvider";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

// export const metadata = {
//   title: "hammerandbolt_ | web development",
//   description: "Clínica virtual para la atención de pacientes con diabetes",
//   themeColor: "#ffffff",
// };

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={roboto.className}>
      <body>
        <LanguageContextProvider>
          <NavBar />
          {children}
        </LanguageContextProvider>
      </body>
    </html>
  );
}
