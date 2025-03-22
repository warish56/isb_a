import { Footer } from "./_components/Footer";
import { Navbar } from "./_components/NavBar";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer />
    </div>
  );
}
