import { createContext, useContext } from "react";
import Youtube from "api/youtube";

type YoutubeApi = { youtube: Youtube };

export const YoutubeApiContext = createContext<YoutubeApi | null>(null);

export const useYoutubeApi = () => useContext(YoutubeApiContext) as YoutubeApi;
