import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box.react';

describe("Test the CommentBox component", () => {
  let component;
  // "beforeEach" function is going to run before each of the "it" function
  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has the correct className', () => {
    expect(component).to.have.class("comment-box");
  });

  it('has a text area', () => {
    // uses jquery to get the text area inside the component
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  // the reason for this describe here is to show that the two "it" functions are very close related
  describe("entering some text", () => {
    beforeEach(() => {
      // simulate a fake event
      component.find("textarea").simulate("change", "new comment");
    });

    it("shows text that is entered", () => {
      expect(component.find("textarea")).to.have.value("new comment");
    });

    it("when submitted, clears the input", () => {
      component.simulate("submit");
      expect(component.find("textarea")).to.have.value("");
    });
  })
});
