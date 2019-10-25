import React from "react";
import { requestAllLikes, createLike } from "../../actions/like_actions";
import { connect } from "react-redux";

const msp = ({ entities, session }, ownProps) => {
  //, ownProps) => {
  debugger;
  return {
    likes: entities.likes,
    currentUser: session.currentUser.id || null,
    listing: entities.listings[ownProps.listing_id - 0]
  };
};

const mdp = dispatch => {
  return {
    getLikes: () => dispatch(requestAllLikes()),
    // removeLike: id => dispatch(removeLike(id)),
    createLike: like => dispatch(createLike(like))
  };
};

class Like extends React.Component {
  constructor(props, listing_id) {
    super(props, listing_id);
    //   this.state = {
    //       liked: false
    //   }
  }
  componentDidMount() {
    this.props.getLikes();
  }
  handleClick(body) {
    this.props.createLike(body);
  }
  render() {
    //console.log("This.listing_id: ", ownProps.listing_id);
    return (
      <div>
        <p
          className="fas fa-heart"
          onClick={e => {
            //         if (this.state.liked) {
            //             this.setState({ liked: false });
            //             this.props.removeLike()

            //   }
            this.handleClick({
              listing_id: this.props.listing.id,
              user_id: this.props.currentUser
            });
          }}
        ></p>
        <div>{Object.keys(this.props.likes).length} Likes</div>
      </div>
    );
  }
}

// export default Like;
export default connect(
  msp,
  mdp
)(Like);
