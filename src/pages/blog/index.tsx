import React, { useContext, useState } from "react";
import {
  default as gettedPosts,
  PostPreview as PostPreviewType,
} from "@/data/posts";
import PostPreview from "./PostPreview";
import { AuthProvider } from "@/firebase";
import { Link } from "react-router-dom";
import { logo } from "@/assets";
import { MobileMenu } from "@/components";
import { AnimatePresence } from "framer-motion";

type Props = {};

function createPost(post: any) {
  return (
    <li key={post.id}>
      <PostPreview post={post} />
    </li>
  );
}

const Blog = (props: Props) => {
  const { user } = useContext(AuthProvider);
  const [loading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState<PostPreviewType[]>([]);

  React.useEffect(() => {
    const getPostsHandler = async () => {
      const posts = await gettedPosts;

      setPosts(posts);
      setLoading(false);
    };

    getPostsHandler();
  }, []);

  return (
    <main className="grow">
      <section className="section">
        <div className="container">
          <ul className="flex items-center justify-between py-8 gap-7">
            <li className="max-w-[50%]">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </li>
            <li className="space-x-8">
              <Link className="Button--fullfilled" to="/login">
                {!user ? "войти" : "выйти"}
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-between">
            <h1 className="Heading">Блог</h1>
            {user && (
              <Link
                className="flex items-center justify-center w-16 h-16 text-4xl font-bold transition-colors border text-accent-2 border-accent-2 rounded-2xl hover:bg-accent-2 hover:text-white"
                to={"/create-post"}
              >
                +
              </Link>
            )}
          </div>
          {loading ? (
            <p className="text-2xl">Загрузка...</p>
          ) : (
            <ul className="grid gap-12 mt-12 md:grid-cols-2 lg:grid-cols-3">
              {posts.map(createPost)}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
};

export default Blog;
