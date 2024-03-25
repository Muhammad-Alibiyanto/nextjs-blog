import HeaderComponent from "@/src/components/Header";
import FooterComponent from "@/src/components/Footer";

import "@/src/styles/globals.css";
import "@/src/styles/typography.css";
import "@/src/styles/grid.css";

export const metadata = {
  title: "NextJS Blogs",
  description: "Create an awesome blog with nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <HeaderComponent />
        
        <main>
          {children}
        </main>

        <FooterComponent />

      </body>
    </html>
  );
}
