import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "./global/styles/theme";
import AppLoading from "expo-app-loading";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { Register } from "./screens/Register";

export default function App() {
    const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_700Bold });

    if (!fontsLoaded) {
        return <AppLoading></AppLoading>;
    }
    
    return (
        <ThemeProvider theme={theme}>
            <Register />
        </ThemeProvider>
    );
}
