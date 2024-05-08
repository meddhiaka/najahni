import bcrypt from "bcrypt"
import validator from "validator"

async function decryptPassword(password: string, cryptedPassword: string | null): Promise<boolean> {
    if (cryptedPassword) {
        const b: boolean = await bcrypt.compare(password, cryptedPassword);
        return b
    }
    return false;
}

async function hashPassword(str: string): Promise<string> {
    const salt: string = await bcrypt.genSalt(2)
    const hashedPassword: string = await bcrypt.hash(str, salt)
    return hashedPassword
}

export {
    decryptPassword,
    hashPassword
}