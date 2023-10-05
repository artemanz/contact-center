import { useState } from "react";
import { Blog, CreatePost, Login, Main, Post } from "./pages";
import { Footer } from "./components";
import { AuthProvider, User } from "./firebase";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

function App() {
  const initialUser = localStorage.getItem("user");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [user, setUser] = useState<User | null>(
    initialUser ? JSON.parse(initialUser) : null
  );

  return (
    <AuthProvider.Provider value={{ user, setUser }}>
      <div className="flex flex-col min-h-screen App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<Main />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:postId" element={<Post />} />
              <Route path="/login" element={<Login />} />
              {user && <Route path="/create-post" element={<CreatePost />} />}
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </AuthProvider.Provider>
  );
}

export default App;
