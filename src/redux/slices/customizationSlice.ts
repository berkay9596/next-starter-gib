import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
    setFooterColor,
    setHeaderColor,
    setSidebarColor,
    setThemeColors
} from "@/utils/setThemeColors";

const config = {
    // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
    // like '/berry-material-react/react/default'
    basename: "/free",
    defaultPath: "/dashboard/default",
    hasSidebar: true,
    fontFamily: `'Roboto', sans-serif`,
    borderRadius: "10px",
    primaryColor: "#2C7CB3",
    borderColor: "#2C7CB3",
    primaryLightColor: "#598EB1",
    primaryDarkColor: "#2D526F",
    secondaryColor: "#2962A0",
    secondaryLightColor: "#7FA2B3",
    secondaryDarkColor: "#27466D",
    headerBgColor: "linear-gradient(to right, #2B7FB7, #2D4155)",
    footerBgColor: "linear-gradient(to right, #2B80B9, #2D4256)",
    sidebarBgColor: "linear-gradient(to bottom, #2A80B9, #2D3F51)"
};

export interface CustomizationState {
    // showSidebar?: boolean;
    defaultId: string;
    fontFamily: string;
    hasSidebar: boolean;
    borderRadius: string;
    headerBgColor: string;
    footerBgColor: string;
    sidebarBgColor: string;
    borderColor: string;
    primaryColor: string;
    primaryLightColor: string;
    primaryDarkColor: string;
    secondaryColor: string;
    secondaryLightColor: string;
    secondaryDarkColor: string;
}

export const initialState: CustomizationState = {
    defaultId: "default",
    fontFamily: config.fontFamily,
    hasSidebar: config.hasSidebar,
    borderRadius: config.borderRadius,
    headerBgColor: config.headerBgColor,
    footerBgColor: config.footerBgColor,
    sidebarBgColor: config.sidebarBgColor,
    borderColor: config.borderColor,
    primaryColor: config.primaryColor,
    primaryLightColor: config.primaryLightColor,
    primaryDarkColor: config.primaryDarkColor,
    secondaryColor: config.secondaryColor,
    secondaryLightColor: config.secondaryLightColor,
    secondaryDarkColor: config.secondaryDarkColor
};

export const customizationSlice = createSlice({
    name: "customization",
    initialState,
    reducers: {
        setBorderRadius: (state, action: PayloadAction<string>) => {
            state.borderRadius = action.payload;
        },
        setHasSidebar: (state, action: PayloadAction<boolean>) => {
            state.hasSidebar = action.payload;
        },
        setFontFamily: (state, action: PayloadAction<string>) => {
            state.fontFamily = action.payload;
        },
        setHeaderBgColor: (state, action: PayloadAction<string>) => {
            setHeaderColor(state, action.payload);
        },
        setFooterBgColor: (state, action: PayloadAction<string>) => {
            setFooterColor(state, action.payload);
        },
        setSidebarBgColor: (state, action: PayloadAction<string>) => {
            setSidebarColor(state, action.payload);
        },
        setBorderColor: (state, action: PayloadAction<string>) => {
            state.sidebarBgColor = action.payload;
        },
        setThemeColor: (state, action: PayloadAction<string>) => {
            setThemeColors(state, action.payload);
        }
    }
});

export const {
    setFontFamily,
    setBorderRadius,
    setHasSidebar,
    setHeaderBgColor,
    setFooterBgColor,
    setSidebarBgColor,
    setBorderColor,
    setThemeColor
} = customizationSlice.actions;

export const customization = (state: RootState) => state.customization;

export default customizationSlice.reducer;
