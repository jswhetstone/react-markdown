import React from 'react';
import Types from 'prop-types';
import RichMarkdownEditor from '../RichMarkdownEditor';
import PlainMarkdownEditor from '../PlainMarkdownEditor';
import SlateToolbarGroup from '../SlateEditor/SlateToolbarGroup';
import SwitchModeButton from './SwitchModeButton.react';

/**
 * https://markdown-it.github.io/
 */
class MarkdownEditor extends React.Component {
  state = {
    mode: this.props.mode || 'rich',
    value: this.props.value || '',
    fullScreen: false
  };

  handleChangeMode = (mode) => {
    this.setState({ mode });
  };

  handleChangeValue = (value) => {
    this.props.onChange(value);

    this.setState({ value });
  };

  handleFullScreen = (fullScreen) => {
    this.setState({ fullScreen });
  };

  render() {
    const { mode, value, fullScreen } = this.state;
    const { autocompletes, autoCompletionLinks } = this.props;

    const buttons = (
      <SlateToolbarGroup>
        <SwitchModeButton onChangeMode={this.handleChangeMode} mode={mode}/>
      </SlateToolbarGroup>
    );

    if (mode === 'plain') {
      return (
        <PlainMarkdownEditor value={value}
          onChange={this.handleChangeValue}
          autocompletes={autocompletes}
          onFullScreen={this.handleFullScreen}
          fullScreen={fullScreen}
        >
          {buttons}
        </PlainMarkdownEditor>
      );
    } else if (mode === 'rich') {
      return (
        <RichMarkdownEditor value={value}
          onChange={this.handleChangeValue}
          autocompletes={autocompletes}
          autoCompletionLinks={autoCompletionLinks}
          onFullScreen={this.handleFullScreen}
          fullScreen={fullScreen}
        >
          {buttons}
        </RichMarkdownEditor>
      )
    } else {
      throw new Error(`Mode '${mode}' not supported`);
    }
  }
}

MarkdownEditor.propTypes = {
  autocompletes: Types.array,
  autoCompletionLinks: Types.array,
  mode: Types.string,
  value: Types.string,
  onChange: Types.func,
};

export default MarkdownEditor;
