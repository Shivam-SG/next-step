import "../globals.css";

export const metadata = {
  title: "Next-Step",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}