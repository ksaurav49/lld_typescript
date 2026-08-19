class UserValidator {
    validateUser(email: string, password: string): boolean {
        if (!email.includes("@") || password.length < 6) {
            return false;
        }
        return true;
    }
}