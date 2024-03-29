"use client";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextField, TextFieldProps } from "@gib-ui/core";

const InputField = (props: TextFieldProps) => {
    const { control } = useFormContext();
    return (
        <Controller
            defaultValue={props.defaultValue}
            name={props.name || props.id}
            control={control}
            render={({ field, fieldState }) => (
                <TextField
                    {...props}
                    {...field}
                    id={props.id || props.name || "textfield"}
                    error={fieldState.invalid}
                    helperText={
                        props.helperText
                            ? props?.helperText
                            : fieldState?.invalid
                              ? fieldState?.error?.message
                              : ""
                    }
                />
            )}
        />
    );
};

export default InputField;
