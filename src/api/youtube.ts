import { VideoMetadata } from "types/video-type";
import { YoutubeClient } from "./youtubeClient";

export default class Youtube {
  constructor(private apiClient: YoutubeClient) {}

  async search(keyword: string | undefined): Promise<VideoMetadata[]> {
    return keyword ? this.searchByKeyword(keyword) : this.mostPopular();
  }

  async relatedVideos(id: string): Promise<VideoMetadata[]> {
    const res = await this.apiClient.search({
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        relatedToVideoId: id,
      },
    });
    return res.items.map((item) => ({ ...item, id: item.id.videoId }));
  }

  async channelImageURL(channelId: string): Promise<string | undefined> {
    const res = await this.apiClient.channel({
      params: {
        part: "snippet",
        id: channelId,
      },
    });
    return res.items[0]?.snippet.thumbnails.default.url;
  }

  private async mostPopular(): Promise<VideoMetadata[]> {
    const res = await this.apiClient.videos({
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return res.items;
  }

  private async searchByKeyword(keyword: string): Promise<VideoMetadata[]> {
    const res = await this.apiClient.search({
      params: {
        part: "snippet",
        maxResults: 25,
        q: keyword,
      },
    });
    return res.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}
