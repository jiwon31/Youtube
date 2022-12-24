import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "context/YoutubeApiContext";
import VideoCard from "./VideoCard";

type RelatedVideosProps = { id: string };

export default function RelatedVideos({ id }: RelatedVideosProps) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related", id], async () => youtube.relatedVideos(id), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😣</p>}
      <ul>
        {videos &&
          videos.map((video) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
      </ul>
    </>
  );
}
