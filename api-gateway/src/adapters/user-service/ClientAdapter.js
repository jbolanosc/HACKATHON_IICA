import got from "got";

const CLIENT_USER_SERVICE_URI = "http://user-service:7100/api/client";

export default class ClientService {
  static async signup({ fullname, email, password, address }) {
    const body = await got
      .post(`${CLIENT_USER_SERVICE_URI}/signup`, {
        json: {
          fullname,
          email,
          password,
          address,
        },
      })
      .json();
    return body;
  }

  static async signin({ email, password }) {
    const body = await got
      .post(`${CLIENT_USER_SERVICE_URI}/signin`, {
        email,
        password,
      })
      .json();

    return body;
  }

  static async fetchClient({ clientId }) {
    const body = await got
      .get(`${CLIENT_USER_SERVICE_URI}/profile/${clientId}`)
      .json();

    return body;
  }
}
