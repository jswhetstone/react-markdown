import React from 'react';
import Types from 'prop-types';

import { wrapOrderingListMarkdown } from './MarkdownUtils';

const MarkdownOrderedListButton = ({ state, onChange }) => (
  <button className="btn btn-default"
    onClick={e => onChange(wrapOrderingListMarkdown(state))}
  >
    <i className="fa fa-list-ol"/>
  </button>
);

MarkdownOrderedListButton.propTypes = {
  state: Types.object,
  onChange: Types.func
};

export default MarkdownOrderedListButton;
