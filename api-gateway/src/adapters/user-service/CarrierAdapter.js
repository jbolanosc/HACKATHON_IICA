import got from "got";

const CARRIER_USER_SERVICE_URI = "http://user-service:7100/api/carrier";

export default class CarrierUserService {
  static async signup({
    email,
    password,
    fullname,
    phoneNumber,
    location,
    vehicle,
    vehicleCapacity,
    imagePath,
  }) {
    const body = await got
      .post(`${CARRIER_USER_SERVICE_URI}/signup`, {
        json: {
          email,
          password,
          fullname,
          phoneNumber,
          location,
          vehicle,
          vehicleCapacity,
          imagePath,
        },
      })
      .json();
    return body;
  }

  static async signin({ email, password }) {
    const body = await got
      .get(`${CARRIER_USER_SERVICE_URI}/signin`, {
        email,
        password,
      })
      .json();

    return body;
  }

  static async fetchCarrier({ carrierId }) {
    const body = await got
      .get(`${CARRIER_USER_SERVICE_URI}/profile/${carrierId}`)
      .json();

    return body;
  }
  static async getCarriers() {
    const body = await got.get(`${CARRIER_USER_SERVICE_URI}`).json();

    return body;
  }
}
