import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app.react';

// Use describe to group similar tests
describe("Test the App component", () => {
  let component;
  beforeEach(() => {
    //create an instance of App
    component = renderComponent(App);
  });
  it("shows a comment box", () => {
    // expect a html element with the class name of "comment-box" to exist
    expect(component.find(".comment-box")).to.exist;
  });
});
