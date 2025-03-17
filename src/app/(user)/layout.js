import CustomNavbar from "@/_components/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomNavbar />
        {children}
      </body>
    </html>
  );
}
