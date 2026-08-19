import { UserRepository } from "./UserRepository";
export class UserService {

    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    createUser(email: string): void {
        this.userRepository.save(email);
    }
}