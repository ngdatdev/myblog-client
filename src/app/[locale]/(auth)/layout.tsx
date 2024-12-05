'use client'

import React from "react";

export default function AuthRootLayout({ children }: { children: React.ReactNode }) {
    // const _accessToken_Cookie = getCookie(constants.ACCESS_TOKEN, { cookies })
    // if (_accessToken_Cookie) {
    //     redirect("/vi/home");
    // }

    return (
        <>
            <h4 className="text-center text-blue-800">Authentication</h4>
            {children}
        </>
    )
}