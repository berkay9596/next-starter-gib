"use client";
import React, { useEffect } from "react";
import { DataGrid, DataGridProps } from "@gib-ui/core";
import { useAppSelector } from "@/redux/hooks";
import { customization } from "@/redux/slices/customizationSlice";

const ListComponent = ({ sx, ...props }: DataGridProps) => {
    const styles = useAppSelector(customization);
    const gridElements = document.querySelectorAll(".MuiDataGrid-root");
    const gridColumnElements = document.querySelectorAll(".MuiDataGrid-columnHeaders");

    useEffect(() => {
        const delay = setTimeout(() => {
            gridElements.forEach((element: any) => {
                element.style.borderRadius = styles.borderRadius;
            });
            gridColumnElements.forEach((element: any) => {
                element.style.borderTopLeftRadius = styles.borderRadius;
                element.style.borderTopRightRadius = styles.borderRadius;
            });
        }, 1); // Adjust the delay time as needed

        return () => clearTimeout(delay);
    }, [styles.borderRadius]);

    return (
        <div
            style={{
                display: "grid"
            }}
        >
            <DataGrid
                sx={{
                    ...sx
                }}
                columnBgColor={styles.primaryColor}
                {...props}
            />
        </div>
    );
};

export default ListComponent;
