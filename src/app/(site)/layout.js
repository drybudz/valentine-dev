import "./../globals.css";
import Link from 'next/link';
import { getPages } from "../../../sanity/schemas/sanity-utils";
import HeaderNavigation from "../components/HeaderNavigation";
import HomeChecker from "../components/HomeChecker";


export const metadata = {
  title: "Valentine Website 2025",
  description: "Generated with Next + Sanity",
};

export default async function RootLayout({ children }) {
  //get all Pages Changes except About
  const data = await getPages(); // The getPages function now returns an object
  const pages = data?.pages || []; // Access the 'pages' array
  
  // Layout of the Pages //Except Studio & About - - - - - PAGES
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Silkscreen:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <HomeChecker />
        {/* Add homeNavBar if not a homepage (check with slug)... */}
        <HeaderNavigation pages={pages} />
        
        <main>{children}</main>
      </body>
    </html>
  );
}
