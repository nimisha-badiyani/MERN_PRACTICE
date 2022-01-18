import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const Posts = () => {

  const history = useHistory();

  const callPosts = async () => {
    try {
      const res = await fetch('/Posts', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
      history.push('/login')
    }
  }


  useEffect(() => {
    callPosts();
  }, []);


    return (
      <div>
        <p>WELCOME</p>
        <h1>Welcome to posts page</h1>
      </div>
    );
}

export default Posts;
