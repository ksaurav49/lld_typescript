export interface UserRepository {
    save(email: string): void;
}

// class MySqlUserRepository {
//     save(email: string): void {
//       console.log(`INSERT INTO users ... ${email}`);
//     }
//   }
  
//   class UserService {
//     private repo = new MySqlUserRepository(); // hardwired detail
  
//     createUser(email: string): void {
//       this.repo.save(email);
//     }
//   }