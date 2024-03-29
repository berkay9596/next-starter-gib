import { CustomizationState } from "@/redux/slices/customizationSlice";
import {
    gibThemeColors,
    blueThemeColors,
    goldenThemeColors,
    greenThemeColors,
    orangeThemeColors,
    purpleThemeColors,
    redThemeColors
} from "@/assets/colors/themeColors";

let themeColors = {
    primary: "#2C7CB3",
    primaryLight: "#598EB1",
    primaryDark: "#2D526F",
    secondary: "#2962A0",
    secondaryLight: "#7FA2B3",
    secondaryDark: "#27466D",
    header: "linear-gradient(to right, #2B7FB7, #2D4155)",
    footer: "linear-gradient(to right, #2B80B9, #2D4256)",
    sidebar: "linear-gradient(to bottom, #2A80B9, #2D3F51)"
};
export const setThemeColors = (state: CustomizationState, color: string) => {
    // "gib" | "blue" | "red" | "yellow" | "green" | "purple"

    switch (color) {
        case "gib":
            themeColors = { ...gibThemeColors };
            break;
        case "blue":
            themeColors = { ...blueThemeColors };
            break;
        case "red":
            themeColors = { ...redThemeColors };
            break;
        case "yellow":
            themeColors = { ...goldenThemeColors };
            break;
        case "green":
            themeColors = { ...greenThemeColors };
            break;
        case "purple":
            themeColors = { ...purpleThemeColors };
            break;
        case "orange":
            themeColors = { ...orangeThemeColors };
            break;
        default:
            themeColors = { ...blueThemeColors };
    }
    state.headerBgColor = themeColors.header;
    state.footerBgColor = themeColors.footer;
    state.sidebarBgColor = themeColors.sidebar;
    state.borderColor = themeColors.primary;
    state.primaryColor = themeColors.primary;
    state.primaryDarkColor = themeColors.primaryDark;
    state.primaryLightColor = themeColors.primaryLight;
    state.secondaryColor = themeColors.secondary;
    state.secondaryLightColor = themeColors.secondaryLight;
    state.secondaryDarkColor = themeColors.secondaryDark;
};
export const setHeaderColor = (state: CustomizationState, color: string) => {
    switch (color) {
        case "gib":
            state.headerBgColor = gibThemeColors.header;
            break;
        case "blue":
            state.headerBgColor = blueThemeColors.header;
            break;
        case "red":
            state.headerBgColor = redThemeColors.header;
            break;
        case "yellow":
            state.headerBgColor = goldenThemeColors.header;
            break;
        case "green":
            state.headerBgColor = greenThemeColors.header;
            break;
        case "purple":
            state.headerBgColor = purpleThemeColors.header;
            break;
        case "orange":
            state.headerBgColor = orangeThemeColors.header;
            break;
        default:
            state.headerBgColor = blueThemeColors.header;
    }
};

export const setFooterColor = (state: CustomizationState, color: string) => {
    switch (color) {
        case "gib":
            state.footerBgColor = gibThemeColors.footer;
            break;
        case "blue":
            state.footerBgColor = blueThemeColors.footer;
            break;
        case "red":
            state.footerBgColor = redThemeColors.footer;
            break;
        case "yellow":
            state.footerBgColor = goldenThemeColors.footer;
            break;
        case "green":
            state.footerBgColor = greenThemeColors.footer;
            break;
        case "purple":
            state.footerBgColor = purpleThemeColors.footer;
            break;
        case "orange":
            state.footerBgColor = orangeThemeColors.footer;
            break;
        default:
            state.footerBgColor = blueThemeColors.footer;
    }
};

export const setSidebarColor = (state: CustomizationState, color: string) => {
    switch (color) {
        case "gib":
            state.sidebarBgColor = gibThemeColors.sidebar;
            break;
        case "blue":
            state.sidebarBgColor = blueThemeColors.sidebar;
            break;
        case "red":
            state.sidebarBgColor = redThemeColors.sidebar;
            break;
        case "yellow":
            state.sidebarBgColor = goldenThemeColors.sidebar;
            break;
        case "green":
            state.sidebarBgColor = greenThemeColors.sidebar;
            break;
        case "purple":
            state.sidebarBgColor = purpleThemeColors.sidebar;
            break;
        case "orange":
            state.sidebarBgColor = orangeThemeColors.sidebar;
            break;
        default:
            state.sidebarBgColor = blueThemeColors.sidebar;
    }
};
