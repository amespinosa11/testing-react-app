import { shallow } from "enzyme";
import Todo from "./Todo";

test("My First test ever!", () => {
  expect(true).toBe(true);
});

test("Render todo component", () => {
  const checkbox = shallow(<Todo />);

  expect(checkbox.text()).toEqual("OFF");

  checkbox.find("input").simulate("change");

  expect(checkbox.text()).toEqual("ON");
});
