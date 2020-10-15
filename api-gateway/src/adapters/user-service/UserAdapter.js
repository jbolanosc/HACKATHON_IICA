import got from "got";

const USER_SERVICE_URI = "http://user-service:7100/api/user";

export default class UserService {
  static async signup({ fullname, email, phoneNumber, location, imagePath }) {
    const body = await got
      .post(`${USER_SERVICE_URI}/signup`, {
        json: {
          fullname,
          email,
          phoneNumber,
          location,
          imagePath,
        },
      })
      .json();
    return body;
  }

  static async signin({ email, password }) {
    const body = await got
      .get(`${USER_SERVICE_URI}/signin`, {
        email,
        password,
      })
      .json();

    return body;
  }

  static async fetchUser({ userId }) {
    const body = await got.get(`${USER_SERVICE_URI}/profile/${userId}`).json();

    return body;
  }
  static async getUsers() {
    const body = await got.get(`${USER_SERVICE_URI}`).json();

    return body;
  }
}
