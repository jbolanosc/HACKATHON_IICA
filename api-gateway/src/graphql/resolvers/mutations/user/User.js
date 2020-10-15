import UserService from "#root/adapters/user-service/UserAdapter";

const UserResolver = {
  Mutation: {
    async createUser(
      obj,
      { fullname, email, phoneNumber, location, imagePath }
    ) {
      return await UserService.signup({
        fullname,
        email,
        phoneNumber,
        location,
        imagePath,
      });
    },
    async signinUser(obj, { email, password }) {
      return await UserService.signin({
        email,
        password,
      });
    },
  },
  Query: {
    async profileUser({ userId }) {
      return await UserService.fetchUser({ userId });
    },
    async users() {
      return await UserService.getUsers();
    },
  },
};

export default UserResolver;
