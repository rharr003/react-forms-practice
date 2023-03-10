import NewBoxForm from "./NewBoxForm";
import { render, screen } from "@testing-library/react";

it("renders without crashing", () => {
  render(<NewBoxForm />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment).toMatchSnapshot();
});
