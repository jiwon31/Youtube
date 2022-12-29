import { VideoMetadata, Channel, PopularVideo, Video } from "types/video-type";

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

export const fakeChannel: Channel = {
  kind: "youtube#channelListResponse",
  etag: "DovVRc4nTNzGShQkXoC7R2ab3JQ",
  pageInfo: {
    totalResults: 1,
    resultsPerPage: 5,
  },
  items: [
    {
      kind: "youtube#channel",
      etag: "Cxi25U626ZmPs7h8MsS4D8GzfV8",
      id: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
      snippet: {
        title: "Google Developers",
        description:
          "The Google Developers channel features talks from events, educational series, best practices, tips, and the latest updates across our products and platforms.\n\nSubscribe to Google Developers → https://goo.gle/developers\n",
        customUrl: "@googledevelopers",
        publishedAt: "2007-08-23T00:34:43Z",
        thumbnails: {
          default: {
            url: "https://default-thumbnail/",
            width: 88,
            height: 88,
          },
          medium: {
            url: "https://yt3.ggpht.com/ytc/AMLnZu-oDvWEJ-WfN9bgxQB2YAlnjC2uqN_c7JQZvX9Ikfg=s240-c-k-c0x00ffffff-no-rj",
            width: 240,
            height: 240,
          },
          high: {
            url: "https://yt3.ggpht.com/ytc/AMLnZu-oDvWEJ-WfN9bgxQB2YAlnjC2uqN_c7JQZvX9Ikfg=s800-c-k-c0x00ffffff-no-rj",
            width: 800,
            height: 800,
          },
        },
        localized: {
          title: "Google Developers",
          description:
            "The Google Developers channel features talks from events, educational series, best practices, tips, and the latest updates across our products and platforms.\n\nSubscribe to Google Developers → https://goo.gle/developers\n",
        },
        country: "US",
      },
    },
  ],
};

export const fakePopularVideos: PopularVideo = {
  kind: "youtube#videoListResponse",
  etag: "chTp67txVNGRHuH32P2vq11hwAY",
  items: [
    {
      kind: "youtube#video",
      etag: "JgVNjbxSqaWY73f_hJr9SZ1eWUA",
      id: "0CTp1a-aCUM",
      snippet: {
        publishedAt: "2022-12-03T21:00:00Z",
        channelId: "UCX6OQ3DkcsbYNE6H8uQQuVA",
        title: "100 Kids Vs 100 Adults For $500,000",
        description:
          "The new Nerf Pro Gelfire x MrBeast blaster is available for preorder HERE: https://bit.ly/MrBeastxNerf\n\nBurst into battle with the Nerf Pro Gelfire Mythic blaster - Available NOW: https://go.hasb.ro/mrbeastnerf\n \nLegal disclaimer:\n\nAges 14 and up. Use of eyewear is always required for players and people within range. Use only official NERF GelFire Rounds.\n\nNew Merch - https://shopmrbeast.com/\n\nSUBSCRIBE OR I TAKE YOUR DOG\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\n\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast6000/\n• Twitter - https://twitter.com/MrBeast\n•  Instagram - https://www.instagram.com/mrbeast\n•  Im Hiring! - https://www.mrbeastjobs.com/\n--------------------------------------------------------------------",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/0CTp1a-aCUM/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/0CTp1a-aCUM/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/0CTp1a-aCUM/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/0CTp1a-aCUM/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/0CTp1a-aCUM/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "MrBeast",
        tags: ["1"],
        categoryId: "24",
        liveBroadcastContent: "none",
        localized: {
          title: "100 Kids Vs 100 Adults For $500,000",
          description:
            "The new Nerf Pro Gelfire x MrBeast blaster is available for preorder HERE: https://bit.ly/MrBeastxNerf\n\nBurst into battle with the Nerf Pro Gelfire Mythic blaster - Available NOW: https://go.hasb.ro/mrbeastnerf\n \nLegal disclaimer:\n\nAges 14 and up. Use of eyewear is always required for players and people within range. Use only official NERF GelFire Rounds.\n\nNew Merch - https://shopmrbeast.com/\n\nSUBSCRIBE OR I TAKE YOUR DOG\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\n\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast6000/\n• Twitter - https://twitter.com/MrBeast\n•  Instagram - https://www.instagram.com/mrbeast\n•  Im Hiring! - https://www.mrbeastjobs.com/\n--------------------------------------------------------------------",
        },
        defaultAudioLanguage: "en",
      },
    },
  ],
};

