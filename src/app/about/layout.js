import "./../globals.css";
import Link from 'next/link';
import { getPages } from "../../../sanity/schemas/sanity-utils";
import Image from 'next/image'; 
import HeaderNavigation from "../components/HeaderNavigation";

export const metadata = {
  title: "Valentine Website 2025",
  description: "Generated with Next + Sanity",
};

export default async function RootLayout({ children }) {
  //get all Pages
  const data = await getPages(); // The getPages function now returns an object
  const pages = data?.pages || []; // Access the 'pages' array
  
  const regularLogoData = pages[0]?.pageCompanyLogo;

  // Layout of the About Page - - - - - ABOUT
  return (
    <html lang="en">
      <body>
        
       <HeaderNavigation pages={pages} />
        
        
        <main>{children}</main>

      </body>
    </html>
  );
}
