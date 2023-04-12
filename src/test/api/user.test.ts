import mongoose from "mongoose";
import { mongoConnect } from "../../database/mongodb";
import { addUser, getToken, getUsers } from "../../services/internal";
import User from "../../models/user";
import moment from "moment-timezone";
import { MESSAGES } from "../../controllers/user/config/messages";

describe("test the recipes API", () => {
  beforeAll(async () => {
    await mongoConnect();
    const user = {
      firstname: "Randi",
      lastname: "Faturrakhman",
      email: "randifaturrakhman09@gmail.com",
      birthdayDate: "09-10-2000",
      location: "id",
      timezone: "ETC/GMT+5",
    };
    await User.create(user);
  });
  afterAll(async () => {
    await User.deleteMany();
    mongoose.disconnect();
  });
  //test get users
  describe("GET/users", () => {
    it("should retrieve all of the users", async () => {
      const res = await getUsers();

      expect(res.status).toEqual(200);
      expect(res.data).toEqual(
        expect.objectContaining({
          success: true,
          data: expect.any(Object),
        })
      );
    });
  });

  describe("POST/users", () => {
    it("should save user to db", async () => {
      const user = {
        firstname: "Randi",
        lastname: "Faturrakhman",
        email: "randifaturrakhman09+new@gmail.com",
        birthdayDate: new Date("09-10-2000"),
        location: "id",
        timezone: "ETC/GMT+5",
      };

      const resToken = await getToken();

      expect(resToken.status).toEqual(200);
      expect(resToken.data).toEqual(
        expect.objectContaining({
          token: resToken.data.token,
          success: true,
        })
      );

      const res = await addUser(user, resToken.data.token);

      expect(res.status).toEqual(200);
      expect(res.data).toEqual(
        expect.objectContaining({
          success: true,
          message: MESSAGES.CREATE_USER.SUCCESS,
        })
      );
    });
  });
});
