import React from "react";

export const metadata = {
    title: "Admin Panel",
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fa" dir="rtl">
            <head>
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
                {/* <link href="https://fonts.cdnfonts.com/css/iranyekan" rel="stylesheet" /> */}
                <link rel="preconnect" href="//fdn.fontcdn.ir" />
                <link rel="preconnect" href="//v1.fontapi.ir" />
                <link href="https://v1.fontapi.ir/css/VazirFD" rel="stylesheet" />
                <link href="https://fonts.cdnfonts.com/css/iranyekan" rel="stylesheet" />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}