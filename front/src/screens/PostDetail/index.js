import "./style.css";
import defaultImage from '../defaultImage.png'
import smallIcon from '../smallIcon.png'

// "id": 1,
// "nickname": "공개 포스트",
// "title": "string",
// "imageUrl": "string",
// "tags": [ "string", "string" ],
// "location": "string",
// "moment": "2024-02-21",
// "isPublic": true,
// "likeCount": 0,
// "commentCount": 0,
// "createdAt": "2024-02-22T07:47:49.803Z"

      
const PostDetail = ({ postDetails = [] }) => {

  return (
    <div className="post-detail-container">
      <div className="post-meta-actions">
        <div className="post-meta">
          <span>{postDetails.nickname}</span>
          <span> | </span>
          <span>{postDetails.isPublic ? "공개" : "비공개"}</span>
        </div>
        <div className="post-actions">
          <button 
            className="edit-post-button" 
            // onClick={handleOpenModal}
          >
            추억 수정하기
          </button>
          <button
            className="delete-post-button"
            // onClick={handleOpenDeleteModal}
          >
            추억 삭제하기
          </button>
        </div>
      </div>
      <div>
        <h2 className="post-title">
          {postDetails.title}
        </h2>
      </div>
      <div className="post-tags">
        {postDetails.tags.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </div>
      <div className="post-location-date-like">
        <div className="post-location-date">
          <span>{postDetails.location}</span> 
          <span>  ∙  </span>
          <span>{postDetails.moment}</span>
        </div>
        <button
          className="like-post-button"
          // onClick={handleOpenDeleteModal}
        >
          <img
            src={smallIcon}
            alt={"smallIcon"}
          />
          공감 보내기
        </button>
      </div>
      <hr className="separator" />
      <div className="post-content-container">
        <div>
          {postDetails.imageUrl ? (
            <img
              src={postDetails.imageUrl}
              alt={postDetails.title}
            />
          ) : (
            <img
              src={defaultImage}
              alt="기본 이미지"
            />
          )}
        </div>
        <div>
          <span>{postDetails.content}</span>
        </div>
      </div>
      <div>
        <div className="create-comment-container">
          <button
            className="create-comment-button"
            // onClick={}
          >
            댓글 등록하기
          </button>
        </div>
        
      </div>
    </div>
  )
};

export default PostDetail;
