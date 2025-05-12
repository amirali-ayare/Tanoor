'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import BlackNavbar from './BlackTxtNavbar';

export default function ConditionalNavbar() {
    const pathname = usePathname();
    const hideOnRoutes = ['/admin','/signup','/login'];
    const shouldHide = hideOnRoutes.some((route) => pathname.startsWith(route));

    if (shouldHide){
        return null;
    }
    if (pathname === '/') {
        return <Navbar/>
    }
    return <BlackNavbar />

    // if (shouldHide) return null;
    // if (!shouldHide2) return <BlackNavbar />
    // return <Navbar />;
}