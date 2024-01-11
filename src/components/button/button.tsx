import React from "react";
import { Button as GibButton, ButtonProps } from "@gib-ui/core";
import { useAppSelector } from "@/redux/hooks";
import { customization } from "@/redux/slices/customizationSlice";

const Button = ({ sx, ...props }: ButtonProps) => {
    const styles = useAppSelector(customization);

    let bgColor = styles.primaryColor;
    let borderColor = styles.borderColor;
    let textColor = "#FFF";

    switch (props.buttontype) {
        case "primary":
            bgColor = styles.primaryDarkColor;
            borderColor = styles.primaryDarkColor;
            break;
        case "secondary":
            bgColor = styles.primaryLightColor;
            borderColor = styles.primaryLightColor;
            break;
        case "general":
            bgColor = styles.primaryColor;
            borderColor = styles.primaryColor;
            break;
        case "generalSecondary":
            bgColor = "#FFF";
            borderColor = styles.primaryColor;
            textColor = styles.primaryColor;
            break;
    }

    return (
        <GibButton
            sx={{
                borderRadius: styles.borderRadius,
                backgroundColor: bgColor,
                borderColor: borderColor,
                color: textColor,
                "&:hover": { backgroundColor: bgColor },
                ...sx
            }}
            {...props}
        >
            {props.children}
        </GibButton>
    );
};

export default Button;
