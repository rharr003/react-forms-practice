import BoxList from "./BoxList";
import { fireEvent, render, screen } from "@testing-library/react";

it("renders without crashing", () => {
  render(<BoxList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment).toMatchSnapshot();
});

it("should add new box", () => {
  const { getByTestId, queryByText, getByPlaceholderText } = render(
    <BoxList />
  );
  try {
    getByTestId("black");
  } catch (e) {
    expect(e);
  }
  const submit = queryByText("Add Box");
  const width = getByPlaceholderText("width");
  const height = getByPlaceholderText("height");
  const color = getByPlaceholderText("color");
  fireEvent.change(width, { target: { value: "50" } });
  fireEvent.change(height, { target: { value: "50" } });
  fireEvent.change(color, { target: { value: "black" } });
  fireEvent.click(submit);
  expect(getByTestId("black"));
});
