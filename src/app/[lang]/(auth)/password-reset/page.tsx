"use client";
import React from "react";
import Link from "next/link";
import { Button, Grid, Typography } from "@gib-ui/core";
import { Form, InputField } from "@/components";
import { getTranslate } from "@/lib";
import { Locale } from "@/root/i18n.config";
import forgotPasswordAnimation from "@/assets/animation/forgot-password.json";
import { Layout } from "../components";
import { useRouter } from "next/navigation";

const PasswordReset = ({ params }: { params: { lang: Locale } }) => {
    const { passwordReset } = getTranslate(params.lang).page;
    const router = useRouter();
    const afterSubmit = () => {
        router.push(`/${params.lang}/login`);
    };

    return (
        <Layout animation={forgotPasswordAnimation}>
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
                        {passwordReset.title}
                    </Typography>
                </Grid>
                <Grid item my={2}>
                    <Form afterSubmit={afterSubmit} defaultValues={{ email: "" }}>
                        <Grid container rowGap={3}>
                            <Grid item xs={12}>
                                <InputField
                                    id="email"
                                    name="email"
                                    labeltext={passwordReset.email}
                                />
                            </Grid>
                            <Button type="submit" buttontype="primary" fullWidth>
                                {passwordReset.submitButton}
                            </Button>
                        </Grid>
                    </Form>
                </Grid>
                <Grid container gap="3px" alignItems="center">
                    <Link href={`/${params.lang}/login`}>
                        <Typography fontSize="13px" fontWeight={700} color="#1987A4">
                            {passwordReset.login}
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default PasswordReset;
