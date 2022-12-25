import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiContext } from "context/YoutubeApiContext";
import { MemoryRouter, Routes } from "react-router-dom";
import { VideoMetadata } from "types/video-type";

type Location = {
  pathname: string;
  state: { video: VideoMetadata };
  key: string;
};

export function withRouter(
  routes: React.ReactElement,
  initialEntry: Location | string = "/"
) {
  return (
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );
}

export function withAllContext(children: React.ReactNode, youtube: any) {
  const testClient = createTestQueryClient();
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      <QueryClientProvider client={testClient}>{children}</QueryClientProvider>
    </YoutubeApiContext.Provider>
  );
}

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });
}
