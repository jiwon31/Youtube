import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Channel, PopularVideo, Video, VideoMetadata } from "types/video-type";

export default class Youtube {
  private youtube: AxiosInstance;

  constructor() {
    this.youtube = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(keyword: string | undefined): Promise<VideoMetadata[]> {
    return keyword ? this.searchByKeyword(keyword) : this.mostPopular();
  }

  async relatedVideos(id: string): Promise<VideoMetadata[]> {
    const res: AxiosResponse<Video> = await this.youtube.get("search", {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        type: "video",
        maxResults: 25,
      },
    });
    return res.data.items.map((item) => ({ ...item, id: item.id.videoId }));
  }

  async channelImageURL(channelId: string): Promise<string | undefined> {
    const res: AxiosResponse<Channel> = await this.youtube.get("channels", {
      params: {
        part: "snippet",
        id: channelId,
      },
    });
    return res.data.items[0]?.snippet.thumbnails.default.url;
  }

  private async mostPopular(): Promise<VideoMetadata[]> {
    const res: AxiosResponse<PopularVideo> = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return res.data.items;
  }

  private async searchByKeyword(keyword: string): Promise<VideoMetadata[]> {
    const res: AxiosResponse<Video> = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        q: keyword,
      },
    });
    return res.data.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}
