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
    </div>
  );
}
