import renderer from "react-test-renderer";
import NotFound from "pages/NotFound";

describe("NotFound", () => {
  it("renders", () => {
    const component = renderer.create(<NotFound />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
