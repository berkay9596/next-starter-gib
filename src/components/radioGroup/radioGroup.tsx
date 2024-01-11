import React from "react";
import { RadioGroup as GibRadioGroup, RadioGroupProps } from "@gib-ui/core";
import { useAppSelector } from "@/redux/hooks";
import { customization } from "@/redux/slices/customizationSlice";

const RadioGroup = ({ sx, ...props }: RadioGroupProps) => {
    const styles = useAppSelector(customization);
    return (
        <GibRadioGroup
            sx={{
                "& .Mui-checked": {
                    color: styles.primaryColor
                },
                ...sx
            }}
            labelFocusedColor={styles.primaryColor}
            {...props}
        />
    );
};

export default RadioGroup;
