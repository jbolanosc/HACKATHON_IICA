import CarrierService from "#root/adapters/user-service/CarrierAdapter";

const CarrierResolver = {
  Mutation: {
    async signup(
      obj,
      {
        email,
        password,
        fullname,
        phoneNumber,
        location,
        vehicle,
        vehicleCapacity,
        imagePath,
      }
    ) {
      return await CarrierService.signup({
        email,
        password,
        fullname,
        phoneNumber,
        location,
        vehicle,
        vehicleCapacity,
        imagePath,
      });
    },
    async signin(obj, { email, password }) {
      return await CarrierService.signin({
        email,
        password,
      });
    },
  },
  Query: {
    async profileCarrier({ carrierId }) {
      return await CarrierService.fetchCarrier({ carrierId });
    },
    async carriers() {
      return await CarrierService.getCarriers();
    },
  },
};

export default CarrierResolver;
