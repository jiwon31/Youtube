import VideoCard from "components/VideoCard";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import { Route, useLocation } from "react-router-dom";
import { fakeVideo as video } from "tests/videos";
import { withRouter } from "tests/utils";
import { formatDate } from "util/formatDate";
import userEvent from "@testing-library/user-event";

describe("VideoCard", () => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  it("renders grid type correctly", () => {
    const component = renderer.create(
      withRouter(
        <Route path="/" element={<VideoCard video={video} type="" />}></Route>
      )
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders list type correctly", () => {
    const component = renderer.create(
      withRouter(
        <Route
          path="/"
          element={<VideoCard video={video} type="list" />}
        ></Route>
      )
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  // 정적 테스트를 스냅샷 테스트만 할건지 아니면 밑의 테스트도 할건지는 선택사항!
  it("renders video item", () => {
    render(
      withRouter(
        <Route path="/" element={<VideoCard video={video} type="" />}></Route>
      )
    );

    const image: HTMLImageElement = screen.getByRole("img");
    expect(image.src).toBe(thumbnails.medium.url);
    expect(image.alt).toBe(title);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(channelTitle)).toBeInTheDocument();
    expect(screen.getByText(formatDate(publishedAt))).toBeInTheDocument();
  });

  it("navigate to detailed video page with video state when clicked", () => {
    function LocationStateDisplay() {
      return <pre>{JSON.stringify(useLocation().state)}</pre>;
    }

    render(
      withRouter(
        <>
          <Route path="/" element={<VideoCard video={video} type="" />}></Route>
          <Route
            path={`/videos/watch/${video.id}`}
            element={<LocationStateDisplay />}
          ></Route>
        </>
      )
    );

    const card = screen.getByRole("listitem");
    userEvent.click(card);

    expect(screen.getByText(JSON.stringify({ video }))).toBeInTheDocument();
  });
});
