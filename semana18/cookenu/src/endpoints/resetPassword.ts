import {Request, Response} from 'express';
import dotenv from 'dotenv';
import connection from '../connection';
import { createHash } from '../services/hashManager';
import { transporter } from '../services/transporter';

dotenv.config();

export default async function resetPassword( 
    req: Request,
    res: Response
): Promise<void> {

    try {
        const email = req.body.email as string;

        const [user] = await connection("cookenu_users")
        .where({email});
        if(!user) {
            res.statusCode = 400;
            throw new Error("E-mail não cadastrado");
        };

        const characters = "abcdefABCDEF12345!?/[]{}";
        let newPassword = "";
        for (let i = 0; i < 10; i++) {
            const index = Math.floor(Math.random() * (characters.length - 1));
            newPassword += characters[index];
        };

        const newHash = createHash(newPassword);
        await connection("cookenu_users").update({password: newHash}).where({email});

        const info = await transporter.sendMail({
            from: `<${process.env.NODEMAILER_USER}>`,
            to: email,
            subject: "Sua nova senha chegou",
            text: `Sua nova senha é ${newPassword}`,
            html: `<p>Sua nova senha é <strong>${newPassword}</strong></p>`
        });

        console.log({
            newPassword,
            oldHash: user.password,
            newHash: newHash,
            info
        });


    res.send();
    } catch (error) {
        res.send({error: error.message});
    }
};