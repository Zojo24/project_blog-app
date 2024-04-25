import { useState } from "react";

export default function Comments() {
  const [comment, setComment] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const {
      target: { name, value },
    } = e;
    if (name === "comment") {
      setComment(value);
    }
  };
  return (
    <div className="comments">
      <form className="comments_form">
        <div className="form_block">
          <label htmlFor="comment">댓글 입력</label>
          <textarea
            name="comment"
            id="comment"
            required
            value={comment}
            onChange={onChange}
          />
        </div>
        <div className="form_block">
          <input type="submit" value="입력" className="form_btn-submit" />
        </div>
      </form>
      <div className="comments_list"></div>
    </div>
  );
}
