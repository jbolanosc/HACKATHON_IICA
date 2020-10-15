import AdminUserService from "#root/adapters/user-service/AdminUserAdapter";

const AdminUserResolver = {
  Mutation: {
    async createAdminUser(obj, { email, password, fullname }) {
      return await AdminUserService.createAdminUser({
        email,
        password,
        fullname,
      });
    },
  },
};

export default AdminUserResolver;
