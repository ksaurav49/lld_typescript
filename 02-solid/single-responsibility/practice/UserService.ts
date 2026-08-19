// Refactor UserService for SRP (see ../EXERCISE.md)
class UserService {
    private validator: UserValidator;
    private repository: UserRepository;
    private sender: WelcomeEmailSender;

    constructor(validator: UserValidator, repository: UserRepository, sender: WelcomeEmailSender) {
        this.validator = validator;
        this.repository = repository;
        this.sender = sender;
    }

    createUser(email: string, password: string) {
        const is_valid = this.validator.validateUser(email, password);
        if (!is_valid) {
            throw new Error("Invalid input");
        }

        this.repository.saveUser(email);
        this.sender.sendWelcomeEmail(email);
    }
}

const validator = new UserValidator();
const repository = new UserRepository();
const sender = new WelcomeEmailSender();
const userService = new UserService(validator, repository, sender);
userService.createUser("test@test.com", "123456");
