import { Resend } from "resend"
import { prisma } from "./prisma";
import WelcomeTemplate from "@/components/WelcomeTemplate";
import { getUsername } from "@/components/WelcomeTemplate";

const mailer = new Resend(process.env.RESEND_API);

async function sendHello(email: string): Promise<void> {
    await prisma.user.update({
        where: {
            email: email
        },
        data: {
            newAccount: false
        }
    })
    console.log("email util " + email)
    mailer.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: `Bienvenue à Najahni, ${getUsername(email)}`,
        react: WelcomeTemplate({email}) 
    });
    console.log("sending welcome to new user is done")
}

export {
    mailer,
    sendHello
}