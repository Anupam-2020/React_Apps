import React from 'react';
import { useSelector } from 'react-redux';

const UserBlogs = () => {
  const {blogData} = useSelector(state => state.userData);

  return (
    <div>
      {blogData.map(blog => {
        return(
          <div>
            <h2>{blog.title}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default UserBlogs