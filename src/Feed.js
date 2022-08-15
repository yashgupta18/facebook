import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchDocs = async () => {
      const q = collection(db, "posts");
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs;
      setPosts(
        docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    };
    fetchDocs();
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
};

export default Feed;
