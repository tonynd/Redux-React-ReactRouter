import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app.react';

// Use describe to group similar tests
describe("Test the App component", () => {
  // Use 'it' to test a single attribute of a target
  it("shows the correct text", () => {
    //create an instance of App
    const component = renderComponent(App);
    // Use 'expect' to make an 'assertion' about a target
    expect(component).to.contain("this is simple react");
  });
});
