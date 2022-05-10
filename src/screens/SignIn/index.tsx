import React from "react";
import { Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";
import { SignInSocialButton } from "../../components/SignInSocialButton/index";
import { useAuth } from "../../hooks/auth";
import { Container, Footer, FooterWrapper, Header, SignInTitle, Title, TitleWrapper } from "./styles";

interface SignInProps {}

export function SignIn({}: SignInProps) {
    const { signInWithGoogle } = useAuth();

    async function handleSignInWithGoogle() {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.log(error);
            Alert.alert("Não foi possível conectar a conta google.");
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
                    <SignInSocialButton title="Entrar com Apple" svg={AppleSvg} />
                </FooterWrapper>
            </Footer>
        </Container>
    );
}