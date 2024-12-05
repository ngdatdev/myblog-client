'use client'

import LandingLayout from "@/components/layouts/LandingLayout";
import React from "react";

export default function LandingRootLayout({ children }: { children: React.ReactNode }) {
    // const _accessToken_Cookie = getCookie(constants.ACCESS_TOKEN, { cookies })
    // if (_accessToken_Cookie) {
    //     redirect("/vi/home");
    // }

    return (
        <>
            <LandingLayout>{children}</LandingLayout>
        </>
    )
}