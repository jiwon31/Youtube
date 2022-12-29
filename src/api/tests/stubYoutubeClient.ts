import { YoutubeClient } from "api/youtubeClient";
import { fakeChannel, fakePopularVideos, fakeSearchVideos } from "tests/videos";
import { Video, Channel, PopularVideo } from "types/video-type";

export default class StubYoutubeClient implements YoutubeClient {
  async search(): Promise<Video> {
    return fakeSearchVideos;
  }

  async channel(): Promise<Channel> {
    return fakeChannel;
  }

  async videos(): Promise<PopularVideo> {
    return fakePopularVideos;
  }
}
