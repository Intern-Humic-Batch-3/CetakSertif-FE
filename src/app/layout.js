import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Humic Engineering | Cetak Sertifikat",
  description: "Platform untuk mencetak sertifikat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} w-screen h-screen`}>
        {children}
      </body>
    </html>
  );
}
