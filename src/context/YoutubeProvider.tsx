import React from "react";
import Youtube from "api/youtube";
import { YoutubeApiContext } from "./YoutubeApiContext";
import YoutubeClientImpl from "api/youtubeClient";

const client = new YoutubeClientImpl();
const youtube = new Youtube(client);

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
