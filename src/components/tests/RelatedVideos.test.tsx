import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import RelatedVideos from "components/RelatedVideos";
import { withAllContext, withRouter } from "tests/utils";
import { Route } from "react-router-dom";
import { fakeVideos as videos } from "tests/videos";

describe("RelatedVideos", () => {
  const fakeYoutube = {
    relatedVideos: jest.fn(),
  };
  afterEach(() => fakeYoutube.relatedVideos.mockReset());

  it("renders", async () => {
    fakeYoutube.relatedVideos.mockImplementation(() => videos);
    const { asFragment } = renderRelatedVideos();

    // 로딩이 없어질 때까지 기다렸다가
    await waitForElementToBeRemoved(screen.queryByText("Loading..."));
    // await screen.findAllByRole("listitem")
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders related videos", async () => {
    fakeYoutube.relatedVideos.mockImplementation(() => videos);
    renderRelatedVideos();

    expect(fakeYoutube.relatedVideos).toHaveBeenCalledWith("1");
    await waitFor(() =>
      expect(screen.getAllByRole("listitem")).toHaveLength(videos.length)
    );
  });

  it("renders error", async () => {
    fakeYoutube.relatedVideos.mockImplementation(() => {
      throw new Error("error");
    });
    renderRelatedVideos();

    await screen.findByText("Something is wrong 😣");
  });

  it("renders loading", () => {
    fakeYoutube.relatedVideos.mockImplementation(() => videos);
    renderRelatedVideos();

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  function renderRelatedVideos() {
    return render(
      withAllContext(
        withRouter(<Route path="/" element={<RelatedVideos id="1" />} />),
        fakeYoutube
      )
    );
  }
});
