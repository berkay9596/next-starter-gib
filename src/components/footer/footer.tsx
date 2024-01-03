"use client";
import React from "react";
import { Footer } from "@gib-ui/core";
import { Locale } from "@/root/i18n.config";
import { getTranslate } from "@/lib";
import logo from "../../assets/images/gib_logo.png";
import Image from "next/image";
import styles from "./footer.module.css";

const SampleFooter = ({ lang }: { lang: Locale }) => {
    const { section1, section2, section3 } = getTranslate(lang).footer;
    const sections = [
        {
            headerText: section1.header,
            links: [
                {
                    href: "#",
                    text: "Lorem ipsum"
                },
                {
                    href: "#",
                    text: "Lorem ipsum"
                }
            ]
        },
        {
            headerText: section2.header,
            links: [
                {
                    href: "#",
                    text: "Lorem ipsum"
                },
                {
                    href: "#",
                    text: "Lorem ipsum"
                }
            ]
        },
        {
            headerText: section3.header,
            links: [
                {
                    href: "#",
                    text: "Lorem ipsum"
                },
                {
                    href: "#",
                    text: "Lorem ipsum"
                }
            ]
        }
    ];
    const customStyles = {
        footer: { zIndex: -1 },
        contentBottom: {
            paddingBottom: 0
        }
    };
    const ContentLeft = () => {
        return <Image src={logo} alt="logo" width={150} height={120} />;
    };
    return (
        <>
            <Footer
                background="linear-gradient(94deg, #2B80B9 0%, #2D4256 98.89%)"
                sections={sections}
                mobileViewSize={467}
                customStyles={customStyles}
                contentLeft={<ContentLeft />}
                //contentBottom will be at the bottom after npm update
                contentBottom={
                    <div className={styles.copyRightContainer}>
                        <span className={styles.copyRightText}>
                            Copyright © 2023 T.C. Gelir İdaresi Başkanlığı - GİBTeknoloji
                        </span>
                    </div>
                }
            />
        </>
    );
};

export default SampleFooter;
