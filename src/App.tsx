import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchHeader from "components/SearchHeader";
import { YoutubeApiProvider } from "context/YoutubeProvider";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </div>
  );
}

export default App;
