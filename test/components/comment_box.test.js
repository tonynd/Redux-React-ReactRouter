import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box.react';

describe("Test the CommentBox component", () => {
  const component = renderComponent(CommentBox);

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
});
