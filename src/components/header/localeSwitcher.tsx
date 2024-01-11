"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n } from "@/root/i18n.config";
import { Grid, Typography } from "@gib-ui/core";

export default function LocaleSwitcher() {
    const pathName = usePathname();
    const selectedLocale = pathName.split("/")[1];

    const redirectedPathName = (locale: string) => {
        if (!pathName) return `/`;
        const segments = pathName.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <Grid item display="flex">
            {i18n.locales.map((locale) => {
                return (
                    <Grid
                        key={locale}
                        item
                        sx={{
                            bgcolor: selectedLocale === locale ? "#2A80B9" : "#B5E3E9",
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Link href={redirectedPathName(locale)}>
                            <Typography
                                color={selectedLocale === locale ? "#FFF" : "#2A80B9"}
                                fontSize="12px"
                                fontWeight="700"
                            >
                                {locale.toLocaleUpperCase()}
                            </Typography>
                        </Link>
                    </Grid>
                );
            })}
        </Grid>
    );
}
