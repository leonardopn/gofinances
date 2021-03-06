import React, { useState } from "react";
import { ActivityIndicator, Alert, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";
import { SignInSocialButton } from "../../components/SignInSocialButton/index";
import { useAuth } from "../../hooks/auth";
import { Container, Footer, FooterWrapper, Header, SignInTitle, Title, TitleWrapper } from "./styles";

interface SignInProps {}

export function SignIn({}: SignInProps) {
    const [isLoading, setIsLoading] = useState(false);
    const { signInWithGoogle, signInWithApple } = useAuth();
    const theme = useTheme();

    async function handleSignInWithGoogle() {
        try {
            setIsLoading(true);
            return await signInWithGoogle();
        } catch (error) {
            console.log(error);
            Alert.alert("Não foi possível conectar a conta google.");
            setIsLoading(false);
        }
    }

    async function handleSignInWithApple() {
        try {
            setIsLoading(true);
            return await signInWithApple();
        } catch (error) {
            console.log(error);
            Alert.alert("Não foi possível conectar a conta Apple.");
            setIsLoading(false);
        }
    }

    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSvg width={RFValue(120)} height={RFValue(68)}></LogoSvg>
                    <Title>
                        Controle suas {"\n"}finanças de forma {"\n"}muito simples
                    </Title>
                </TitleWrapper>

                <SignInTitle>Faça o seu login com{"\n"} uma das contas abaixo</SignInTitle>
            </Header>
            <Footer>
                <FooterWrapper>
                    <SignInSocialButton title="Entrar com Google" svg={GoogleSvg} onPress={handleSignInWithGoogle} />
                    {Platform.OS === "ios" && (
                        <SignInSocialButton title="Entrar com Apple" svg={AppleSvg} onPress={handleSignInWithApple} />
                    )}
                </FooterWrapper>
                {isLoading && (
                    <ActivityIndicator color={theme.colors.shape} style={{ marginTop: 18 }}></ActivityIndicator>
                )}
            </Footer>
        </Container>
    );
}
