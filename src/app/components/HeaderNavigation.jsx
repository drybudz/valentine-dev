'use client';

import "./../globals.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import MenuAnimation from './MenuAnimation';

export default function HeaderNavigation({ pages = [] }) { // Default empty array
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const headerClasses = `navBar ${isHomePage ? 'homeNavBar' : ''}`;
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth <= 575);
            const handleResize = () => setIsMobile(window.innerWidth <= 575);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Safely get logo data with fallbacks
    const logoData = (isHomePage 
        ? pages[0]?.pageCompanyLogoWhite 
        : pages[0]?.pageCompanyLogo) || {};

    return (
        <header className={headerClasses}>
            <Link href="/" className="homeNavLink">
                <Image
                    src={logoData?.url || "/glove.svg"}
                    alt={logoData?.alt || "Valentine Logo"} 
                    width={77}
                    height={18}
                    priority
                />
            </Link>
            {isMobile ? (
                <div className="mobileNavContainer">
                    {!menuOpen ? (
                        <span className="menu-trigger" onClick={toggleMenu}>
                            MENU
                        </span>
                    ) : (
                        <MenuAnimation isOpen={menuOpen}>
                            <div className="mobileNavLinks">
                                {pages.slice().reverse().map((page) => (
                                    <Link key={page._id} href={`/${page.slug}`} onClick={toggleMenu}>
                                        {pathname === `/${page.slug}` ? (
                                            <b>{page.navTitle}</b>
                                        ) : (
                                            page.navTitle
                                        )}
                                    </Link>
                                ))}
                                <Link href="/about" className="homeNavLink" onClick={toggleMenu}>
                                    {pathname === "/about" ? <b>About</b> : "About"}
                                </Link>
                            </div>
                        </MenuAnimation>
                    )}
                </div>
            ) : (
                <div className="homeNavLinksContainer">
                    {pages.slice().reverse().map((page) => (
                        <Link key={page._id} href={`/${page.slug}`}>
                            {pathname === `/${page.slug}` ? <b>{page.navTitle}</b> : page.navTitle}
                        </Link>
                    ))}
                    <Link href="/about" className="homeNavLink">
                        {pathname === "/about" ? <b>About</b> : "About"}
                    </Link>
                </div>
            )}
        </header>
    );
}