import { UserRepository } from "./UserRepository";
export class MySqlUserRepository implements UserRepository {
    save(email: string): void {
        console.log(`INSERT INTO users ... ${email}`);
    }
}