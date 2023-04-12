import { getToken } from "../../services/internal";

describe("test the recipes API", () => {
  describe("GET/token", () => {
    it("get token", async () => {
      const res = await getToken();
      const token = res.data.token;

      expect(res.status).toEqual(200);
      expect(res.data).toEqual(
        expect.objectContaining({
          token: token,
          success: true,
        })
      );
    });
  });
});
