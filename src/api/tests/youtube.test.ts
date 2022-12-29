import Youtube from "api/youtube";
import { fakeSearchVideos, fakePopularVideos } from "tests/videos";
import StubYoutubeClient from "./stubYoutubeClient";

describe("youtube api", () => {
  let youtube: Youtube;
  beforeEach(() => {
    youtube = new Youtube(new StubYoutubeClient());
  });

  it("search calls searchByKeyword() when keyword exists", async () => {
    const result = await youtube.search("keyword");
    expect(result.length).toBe(fakeSearchVideos.items.length);
  });

  it("search calls mostPopular() when keyword does not exist", async () => {
    const result = await youtube.search(undefined);
    expect(result.length).toBe(fakePopularVideos.items.length);
  });

  it("item의 id값을 id.videoId 값으로 변경한 후 반환한다.", async () => {
    const items = await youtube.relatedVideos("id");
    items.forEach((item) => expect(item.id).toBe("fakeId"));
  });

  it("channelImageURL returns channel's thumbnail url", async () => {
    const result = await youtube.channelImageURL("id");
    expect(result).toMatch("https://default-thumbnail/");
  });
});
