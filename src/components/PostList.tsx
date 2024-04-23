import { Link } from "react-router-dom";
import { useState } from "react";

interface PostListProps {
  hasNavigation?: boolean;
}
type TabType = "all" | "my";

export default function PostList({ hasNavigation = true }: PostListProps) {
  const [activeTab, setActiveTab] = useState<TabType>("all");
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
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post_box">
            <Link to={`/posts/${index}`}>
              <div className="post_profile-box">
                <div className="post_profile"></div>
                <div className="post_author-name">Zojo</div>
                <div className="post_date">2024.04</div>
              </div>
              <div className="post_title">게시글 {index} </div>
              <div className="post_text">
                안녕하세요 안녕하세요 안녕하세요 안녕하세요
              </div>

              <div className="post_utils-box">
                <div className="post_delete">삭제</div>
                <div className="post_edit">수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
