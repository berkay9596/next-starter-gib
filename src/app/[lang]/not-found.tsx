"use client";
/*
 **This file is a public 404 page.
 **If we specifically want a route-specific 404 page,
 **this can be created under the relevant folders with the same name as this file
 */

import Link from "next/link";
import { Button } from "@gib-ui/core";

export default function NotFound() {
    return (
        <div style={{ textAlign: "center", fontSize: "24px" }}>
            <h2>Custom 404 Page</h2>
            <p>Could not find requested resource</p>
            <p>Modify This Page</p>
            <Link href="/">
                <Button>Back to home</Button>
            </Link>
        </div>
    );
}
