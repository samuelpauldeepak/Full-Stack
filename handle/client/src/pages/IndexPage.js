import Post from "../Post";
import { useEffect, useState } from "react";
import baseUrl from "../baseUrl";
import dotenv from "dotenv";
dotenv.config();
export default function IndexPage() {
  console.log(baseUrl);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/post`).then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return <>{posts.length > 0 && posts.map((post) => <Post {...post} />)}</>;
}
