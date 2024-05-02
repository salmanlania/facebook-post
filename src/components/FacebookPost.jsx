// FacebookPost.js
import React, { useState } from "react";
import ReactFbImageGrid from "react-fb-image-grid";
// import "./App.css";

import {
  FaThumbsUp,
  FaHeart,
  FaLaugh,
  FaSadCry,
  FaAngry,
} from "react-icons/fa";

const FacebookPost = ({ title, date, images, profilePic, username }) => {
  const [showEmojis, setShowEmojis] = useState(false);

  const toggleEmojis = () => {
    setShowEmojis(!showEmojis);
  };

  return (
    <div className="facebook-post">
      <div className="post-header">
        <img src={profilePic} alt={`${username}'s profile`} />
        <h4>Muhammad Salman Lania</h4>
      </div>
      <div className="post-info">
        <p>{new Date(date).toLocaleDateString()}</p>
      </div>
      <p className="post-text">{title}</p>
      {images.length > 0 && <ReactFbImageGrid images={images} />}
      <div className="post-footer">
        <button className="like-button" onClick={toggleEmojis}>
          Like
        </button>
        <button className="like-button">
          Comment
        </button>
        <button className="like-button">
          Send
        </button>
      </div>
        {showEmojis && (
          <div className="emoji-menu">
            <FaThumbsUp className="emoji-menu-svg" />
            <FaHeart className="emoji-menu-svg" />
            <FaLaugh className="emoji-menu-svg" />
            <FaSadCry className="emoji-menu-svg" />
            <FaAngry className="emoji-menu-svg" />
          </div>
        )}
    </div>
  );
};

export default FacebookPost;
