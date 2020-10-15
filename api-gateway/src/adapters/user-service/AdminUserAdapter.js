import got from "got";

const ADMIN_USER_SERVICE_URI = "http://user-service:7100/api/admin";

export default class AdminUserService {
  static async createAdminUser({ email, password, fullname }) {
    const body = await got
      .post(`${ADMIN_USER_SERVICE_URI}/signup`, {
        json: {
          email,
          password,
          fullname,
        },
      })
      .json();
    return body;
  }

  /*   static async fetchUser({ userId }) {
    const body = await got.get(`${USER_SERVICE_URI}/users/${userId}`).json();

    return body;
  } */
}
