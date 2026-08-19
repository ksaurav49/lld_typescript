import { MySqlUserRepository } from "./MySqlUserRepository";
import { UserService } from "./UserService";

const userService = new UserService(new MySqlUserRepository());
userService.createUser("test@test.com");
