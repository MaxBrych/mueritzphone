import Header from "../../components/Header";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="font-modern text-gray-900 bg-white font-normal">
        <Header />

        {children}
      </body>
    </html>
  );
}
