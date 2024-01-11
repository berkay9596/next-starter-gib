"use client";
import { getTranslate } from "@/lib";
import { Locale } from "@/root/i18n.config";
import { Button } from "@gib-ui/core";
import { useState } from "react";
import { Skeleton } from "@gib-ui/core";
import Link from "next/link";
import Image from "next/image";
import hero from "../../../assets/images/hero.svg";
import styles from "./home.module.css";

const Home = ({ params }: { params: { lang: Locale } }) => {
    const { page } = getTranslate(params.lang);
    const [testError, setTestError] = useState(false);
    const [isSkeletonActive, setIsSkeletonActive] = useState(false);

    if (testError) throw new Error("test");
    if (isSkeletonActive)
        setTimeout(() => {
            setIsSkeletonActive(false);
        }, 2500);

    return (
        <>
            {!isSkeletonActive ? (
                <div className={styles.heroContainer}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroHeading}>{page.home.title}</h1>

                        <p className={styles.heroParagraph}>
                            {page.home.description}
                            <br />
                            <br />
                            {page.home.text}
                        </p>

                        <div className={styles.heroButtons}>
                            <Button
                                buttontype="general"
                                sx={{
                                    background: "#2D4E69"
                                }}
                                onClick={() => setTestError(true)}
                            >
                                {page.home.errorButton}
                            </Button>
                            <Link href={`/${params.lang}/falsyroute`}>
                                <Button
                                    buttontype="primary"
                                    fullWidth
                                    sx={{
                                        background: "#2C80B8"
                                    }}
                                >
                                    {page.home.notFoundButton}
                                </Button>
                            </Link>
                            <Button
                                buttontype="secondary"
                                onClick={() => setIsSkeletonActive(true)}
                                className={styles.heroParagraph}
                            >
                                {page.home.skeletonButton}
                            </Button>
                        </div>
                    </div>
                    <Image
                        src={hero}
                        width={693}
                        height={621}
                        alt="hero"
                        className={styles.heroImage}
                    />
                </div>
            ) : (
                <div className={styles.heroSkeletonContainer}>
                    <div className={styles.heroSkeletonLeft}>
                        <Skeleton width="816px" height="537px" animation></Skeleton>
                        <div className={styles.heroSkeletonButtons}>
                            {new Array(3).fill(null).map((_, key) => (
                                <Skeleton
                                    key={key}
                                    width="120px"
                                    height="40px"
                                    animation
                                ></Skeleton>
                            ))}
                        </div>
                    </div>

                    <Skeleton width="693px" height="537px" animation></Skeleton>
                </div>
            )}
        </>
    );
};

export default Home;
