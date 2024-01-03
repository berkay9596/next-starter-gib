"use client";
import React from "react";
import { DataGrid, DataGridProps } from "@gib-ui/core";

const ListComponent = (props: DataGridProps) => {
    return (
        <div
            style={{
                display: "grid"
            }}
        >
            <DataGrid {...props} />
        </div>
    );
};

export default ListComponent;
