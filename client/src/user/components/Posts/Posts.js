import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Carousel from "react-elastic-carousel";
import Post from './Post/Post';
import useStyles from './styles';


const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  


  return (
    !posts.length ? <CircularProgress /> : (
      <div>
         <Carousel>
          {posts.map((post) => (
              <div key={post._id} id="yogacard">
                <Post post={post} setCurrentId={setCurrentId} />
              </div>           
          ))}
        </Carousel>
      </div>    
    )
  );
};

export default Posts;

