import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "firebaseApp";
import AuthContext from "context/AuthContext";

interface PostListProps {
  hasNavigation?: boolean;
}
type TabType = "all" | "my";

interface PostProps {
  id: string;
  title: string;
  email: string;
  summary: string;
  content: string;
  createdAt: string;
}

export default function PostList({ hasNavigation = true }: PostListProps) {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [posts, setPosts] = useState<PostProps[]>([]);
  const { user } = useContext(AuthContext);

  const getPosts = async () => {
    const datas = await getDocs(collection(db, "posts"));
    datas?.forEach((doc) => {
      const dataObj = { ...doc.data(), id: doc.id };
      setPosts((prev) => [...prev, dataObj as PostProps]);
    });
  };
  useEffect(() => {
    getPosts();
  }, [activeTab]);
  return (
    <>
      {hasNavigation && (
        <div className="post_navigation">
          <div
            role="presentation"
            onClick={() => setActiveTab("all")}
            className={activeTab === "all" ? "post_navigation-active" : ""}
          >
            전체
          </div>
          <div
            role="presentation"
            onClick={() => setActiveTab("my")}
            className={activeTab === "my" ? "post_navigation-active" : ""}
          >
            나의 글
          </div>
        </div>
      )}
      <div className="post_list">
        {posts?.length > 0 ? (
          posts?.map((post, index) => (
            <div key={post?.id} className="post_box">
              <Link to={`/posts/${post?.id}`}>
                <div className="post_profile-box">
                  <div className="post_profile"></div>
                  <div className="post_author-name">{post?.email}</div>
                  <div className="post_date">{post?.createdAt}</div>
                </div>
                <div className="post_title">{post?.title}</div>
                <div className="post_text">{post?.content}</div>
              </Link>

              {post?.email === user?.email && (
                <div className="post_utils-box">
                  <div className="post_delete">삭제</div>
                  <Link to={`/posts/edit/${post?.id}`} className="post_edit">
                    수정
                  </Link>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="post_no-post">게시글이 없습니다.</div>
        )}
      </div>
    </>
  );
}
