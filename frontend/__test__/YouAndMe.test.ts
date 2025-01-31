// Jest: Bypassing module mocks
jest.mock("@my-client/find-me");
jest.mock("@my-client/find-you");

import { MeApi, FindMe } from "@my-client/find-me";
import { YouApi, FindYou } from "@my-client/find-you";
import { YouAndMe } from "../src/components/YouAndMe";

/**
 * @jest-environment jsdom
 */
describe("YouAndMe", () => {
  let mockMeResponse: FindMe;
  let mockYouResponse: FindYou;
  let youAndMeClass: YouAndMe

  beforeEach(() => {
    mockMeResponse = {
      id: 1,
      youId: 1,
      property: "upset",
    };
    mockYouResponse = {
      id: 1,
      property: "relaxed",
    };
    youAndMeClass = new YouAndMe(document.createElement('div'));
  });

  it("should get you and me data", async () => {
    const findMeMock = jest.fn().mockResolvedValue(mockMeResponse);
    const findYouMock = jest.fn().mockResolvedValue(mockYouResponse);
    (MeApi as unknown as jest.Mock).mockImplementation(() => ({
      getMeById: findMeMock,
    }));
    (YouApi as unknown as jest.Mock).mockImplementation(() => ({
      getYouById: findYouMock,
    }));

    void (youAndMeClass as unknown as any).getYouAndMe();
    await new Promise((resolve) => setImmediate(resolve));

    expect(findMeMock).toHaveBeenCalledWith({ meId: 1 });
    expect((youAndMeClass as unknown as any).data).toEqual({me: mockMeResponse, you: mockYouResponse});
  });
});
