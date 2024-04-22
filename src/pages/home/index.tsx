import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header>
        <div>
          <Link to="/posts/new">글쓰기</Link>
          <Link to="/posts">게시글</Link>
          <Link to="/profile">프로필</Link>
        </div>
      </header>
      <div className="post_navigation">
        <div className="post_navigation-active">전체</div>
        <div>나의 글</div>
      </div>
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
      <footer>
        <div>Menu 1</div>
        <div>Menu 2</div>
        <div>Menu 3</div>
      </footer>
    </div>
  );
}
