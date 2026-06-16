import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "बिहार के लोगों के लिए योजनाएं",
  description:
    "बिहार के लोगों के लिए बिहार और केंद्र सरकार की योजनाओं की आसान भाषा में जानकारी, दस्तावेज और आवेदन लिंक."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
