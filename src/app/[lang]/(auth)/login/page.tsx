"use client";
import React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "universal-cookie";
import { Button, Grid, Typography } from "@gib-ui/core";
import { Form, InputField } from "@/components";
import { getTranslate } from "@/lib";
import { Locale } from "@/root/i18n.config";
import loginAnimation from "@/assets/animation/login.json";
import { Layout } from "../components";

const LoginPage = ({ params }: { params: { lang: Locale } }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const cookies = new Cookies();
    const { login } = getTranslate(params.lang).page;

    const afterSubmit = (res: any) => {
        if (!res?.hasErrorOrWarningMessages && res?.token) {
            cookies.set("token", res?.token, { path: "/" });
            const nextUrl = searchParams.get("redirectUrl");
            router.push(nextUrl || `/${params.lang}/portal`);
        }
    };

    return (
        <Layout animation={loginAnimation}>
            <Grid
                item
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                rowGap="1rem"
            >
                <Grid container flexDirection="column" alignItems="center">
                    <Typography fontSize="2rem" fontWeight={700}>
                        {login.title}
                    </Typography>
                    <Typography>{login.description}</Typography>
                </Grid>
                <Grid item my={2}>
                    <Form
                        url="auth/login"
                        afterSubmit={afterSubmit}
                        defaultValues={{ username: "", password: "" }}
                    >
                        <Grid container rowGap={3}>
                            <Grid item xs={12}>
                                <InputField
                                    id="username"
                                    name="username"
                                    labeltext={login.username}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputField
                                    id="password"
                                    name="password"
                                    labeltext={login.password}
                                    type="password"
                                />
                            </Grid>
                            <Button type="submit" buttontype="primary" fullWidth>
                                {login.submitButton}
                            </Button>
                        </Grid>
                    </Form>
                </Grid>
                <Grid container justifyContent="flex-end">
                    <Link href={`/${params.lang}/password-reset`}>
                        <Typography color="#878787" fontWeight={700}>
                            {login.passwordReset}
                        </Typography>
                    </Link>
                </Grid>
                <Grid container gap="3px" alignItems="center">
                    {login.question}
                    <Link href={`/${params.lang}/register`}>
                        <Typography fontWeight={700} color="#1987A4">
                            {login.register}
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default LoginPage;
