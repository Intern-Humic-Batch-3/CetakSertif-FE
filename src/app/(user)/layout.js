"use client";
import { useEffect, useState } from "react";
import Hamburger from "@/icons/hamburger";
import CustomNavbar from "@/_components/Navbar";
import SidebarUser from "@/_components/SidebarUser";

export default function RootLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1468;
      setIsMobile(mobile);
      if (!mobile) setSidebarOpen(false); // Tutup sidebar jika kembali ke desktop
    };

    handleResize(); // Set state awal
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="en">
      <body>
        {isMobile ? (
          <>
            {/* Tombol Toggle Sidebar */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="fixed top-0 left-0 p-4 w-full z-50 bg-white"
            >
              <Hamburger className="w-10 text-black" />
            </button>

            {/* Sidebar dengan Toggle (hanya muncul saat dibuka) */}
            {sidebarOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
                {/* Sidebar */}
                <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-5 transition-transform duration-300">
                  <SidebarUser />
                </div>
              </div>
            )}
          </>
        ) : (
          <CustomNavbar />
        )}
        <div className="mt-28">{children}</div>
      </body>
    </html>
  );
}
