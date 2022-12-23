import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchHeader from "components/SearchHeader";
import { Route } from "react-router-dom";
import renderer from "react-test-renderer";
import { withRouter } from "tests/utils";

describe("SearchHeader", () => {
  it("renders", () => {
    const component = renderer.create(
      withRouter(<Route path="/" element={<SearchHeader />} />)
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders with keyword correctly", () => {
    render(
      withRouter(
        <Route path="/:keyword" element={<SearchHeader />} />,
        "/apple"
      )
    );
    expect(screen.getByDisplayValue("apple")).toBeInTheDocument();
  });

  it("navigate to results page on search button clicked", () => {
    const keyword = "fake-keyword";

    render(
      withRouter(
        <>
          <Route path="/home" element={<SearchHeader />} />
          <Route
            path={`/videos/${keyword}`}
            element={<p>{`Search result for ${keyword}`}</p>}
          />
        </>,
        "/home"
      )
    );

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    userEvent.type(input, keyword);
    userEvent.click(button);

    expect(
      screen.getByText(`Search result for ${keyword}`)
    ).toBeInTheDocument();
  });
});
