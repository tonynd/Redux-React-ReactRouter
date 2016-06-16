import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list.react';

describe("Test the CommentList Component", () => {
  let component;
  beforeEach(() => {
    const props = {
      comments: ["New Comment", "Other new comment"]
    };
    // pass an object as the third argument, will be props
    component = renderComponent(CommentList, null, props);
  });

  it("shows an li for each comment", () => {
    expect(component.find("li").length).to.equal(2);
  });

  it("shows each comment that is provided", () => {
    expect(component).to.contain("New Comment");
    expect(component).to.contain("Other new comment");
  });
});
