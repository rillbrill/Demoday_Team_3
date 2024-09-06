import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Group from "./screens/Group";
import CreateGroupPage from "./screens/CreateGroup";
import PrivateGroupAccessPage from "./screens/PrivateAccess/index";
import GroupDetail from "./screens/GroupDetail";
import Layout from "./Layout/Layout";
import { initialStateGroups, initialStatePostDetails, initialStatePosts } from "./mock";
import PrivatePostAccessPage from "./screens/PrivatePostAccess";
import PostDetail from "./screens/PostDetail";
import CreatePostPage from "./screens/CreatePost";

const App = () => {
  // const [groups, setGroups] = useState([]);
  // initial state 데이터 가져오기 (프론트 테스트)
  const [groups, setGroups] = useState(initialStateGroups.data);
  const [posts, setPosts] = useState(initialStatePosts.data);
    // const [postDetails, setPostDetails] = useState(initialStatePostDetails);
  const postDetails = initialStatePostDetails;
  
  const addGroup = (newGroup) => {
    setGroups([...groups, newGroup]);
  };

  const publicGroups = groups.filter((group) => group.isPublic);
  const privateGroups = groups.filter((group) => !group.isPublic);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const publicPosts = posts.filter((post) => post.isPublic);
  // const privatePosts = posts.filter((post) => !post.isPublic);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {" "}
          {/* 공통 레이아웃 적용 */}
          <Route path="/" element={<Group groups={groups} />} />
          <Route
            path="/create"
            element={<CreateGroupPage addGroup={addGroup} />}
          />
          <Route
            path="/public-group-list"
            element={<Group groups={publicGroups} />}
          />
          <Route
            path="/private-group-list"
            element={<Group groups={privateGroups} />}
          />
          <Route
            path="/private-group-access/:id"
            element={<PrivateGroupAccessPage privateGroups={privateGroups} />}
          />
          {/* 그룹 디테일 + 포스트 조회 */}
          <Route
            path="/group-details/:id"
            // element={<GroupDetail groups={groups} posts={posts}/>}
            element={<GroupDetail groups={groups} posts={publicPosts}/>}
          />
          {/* <Route
            path="/group-details/:id/public-posts/:postId"
            element={<Post posts={publicPosts} />}
          />
          <Route
            path="/group-details/:id/private-posts/:postId"
            element={<Post posts={privatePosts} />}
          /> */}
          <Route
            path="/createpost"
            element={<CreatePostPage addPost={addPost} />}
          />
          <Route
            path="/group-details/:id/public-posts/:postId"
            element={<PostDetail postDetails={postDetails} />}
          />
          <Route
            path="/private-post-access/:id"
            element={<PrivatePostAccessPage privateGroups={privateGroups} />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
