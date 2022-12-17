import React, { createContext, useContext } from "react";
import Youtube from "api/youtube";

type YoutubeApi = {
  youtube: Youtube;
};

const youtube = new Youtube();

const YoutubeApiContext = createContext<YoutubeApi>({ youtube });

export function YoutubeApiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export const useYoutubeApi = () => useContext(YoutubeApiContext);
