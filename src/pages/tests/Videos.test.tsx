import { render, screen, waitFor } from "@testing-library/react";
import Videos from "pages/Videos";
import { Route } from "react-router-dom";
import { withAllContext, withRouter } from "tests/utils";
import { fakeVideo, fakeVideos } from "tests/videos";

describe("Videos", () => {
  const fakeYoutube = {
    search: jest.fn(),
  };

  beforeEach(() => {
    fakeYoutube.search.mockImplementation((keyword) => {
      return keyword ? [fakeVideo] : fakeVideos;
    });
  });

  afterEach(() => fakeYoutube.search.mockReset());

  // 밑의 두 개 테스트는 스냅샷 테스트로 대체 가능
  it("renders all videos when keyword is not specified", async () => {
    renderVideos("/");

    expect(fakeYoutube.search).toHaveBeenCalledWith(undefined);
    await waitFor(() =>
      expect(screen.getAllByRole("listitem")).toHaveLength(fakeVideos.length)
    );
  });

  it("renders search results when keyword is specified", async () => {
    const keyword = "fake-keyword";
    renderVideos(`/${keyword}`);

    expect(fakeYoutube.search).toHaveBeenCalledWith(keyword);
    await waitFor(() =>
      expect(screen.getAllByRole("listitem")).toHaveLength(1)
    );
  });

  it("renders error", async () => {
    fakeYoutube.search.mockImplementation(async () => {
      throw new Error("error");
    });
    renderVideos("/");

    await screen.findByText(/Something is wrong/i);
  });

  it("renders loading", async () => {
    renderVideos("/");

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  function renderVideos(path: string) {
    return render(
      withAllContext(
        withRouter(
          <>
            <Route path="/" element={<Videos />} />,
            <Route path="/:keyword" element={<Videos />} />
          </>,
          path
        ),
        fakeYoutube
      )
    );
  }
});
