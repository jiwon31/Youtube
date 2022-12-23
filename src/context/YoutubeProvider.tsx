import React from "react";
import Youtube from "api/youtube";
import { YoutubeApiContext } from "./YoutubeApiContext";

const youtube = new Youtube();

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
