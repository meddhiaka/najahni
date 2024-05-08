import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.NEXTAUTH_URL
    ? `${process.env.NEXTAUTH_URL}`
    : "";

function getUsername(email: string) {
    const t = email.split("@")
    return t[0]
}

export default function WelcomeTemplate({ email }: {
    email: string
}) {
    const username = getUsername(email)
    return (
        <Html>
            <Head />
            <Preview>
                The sales intelligence platform that helps you uncover qualified leads.
            </Preview>
            <Body style={main}>
                <Container style={container}>
                    <Text style={paragraph}>Salut, {username}</Text>
                    <Text style={paragraph}>
                        Bienvenue sur Najahni, là où l'apprentissage rencontre l'innovation !<br />
                        Que vous soyez un étudiant avide d'explorer de nouveaux horizons ou un enseignant prêt à inspirer!<br />
                        <b>Najahni</b> est votre porte d'entrée vers d'innombrables possibilités.
                    </Text>
                    <Section style={btnContainer}>
                        <Button style={button} href={`${baseUrl}/home`}>
                            Cliquez ici pour voir les nouveaux cours
                        </Button>
                    </Section>
                    <Text style={paragraph}>
                        Sincèrement,
                        <br />
                        Najahni Group
                    </Text>
                    <Hr style={hr} />
                    <Text style={footer}>
                        Faculté des Sciences de Bizerte, Zarzouna, Bizerte, <b>La Tunisie</b>
                    </Text>
                </Container>
            </Body>
        </Html>
    )
}

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
};

const logo = {
    margin: "0 auto",
};

const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
};

const btnContainer = {
    textAlign: "center" as const,
};

const button = {
    backgroundColor: "#BF40BF",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px",
};

const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
};



export {
    getUsername
}