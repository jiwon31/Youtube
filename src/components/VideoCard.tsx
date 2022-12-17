import { useNavigate } from "react-router-dom";
import { VideoMetadata } from "types/video-type";
import { formatDate } from "util/formatDate";

type VideoCardProps = {
  video: VideoMetadata;
  type: string;
};

export default function VideoCard({ video, type }: VideoCardProps) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === "list";

  return (
    <li
      className={`${
        isList ? "flex gap-2 m-2 ml-3" : ""
      } hover:scale-105 ease-in duration-200 cursor-pointer`}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        className={isList ? "w-40" : "w-full"}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className="text-sm font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-xs opacity-80">{channelTitle}</p>
        <p className="text-xs opacity-80">{formatDate(publishedAt)}</p>
      </div>
    </li>
  );
}
