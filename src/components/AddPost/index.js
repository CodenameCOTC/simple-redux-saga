import React, { PureComponent } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { addPost } from "../../redux/actions";

class AddPost extends PureComponent {
  state = {
    title: "",
    body: "",
    userId: "1"
  };

  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addPost(this.state);
  };

  render() {
    const { title, body } = this.state;
    const { isLoading } = this.props.status;
    return (
      <>
        <label>Title</label>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={title}
            name="title"
            onChange={this.handleOnChange}
          />
          <label>Body</label>
          <input
            type="text"
            value={body}
            name="body"
            onChange={this.handleOnChange}
          />
          <button type="submit" className="button">
            SAVE
          </button>
        </form>
        {isLoading && <span>Posting data to server...</span>}
      </>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addPost }, dispatch);

const mapStateToProps = state => ({ status: state.status });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPost);
