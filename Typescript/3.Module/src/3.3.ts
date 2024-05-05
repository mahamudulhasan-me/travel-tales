{
  interface NormalUser {
    name: string;
  }
  interface AdminUser {
    name: string;
    role: string;
  }

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`Hey Voy Pao Ami ${user.role}`);
    } else {
      console.log("Ami normal user");
    }
  };

  const normalUser: NormalUser = {
    name: "Normal User",
  };

  const adminUser: AdminUser = {
    name: "This is admin user",
    role: "Admin",
  };

  getUser(adminUser);
}
