import React from "react";
import { Autocomplete as GibAutocomplete, AutocompleteProps } from "@gib-ui/core";
import { useAppSelector } from "@/redux/hooks";
import { customization } from "@/redux/slices/customizationSlice";

const Autocomplete = ({ sx, ...props }: AutocompleteProps) => {
    const styles = useAppSelector(customization);
    return (
        <GibAutocomplete
            sx={{
                ".MuiInputBase-root": {
                    borderRadius: styles.borderRadius
                },
                // ".MuiFormLabel-root.Mui-focused": {
                //     color: styles.primaryColor
                // },
                ...sx
            }}
            labelFocusedColor={styles.primaryColor}
            {...props}
        />
    );
};

export default Autocomplete;
