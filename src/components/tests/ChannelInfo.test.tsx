import { render, screen, waitFor } from "@testing-library/react";
import ChannelInfo from "components/ChannelInfo";
import { Route } from "react-router-dom";
import { withAllContext, withRouter } from "tests/utils";

describe("ChannelInfo", () => {
  const fakeYoutube = {
    channelImageURL: jest.fn(),
  };
  afterEach(() => fakeYoutube.channelImageURL.mockReset());

  it("renders", async () => {
    fakeYoutube.channelImageURL.mockImplementation(() => "url");
    const { asFragment } = renderChannelInfo();

    await waitFor(() => screen.getByRole("img"));
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders without channel thumbnail", async () => {
    fakeYoutube.channelImageURL.mockImplementation(() => {
      throw new Error("error");
    });
    renderChannelInfo();

    expect(screen.queryByRole("img")).toBeNull();
  });

  it("renders with channel thumbnail", async () => {
    fakeYoutube.channelImageURL.mockImplementation(() => "url");
    renderChannelInfo();

    await waitFor(() => expect(screen.getByRole("img")).toBeInTheDocument());
  });

  function renderChannelInfo() {
    return render(
      withAllContext(
        withRouter(
          <Route path="/" element={<ChannelInfo id="1" name="channel" />} />
        ),
        fakeYoutube
      )
    );
  }
});
