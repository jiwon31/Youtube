import ChannelInfo from "components/ChannelInfo";
import RelatedVideos from "components/RelatedVideos";
import VideoDetail from "pages/VideoDetail";
import renderer from "react-test-renderer";
import { Route } from "react-router-dom";
import { withRouter } from "tests/utils";
import { fakeVideo } from "tests/videos";

jest.mock("../../components/ChannelInfo");
jest.mock("../../components/RelatedVideos");

const ChannelInfoMock = ChannelInfo as jest.Mock;
const RelatedVideosMock = RelatedVideos as jest.Mock;

describe("VideoDetail", () => {
  afterEach(() => {
    ChannelInfoMock.mockReset();
    RelatedVideosMock.mockReset();
  });

  it("renders video item details", () => {
    const component = renderer.create(
      withRouter(<Route path="/" element={<VideoDetail />} />, {
        pathname: "/",
        state: { video: fakeVideo },
        key: "fake-key",
      })
    );
    expect(component.toJSON()).toMatchSnapshot();

    const { channelId, channelTitle } = fakeVideo.snippet;
    expect(ChannelInfoMock.mock.calls[0][0]).toStrictEqual({
      id: channelId,
      name: channelTitle,
    });
    expect(RelatedVideosMock.mock.calls[0][0]).toStrictEqual({
      id: fakeVideo.id,
    });
  });
});
