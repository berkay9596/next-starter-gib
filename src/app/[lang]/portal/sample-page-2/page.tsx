"use client";
import { getTranslate } from "@/lib";
import { Locale } from "@/root/i18n.config";

const SamplePage2 = ({ params }: { params: { lang: Locale } }) => {
    const { sayfa2 } = getTranslate(params.lang).page;
    return (
        <div style={{ textAlign: "center" }}>
            <h1>{sayfa2.title}</h1>
            <p>{sayfa2.description}</p>
        </div>
    );
};

export default SamplePage2;
