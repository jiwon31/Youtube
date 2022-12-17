import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "context/YoutubeApiContext";

type ChannelInfoProps = {
  id: string;
  name: string;
};

export default function ChannelInfo({ id, name }: ChannelInfoProps) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ["channel", id],
    async () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <div className="flex items-center my-4 mb-8">
      {url && (
        <img className="w-10 h-10 rounded-full mr-2" src={url} alt={name} />
      )}
      <p className="text-lg font-medium">{name}</p>
    </div>
  );
}
