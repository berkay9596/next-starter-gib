"use client";
import RadioGroup from "@/components/radioGroup";
import TextField from "@/components/textField";
import { getTranslate } from "@/lib";
import { useAppDispatch } from "@/redux/hooks";
import {
    CustomizationState,
    setBorderRadius,
    setFooterBgColor,
    setHasSidebar,
    setHeaderBgColor,
    setSidebarBgColor,
    setThemeColor
} from "@/redux/slices/customizationSlice";
import { Locale } from "@/root/i18n.config";
import { Box, Drawer, Typography } from "@gib-ui/core";
import { Icons } from "@gib-ui/icons";
import React, { useState } from "react";

export type ThemeColorOptions = "gib" | "blue" | "red" | "yellow" | "green" | "orange" | "purple";

export type ColorButtons = {
    id: any;
    value: ThemeColorOptions;
    label: any;
}[];

const CustomizationDrawer = ({
    isOpen,
    setIsOpen,
    customizationStyles,
    lang
}: {
    isOpen: boolean;
    setIsOpen: (e: boolean) => void;
    customizationStyles: CustomizationState;
    lang: Locale;
}) => {
    const dispatch = useAppDispatch();
    const [selectedHeaderBgColor, setSelectedHeaderBgColor] = useState<string>("blue");
    const [selectedFooterBgColor, setSelectedFooterBgColor] = useState<string>("blue");
    const [selectedSidebarBgColor, setSelectedSidebarBgColor] = useState<string>("blue");
    const [selectedThemeColor, setSelectedThemeColor] = useState<string>("blue");
    const [sidebarState, setSidebarState] = useState<string>("on");
    const { header } = getTranslate(lang);

    const colors = Object.keys(header.customization.colors) as ThemeColorOptions[];
    const colorButtons: ColorButtons = colors.map((color: ThemeColorOptions) => {
        return {
            id: color,
            value: color,
            label: header.customization.colors[color]
        };
    });

    return (
        <Drawer
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            width="400px"
            showDvdHeader={false}
            hideBackdrop
            disableScrollLock
            drawerContent={
                <Box>
                    <Box
                        sx={{
                            background: customizationStyles.headerBgColor,
                            color: "#FFF",
                            paddingX: "24px",
                            height: "70px",
                            display: "flex",
                            alignItems: "center",
                            position: "sticky",
                            top: "0",
                            zIndex: 10
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "100%"
                            }}
                        >
                            <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                                {header.customization.title}
                            </Typography>
                            <Icons.Close
                                onClick={() => setIsOpen(false)}
                                sx={{ cursor: "pointer" }}
                                fontSize="large"
                            ></Icons.Close>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            padding: "24px",
                            gap: "12px",
                            display: "grid"
                        }}
                    >
                        <TextField
                            labeltext="Border Radius"
                            id="borderRadiusInput"
                            type="number"
                            inputProps={{
                                min: 0,
                                max: 50
                            }}
                            defaultValue={"10"}
                            onChange={(e) => dispatch(setBorderRadius(`${e.target.value}px`))}
                            sx={{ width: "50%" }}
                        ></TextField>
                        <RadioGroup
                            labeltext="Sidebar"
                            id="sidebarOnOff"
                            onChange={(_, option) => {
                                if (option === "on") {
                                    dispatch(setHasSidebar(true));
                                    setSidebarState("on");
                                } else {
                                    dispatch(setHasSidebar(false));
                                    setSidebarState("off");
                                }
                            }}
                            buttons={[
                                {
                                    id: "sidebarOn",
                                    value: "on",
                                    label: header.customization.sidebar.on
                                },
                                {
                                    id: "sidebarOff",
                                    value: "off",
                                    label: header.customization.sidebar.off
                                }
                            ]}
                            optionsGap="0px"
                            value={sidebarState}
                        />
                        <RadioGroup
                            labeltext="Header Background Color"
                            id="headerColor"
                            onChange={(_, selectedColor) => {
                                dispatch(setHeaderBgColor(selectedColor));
                                setSelectedHeaderBgColor(selectedColor);
                            }}
                            buttons={colorButtons}
                            optionsGap="0px"
                            value={selectedHeaderBgColor}
                            isGridLayout
                        />
                        <RadioGroup
                            labeltext="Footer Background Color"
                            id="footerColor"
                            onChange={(_, selectedColor) => {
                                dispatch(setFooterBgColor(selectedColor));
                                setSelectedFooterBgColor(selectedColor);
                            }}
                            value={selectedFooterBgColor}
                            optionsGap="0px"
                            buttons={colorButtons}
                            isGridLayout
                        />
                        <RadioGroup
                            labeltext="Sidebar Background Color"
                            id="sidenavColor"
                            onChange={(_, selectedColor) => {
                                dispatch(setSidebarBgColor(selectedColor));
                                setSelectedSidebarBgColor(selectedColor);
                            }}
                            value={selectedSidebarBgColor}
                            optionsGap="0px"
                            buttons={colorButtons}
                            isGridLayout
                        />
                        <RadioGroup
                            labeltext="Theme Color"
                            id="themeColor"
                            onChange={(_, selectedColor) => {
                                dispatch(setThemeColor(selectedColor));
                                setSelectedFooterBgColor(selectedColor);
                                setSelectedHeaderBgColor(selectedColor);
                                setSelectedSidebarBgColor(selectedColor);
                                setSelectedThemeColor(selectedColor);
                            }}
                            defaultValue={selectedThemeColor}
                            optionsGap="0px"
                            isGridLayout
                            buttons={colorButtons}
                        />
                    </Box>
                </Box>
            }
        />
    );
};

export default CustomizationDrawer;
