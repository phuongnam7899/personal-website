import { IconWithTooltip } from "../../../../../../components";
import "./index.scss";
import { useRef, useState } from "react";
import orderBy from 'lodash/orderBy'

export const CommentsSection = ({ comments = [], addComment }) => {
  const [commentContent, setCommentContent] = useState("");
  const inputRef = useRef();
  const [commentsState, setCommentsState] = useState(orderBy(comments, 'createdAt', 'desc'));

  const handleClickAddComment = () => {
    if (commentContent) {
        addComment(commentContent);
        setCommentsState([{content: commentContent, createdAt: new Date().getTime()}, ...commentsState]);
        setCommentContent("");
        inputRef.current.innerText = "";
    }
  };

  return (
    <div className="comments-section">
      <h3 className="title">
        Comments{" "}
        <IconWithTooltip
          tooltipContent={"No need to login cause I won't get your data"}
        >
          <i class="fas fa-question-circle"></i>
        </IconWithTooltip>
      </h3>
      <div className="add-comment">
        <div
          onInput={(e) => {
            setCommentContent(e.target.innerText);
          }}
          ref={inputRef}
          html={commentContent}
          contentEditable
          className="comment-input"
        />

        <button onClick={handleClickAddComment}>Comment</button>
      </div>
      {commentsState.length ? (
        commentsState.map((comment) => {
          return (
            <div className="comment-item">
              <div>
                <b className="name">Some guy</b>
              </div>{" "}
              <div className="content">{comment.content}</div>
            </div>
          );
        })
      ) : (
        <div>
          No comments yet, be the first one{" "}
          <i class="fas fa-long-arrow-alt-up"></i>
        </div>
      )}
    </div>
  );
};
