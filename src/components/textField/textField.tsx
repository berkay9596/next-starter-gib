import React from "react";
import { TextField as GibTextField, TextFieldProps } from "@gib-ui/core";
import { useAppSelector } from "@/redux/hooks";
import { customization } from "@/redux/slices/customizationSlice";

const TextField = ({ sx, ...props }: TextFieldProps) => {
    const styles = useAppSelector(customization);
    return (
        <GibTextField
            sx={{
                "& .MuiInputBase-root": { borderRadius: styles.borderRadius },
                ".MuiFormLabel-root.Mui-focused": {
                    color: styles.primaryColor
                },
                ...sx
            }}
            {...props}
        >
            {props.children}
        </GibTextField>
    );
};

export default TextField;
