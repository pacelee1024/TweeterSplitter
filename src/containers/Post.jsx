import React, { Component } from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import PostBoard from './PostBoard';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
      formSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({formSubmitted: false});
    this.setState({textInput: event.target.value});
  }

  handlePostSubmit() {
    this.setState({formSubmitted: true});
  }

  render() {
    const {formSubmitted, textInput} = this.state;
    return (
      <div id="post">
        <Form onSubmit={this.handlePostSubmit} className="post-form">
          <Form.Field 
            id="form-post-input"
            className="post-input-field"
            control={TextArea} 
            placeholder='Share what you are thinking...'
            onChange={this.handleChange}
            value={textInput}
            />
          <Form.Button className="button post-form-submit-button">Post</Form.Button>
        </Form>
        {formSubmitted ? <PostBoard post={textInput} /> : null}
      </div>
    );
  }
}

export default Post;