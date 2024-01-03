"use client";
import React, { useEffect, useRef, useState } from "react";
import { Backdrop, SideMenu, useWindowSize } from "@gib-ui/core";
import { useRouter } from "next/navigation";
import { Locale } from "@/root/i18n.config";
import { getTranslate } from "@/lib";
import { useAppSelector, useAppDispatch } from "@/redux//hooks";
import { showSidebar, setShowSidebar } from "@/redux/slices/sidebarSlice";
import styles from "./sidebar.module.css";
import logo from "../../assets/images/gib_logo.png";
import Image from "next/image";
import { Home, MyInfos } from "@gib-ui/icons";
import Cookies from "universal-cookie";

const Sidebar = ({ lang }: { lang: Locale }) => {
    const hasLoginPage = process.env.NEXT_PUBLIC_HASLOGINPAGE === "true";
    const router = useRouter();
    const cookies = new Cookies();
    const { width } = useWindowSize();
    const { navigation } = getTranslate(lang);
    const show = useAppSelector(showSidebar);
    const dispatch = useAppDispatch();
    const [sidebarMobile, setSidebarMobile] = useState<boolean>(width < 1200);
    const sidebarContentRef = useRef<HTMLDivElement | null>(null);

    const menuItems = [
        {
            id: "1",
            label: navigation.sayfa1,
            icon: <Home />
        },
        {
            id: "2",
            label: navigation.sayfa2,
            icon: <MyInfos />
        }
    ];

    const handleItemClick = (itemId: string) => {
        router.push(`/${lang}/portal/sample-page-${itemId}`);
        dispatch(setShowSidebar(false));
    };

    useEffect(() => {
        if (width <= 1200) {
            setSidebarMobile(true);
            dispatch(setShowSidebar(false));
        } else {
            setSidebarMobile(false);
            dispatch(setShowSidebar(true));
        }
    }, [width]);

    const handleLogout = () => {
        cookies.remove("token", { path: "/" });
        router.push(`/${lang}/login`);
    };

    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (sidebarMobile && show) {
            // Check if the click occurred inside the sidebar content
            if (
                sidebarContentRef.current &&
                sidebarContentRef.current.contains(event.target as Node)
            ) {
                // Click occurred inside the sidebar content, do not close the sidebar
                return;
            }
            // Click occurred outside the sidebar content, close the sidebar
            dispatch(setShowSidebar(false));
        }
    };

    const sidebarStyled = () => {
        if (sidebarMobile) {
            return (
                <Backdrop
                    open={Boolean(sidebarMobile && show)}
                    onClick={handleBackdropClick as any}
                >
                    <div className={styles.sidebarMobile} ref={sidebarContentRef}>
                        <SideMenu
                            menuItems={menuItems}
                            onItemClick={handleItemClick}
                            logo={<Image src={logo} width={100} height={80} alt="logo" />}
                            closeIcon
                            closeIconOnClick={() => dispatch(setShowSidebar(false))}
                            showActionButton={hasLoginPage}
                            actionButtonLabel={navigation?.logoutButton}
                            onAction={handleLogout}
                            menuSearch
                            customStyles={{
                                sideMenuContainer: {
                                    minHeight: "110vh !important",
                                    background: "linear-gradient(180deg, #2A80B9 0%, #2D3F51 100%)"
                                },
                                textFieldFormControlStyle: {
                                    width: "200px"
                                },
                                actionButtonStyles: {
                                    padding: "2rem",
                                    position: "absolute",
                                    width: "350px",
                                    bottom: 0,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#0A808B"
                                }
                            }}
                        />
                    </div>
                </Backdrop>
            );
        } else {
            return (
                <SideMenu
                    menuItems={menuItems}
                    onItemClick={handleItemClick}
                    menuSearch
                    customStyles={{
                        sideMenuContainer: {
                            width: "350px",
                            background: "linear-gradient(180deg, #2A80B9 0%, #2D3F51 100%)",
                            minHeight: "80vh !important"
                        },
                        textFieldFormControlStyle: {
                            width: "270px"
                        },

                        mobileSubMenuItem: {
                            height: undefined
                        },
                        actionButtonStyles: {
                            padding: "2rem",
                            position: "absolute",
                            width: "350px",
                            bottom: 0,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#0A808B"
                        }
                    }}
                />
            );
        }
    };

    return <>{sidebarStyled()}</>;
};

export default Sidebar;
