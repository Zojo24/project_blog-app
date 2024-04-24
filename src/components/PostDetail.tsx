import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PostProps } from "./PostList";
import { doc, getDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import Loader from "./Loader";

export default function PostDetail() {
  const [post, setPost] = useState<PostProps | null>(null);
  const params = useParams();

  const getPost = async (id: string) => {
    if (id) {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      setPost({ id: docSnap.id, ...(docSnap.data() as PostProps) });
    }
  };

  const handleDelete = () => {
    console.log("delete");
  };

  useEffect(() => {
    if (params?.id) getPost(params?.id);
  }, [params?.id]);

  return (
    <>
      <div className="post_detail">
        {post ? (
          <div className="post_box">
            <div className="post_title">{post?.title}</div>
            <div className="post_profile-box">
              <div className="post_profile" />
              <div className="post_author-name">{post?.email}</div>
              <div className="post_date">{post?.createdAt}</div>
            </div>
            <div className="post_utils-box">
              <div className="post_delete" onClick={handleDelete}>
                삭제
              </div>
              <div className="post_edit">
                <Link to={`/post/edit/1`}>수정</Link>
              </div>
            </div>
            <div className="post_text post_text-pre-wrap">{post?.content}</div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}
