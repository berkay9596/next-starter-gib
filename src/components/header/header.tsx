"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import styles from "./header.module.css";
import LocaleSwitcher from "./localeSwitcher";
import { Locale } from "@/root/i18n.config";
import { getTranslate } from "@/lib";
import { Grid, useWindowSize } from "@gib-ui/core";
import { useAppSelector, useAppDispatch } from "@/redux//hooks";
import { showSidebar, setShowSidebar } from "@/redux/slices/sidebarSlice";
import { Icons } from "@gib-ui/icons";
import Image from "next/image";
import logo from "../../assets/images/gib_logo.png";

const Header = ({ lang }: { lang: Locale }) => {
    const hasLoginPage = process.env.NEXT_PUBLIC_HASLOGINPAGE === "true";
    const cookies = new Cookies();
    const router = useRouter();
    const { width } = useWindowSize();
    const { navigation } = getTranslate(lang);
    const show = useAppSelector(showSidebar);
    const dispatch = useAppDispatch();
    const handleLogout = () => {
        cookies.remove("token", { path: "/" });
        router.push(`/${lang}/login`);
    };

    return (
        <header className={styles.header}>
            <Link className={styles.link} href={`/${lang}/portal`}>
                <Image src={logo} width={100} height={80} alt="logo" />
            </Link>
            <nav className={styles.nav}>
                <Grid item display={{ xs: "none", sm: "inline-flex" }} gap="2rem">
                    <Link
                        className={styles.link}
                        href={`/${lang}/portal/sample-page-1`}
                        shallow={true}
                    >
                        {navigation?.sayfa1}
                    </Link>
                    <Link
                        className={styles.link}
                        href={`/${lang}/portal/sample-page-2`}
                        shallow={true}
                    >
                        {navigation?.sayfa2}
                    </Link>
                </Grid>
                {hasLoginPage && width >= 1200 && (
                    <button className={styles.button} onClick={handleLogout}>
                        {navigation?.logoutButton}
                    </button>
                )}
                <LocaleSwitcher />
                {width < 1200 && (
                    <button
                        className={styles.menuButton}
                        onClick={() => dispatch(setShowSidebar(!show))}
                    >
                        {width < 1200 && show ? (
                            <Icons.MenuOpen fontSize="large" />
                        ) : (
                            <Icons.Menu fontSize="large" />
                        )}
                    </button>
                )}
            </nav>
        </header>
    );
};

export default Header;
