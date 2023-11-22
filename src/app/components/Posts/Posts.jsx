"use client";
import React from "react";
import styled from "styled-components";
import Post from "../Post/Post";

export const PostsWrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
  @media (min-width: 600px) {
    padding: 9rem 0.4rem 0 0.4rem;
    width: 80%;
    margin: auto;
  }
`;
export const PostsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  border-top: 1px solid #c5c5c5;
  font-family: 'Fira Sans', sans-serif;
`;

export const TotalPost = styled.div`
  position: relative;
  top: 2px;
  left: 0;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #c5c5c5;
  border-right: 2px solid #c5c5c5;

  z-index: 10;
  background-color: #ffffff;
  padding: .5rem 1rem;
  font-size: .9rem;
  font-weight: 700;
  color: #13b6ed;
  @media (max-width: 280px) {
    font-size: 0.83rem;
    top: 2px;
  }
`;
const Posts = ({ posts }) => {
  return (
    <PostsWrapper>
      <TotalPost>
        <span>{posts.length} Posts</span>
      </TotalPost>
      <PostsContainer>
        {posts ? (
          posts.map((post, idx) => {
            return (
              <Post
                title={post.title}
                description={post.description}
                author={post.author}
                date={post.date}
                readTime={post.readTime}
                views={post.views}
                key={idx}
                thought={post.thought}
              ></Post>
            );
          })
        ) : (
          <p>Posts loading...</p>
        )}
      </PostsContainer>
    </PostsWrapper>
  );
};

export default Posts;
