import { VideoMetadata } from "types/video-type";

export const fakeVideo: VideoMetadata = {
  kind: "youtube#video",
  etag: "etag",
  id: "1",
  snippet: {
    publishedAt: "2022-12-03T21:00:00Z",
    channelId: "1",
    title: "title",
    description: "description",
    thumbnails: {
      default: {
        url: "http://image/",
        width: 120,
        height: 90,
      },
      medium: {
        url: "http://image/",
        width: 320,
        height: 180,
      },
      high: {
        url: "http://image/",
        width: 480,
        height: 360,
      },
      standard: {
        url: "http://image/",
        width: 640,
        height: 480,
      },
      maxres: {
        url: "http://image/",
        width: 1280,
        height: 720,
      },
    },
    channelTitle: "channelTitle",
    tags: ["tags"],
    categoryId: "1",
    liveBroadcastContent: "none",
    localized: {
      title: "title",
      description: "description",
    },
    defaultAudioLanguage: "en",
  },
};

export const fakeVideos: VideoMetadata[] = [
  {
    kind: "youtube#video",
    etag: "etag",
    id: "1",
    snippet: {
      publishedAt: "2022-12-03T21:00:00Z",
      channelId: "1",
      title: "title",
      description: "description",
      thumbnails: {
        default: {
          url: "http://image/",
          width: 120,
          height: 90,
        },
        medium: {
          url: "http://image/",
          width: 320,
          height: 180,
        },
        high: {
          url: "http://image/",
          width: 480,
          height: 360,
        },
        standard: {
          url: "http://image/",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "http://image/",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "channelTitle",
      tags: ["tags"],
      categoryId: "1",
      liveBroadcastContent: "none",
      localized: {
        title: "title",
        description: "description",
      },
      defaultAudioLanguage: "en",
    },
  },
  {
    kind: "youtube#video",
    etag: "etag",
    id: "2",
    snippet: {
      publishedAt: "2022-12-03T21:00:00Z",
      channelId: "2",
      title: "title2",
      description: "description2",
      thumbnails: {
        default: {
          url: "http://image2/",
          width: 120,
          height: 90,
        },
        medium: {
          url: "http://image2/",
          width: 320,
          height: 180,
        },
        high: {
          url: "http://image2/",
          width: 480,
          height: 360,
        },
        standard: {
          url: "http://image2/",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "http://image2/",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "channelTitle2",
      tags: ["tags"],
      categoryId: "1",
      liveBroadcastContent: "none",
      localized: {
        title: "title",
        description: "description",
      },
      defaultAudioLanguage: "en",
    },
  },
];
