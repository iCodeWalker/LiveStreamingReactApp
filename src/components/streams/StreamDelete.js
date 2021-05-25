import React from "react";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  // componentDidMount() {
  //   this.props.fetchStream(this.props.match.params.id);
  // }
  renderActions() {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "This action can't be undone ! Are you sure you want to delete your stream ? ";
    }
    return `This action can't be undone ! Are you sure you want to delete your stream ---> Title : ${this.props.stream.title}? `;
  }
  render() {
    return (
      <div>
        <h3>Stream Delete</h3>
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