export const fakeSearchVideos: Video = {
  kind: "youtube#searchListResponse",
  etag: "xM_YUCM3QfKMEtShhE_QT8R8UpE",
  nextPageToken: "CBkQAA",
  regionCode: "KR",
  pageInfo: {
    totalResults: 1000000,
    resultsPerPage: 25,
  },
  items: [
    {
      kind: "youtube#searchResult",
      etag: "CHVY06zoJiMKKgflQF0fZJVJwGw",
      id: {
        kind: "youtube#video",
        videoId: "fakeId",
      },
      snippet: {
        publishedAt: "2020-08-21T03:58:10Z",
        channelId: "UC3IZKseVpdzPSBaWxBxundA",
        title: "BTS (방탄소년단) &#39;Dynamite&#39; Official MV",
        description:
          "BTS (방탄소년단) 'Dynamite' Official MV Credits: Director: Yong Seok Choi (Lumpens) Assistant Director: Jihye Yoon (Lumpens) ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/gdZLi9oWNZg/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/gdZLi9oWNZg/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/gdZLi9oWNZg/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/0CTp1a-aCUM/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/0CTp1a-aCUM/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "HYBE LABELS",
        tags: ["1"],
        categoryId: "24",
        liveBroadcastContent: "none",
        localized: {
          title: "100 Kids Vs 100 Adults For $500,000",
          description:
            "The new Nerf Pro Gelfire x MrBeast blaster is available for preorder HERE: https://bit.ly/MrBeastxNerf\n\nBurst into battle with the Nerf Pro Gelfire Mythic blaster - Available NOW: https://go.hasb.ro/mrbeastnerf\n \nLegal disclaimer:\n\nAges 14 and up. Use of eyewear is always required for players and people within range. Use only official NERF GelFire Rounds.\n\nNew Merch - https://shopmrbeast.com/\n\nSUBSCRIBE OR I TAKE YOUR DOG\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\n\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast6000/\n• Twitter - https://twitter.com/MrBeast\n•  Instagram - https://www.instagram.com/mrbeast\n•  Im Hiring! - https://www.mrbeastjobs.com/\n--------------------------------------------------------------------",
        },
        defaultAudioLanguage: "en",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "CHVY06zoJiMKKgflQF0fZJVJwGw",
      id: {
        kind: "youtube#video",
        videoId: "fakeId",
      },
      snippet: {
        publishedAt: "2020-08-21T03:58:10Z",
        channelId: "UC3IZKseVpdzPSBaWxBxundA",
        title: "BTS (방탄소년단) &#39;Dynamite&#39; Official MV",
        description:
          "BTS (방탄소년단) 'Dynamite' Official MV Credits: Director: Yong Seok Choi (Lumpens) Assistant Director: Jihye Yoon (Lumpens) ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/gdZLi9oWNZg/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/gdZLi9oWNZg/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/gdZLi9oWNZg/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/0CTp1a-aCUM/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/0CTp1a-aCUM/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "HYBE LABELS",
        tags: ["1"],
        categoryId: "24",
        liveBroadcastContent: "none",
        localized: {
          title: "100 Kids Vs 100 Adults For $500,000",
          description:
            "The new Nerf Pro Gelfire x MrBeast blaster is available for preorder HERE: https://bit.ly/MrBeastxNerf\n\nBurst into battle with the Nerf Pro Gelfire Mythic blaster - Available NOW: https://go.hasb.ro/mrbeastnerf\n \nLegal disclaimer:\n\nAges 14 and up. Use of eyewear is always required for players and people within range. Use only official NERF GelFire Rounds.\n\nNew Merch - https://shopmrbeast.com/\n\nSUBSCRIBE OR I TAKE YOUR DOG\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\n\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast6000/\n• Twitter - https://twitter.com/MrBeast\n•  Instagram - https://www.instagram.com/mrbeast\n•  Im Hiring! - https://www.mrbeastjobs.com/\n--------------------------------------------------------------------",
        },
        defaultAudioLanguage: "en",
      },
    },
  ],
};
