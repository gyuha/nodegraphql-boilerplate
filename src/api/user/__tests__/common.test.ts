import { basicAuthSchema, nameSchema, makeToken } from "../common";

describe("Users", () => {
  it("basic auth validate", async () => {
    let data = [
      { email: "testasdf", password: "12345" },
      { email: "test@asdf", password: "12345" },
      { email: "abc@abc.com", password: "asbdas" },
      { email: "abc@abc.com", password: "aasdf123" }
    ];

    for (let d of data) {
      let result = true;
      try {
        await basicAuthSchema.validate(d);
      } catch (err) {
        result = false;
      }
      expect(result).toEqual(false);
    }

    data = [
      { email: "tes@tas.cdf", password: "121asd!@#5" },
      { email: "abc@abc.com", password: "!aasdf123" }
    ];

    for (let d of data) {
      let result = true;
      try {
        await basicAuthSchema.validate(d);
      } catch (err) {
        result = false;
      }
      expect(result).toEqual(true);
    }
  });

  it("nameValidate", async () => {
    let data = [
      { name: "test!asdf" },
      { name: "test@asdf" },
      { name: "abc@a한글bc.com" },
      { name: "abc@abc.com" }
    ];

    for (let d of data) {
      let result = true;
      try {
        await nameSchema.validate(d);
      } catch (err) {
        result = false;
      }
      expect(result).toEqual(false);
    }

    data = [{ name: "한글123" }, { name: "asdfASD" }, { name: "특수문자없음" }];

    for (let d of data) {
      let result = true;
      try {
        await nameSchema.validate(d);
      } catch (err) {
        result = false;
      }
      expect(result).toEqual(true);
    }
  });
});
