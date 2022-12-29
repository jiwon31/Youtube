import axios, { AxiosInstance } from "axios";
import { Channel, PopularVideo, Video } from "types/video-type";

export interface YoutubeClient {
  search(params: SearchParams): Promise<Video>;
  channel(params: ChannelParams): Promise<Channel>;
  videos(params: VideosParams): Promise<PopularVideo>;
}

export default class YoutubeClientImpl implements YoutubeClient {
  private httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(params: SearchParams): Promise<Video> {
    return (await this.httpClient.get("search", params)).data;
  }

  async channel(params: ChannelParams): Promise<Channel> {
    return (await this.httpClient.get("channels", params)).data;
  }

  async videos(params: VideosParams): Promise<PopularVideo> {
    return (await this.httpClient.get("videos", params)).data;
  }
}

type SearchParams = {
  params: {
    part: string;
    maxResults: number;
    type?: string;
    relatedToVideoId?: string;
    q?: string;
  };
};
type ChannelParams = {
  params: {
    part: string;
    id: string;
  };
};
type VideosParams = {
  params: {
    part: string;
    chart: string;
    maxResults: number;
  };
};
