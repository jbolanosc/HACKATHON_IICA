import ClientService from "#root/adapters/user-service/ClientAdapter";

const ClientResolver = {
  Mutation: {
    async createClient(obj, { fullname, email, password, address }) {
      return await ClientService.signup({
        fullname,
        email,
        password,
        address,
      });
    },
    async signinClient(obj, { email, password }) {
      return await ClientService.signin({
        email,
        password,
      });
    },
  },
  Query: {
    async profileClient({ clientId }) {
      return await ClientService.fetchClient({ clientId });
    },
  },
};

export default ClientResolver;
