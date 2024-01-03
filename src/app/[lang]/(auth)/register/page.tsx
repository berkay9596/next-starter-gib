"use client";
import React from "react";
import Link from "next/link";
import { Button, Grid, Typography } from "@gib-ui/core";
import { Form, InputField } from "@/components";
import { getTranslate } from "@/lib";
import { Locale } from "@/root/i18n.config";
import registerAnimation from "@/assets/animation/register.json";
import { Layout } from "../components";
import { useRouter } from "next/navigation";

const RegisterPage = ({ params }: { params: { lang: Locale } }) => {
    const { register } = getTranslate(params.lang).page;
    const router = useRouter();
    const afterSubmit = () => {
        router.push(`/${params.lang}/login`);
    };

    return (
        <Layout animation={registerAnimation}>
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
                        {register.title}
                    </Typography>
                </Grid>
                <Grid item my={2}>
                    <Form
                        afterSubmit={afterSubmit}
                        defaultValues={{ name: "", email: "", password: "" }}
                    >
                        <Grid container rowGap={3}>
                            <Grid item xs={12}>
                                <InputField id="name" name="name" labeltext={register.name} />
                            </Grid>
                            <Grid item xs={12}>
                                <InputField id="email" name="email" labeltext={register.email} />
                            </Grid>
                            <Grid item xs={12}>
                                <InputField
                                    id="password"
                                    name="password"
                                    labeltext={register.password}
                                    type="password"
                                />
                            </Grid>
                            <Button type="submit" buttontype="primary" fullWidth>
                                {register.submitButton}
                            </Button>
                        </Grid>
                    </Form>
                </Grid>
                <Grid container gap="3px" alignItems="center">
                    {register.question}
                    <Link href={`/${params.lang}/login`}>
                        <Typography fontWeight={700} color="#1987A4">
                            {register.login}
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default RegisterPage;
