import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "context/YoutubeApiContext";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const { youtube } = useYoutubeApi();
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], async () => youtube.search(keyword), {
    staleTime: 1000 * 60 * 1,
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😣</p>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4 py-4">
        {videos &&
          videos.map((video) => (
            <VideoCard key={video.id} video={video} type="" />
          ))}
      </ul>
    </>
  );
}
