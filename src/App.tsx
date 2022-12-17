import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchHeader from "components/SearchHeader";
import { YoutubeApiProvider } from "context/YoutubeApiContext";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <YoutubeApiProvider>
          <Outlet />
        </YoutubeApiProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
