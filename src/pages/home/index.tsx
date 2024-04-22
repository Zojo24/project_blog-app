import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
}
