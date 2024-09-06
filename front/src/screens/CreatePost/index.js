import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid"; // uuid 가져오기
import "./style.css";

const CreatePostPage = ({ addPost }) => {
  const [nickName, setNickName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [location, setLocation] = useState("");
  // const [moment, setMoment] = useState("");
  // const [imageUrl, setImageUrl] = useState("");
  const [isPublic, setisPublic] = useState(true);
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(null); // 성공 또는 실패를 추적하기 위한 상태
  const navigate = useNavigate();

  // 빈 날짜 (추후 수정)
  const moment = "";

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // setImageUrl(URL.createObjectURL(file)); // 선택한 파일의 URL을 상태에 저장
    } //이미지 api 호출
  };

  const addTag = (tag) => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
    }
    console.log(tags);
  };

  const handleInputBlur = () => {
    const trimmedValue = tagInput.trim();
    if (trimmedValue) {
      addTag(trimmedValue);
      setTagInput("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 비밀번호가 입력되었는지 확인
    if (!password) {
      alert("비밀번호를 입력해 주세요.");
      return;
    }

    //그룹 등록 api 호출

    const newPost = {
        nickname: "string",
        title: "string",
        content: "string",
        postPassword: "string",
        groupPassword: "string",
        imageUrl: "string",
        tags: [ "string", "string" ],
        location: "string",
        moment: "2024-02-21",
        isPublic: true
    };

    try {
      addPost(newPost); // 포스트 추가 시도
      setIsSuccess(true); // 포스트 추가가 성공하면 성공 상태를 true로 설정
    } catch (error) {
      setIsSuccess(false); // 오류가 발생하면 성공 상태를 false로 설정
    }
  };

  return (
    <div>
      {isSuccess === null && (
        // <div className="create-post-container">
        <div>
          <h1 className="name">추억 올리기</h1>
            <form onSubmit={handleSubmit}>
              <div className="create-post-form">
                <div className="form-post-container">
                  <div className="form-post">
                    <label>닉네임</label>
                    <input
                        type="text"
                        placeholder="닉네임을 입력해 주세요"
                        value={nickName}
                        onChange={(e) => setNickName(e.target.value)}
                    />
                  </div>
                  <div className="form-post">
                      <label>제목</label>
                      <input
                        type="text"
                        placeholder="제목을 입력해 주세요"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                  </div>
                  <div className="form-post">
                      <label>이미지</label>
                      <div className="file-input-container">
                          <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange} // 파일 선택 시 handleFileChange 호출
                          className="file-input"
                          />
                      </div>
                  </div>
                  <div className="form-post">
                      <label>본문</label>
                      <textarea
                          placeholder="본문 내용을 입력해 주세요"
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                      />
                  </div>
                </div>
                <div className="form-post-container">
                    <div className="form-post">
                        <div className="form-post">
                            <label>태그</label>
                            <input
                                type="text"
                                placeholder="태그를 입력해 주세요"
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onBlur={handleInputBlur}
                            />
                            <p>  </p>
                            {tags.map((tag, index) => (
                            <span key={index} className="show-tags-item">
                                #{tag}
                                {/* <button onClick={() => handleTagRemove(tag)}>삭제</button> */}
                            </span>
                            ))}
                        </div>
                        <div className="form-post">
                            <label>장소</label>
                            <input
                                type="text"
                                placeholder="장소를 입력해 주세요"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <div className="form-post">
                            <label>추억의 순간</label>
                            <input
                                type="text"
                                placeholder="**날짜 캘린더 기능**"
                                value={moment}
                                onChange={(e) => setNickName(e.target.value)}
                            />
                        </div>
                        <label>추억 공개 선택</label>
                        <div className="toggle-container">
                            {(isPublic) ? "공개" : "비공개"}
                            <label className="toggle-label">
                            <input
                                type="checkbox"
                                checked={isPublic}
                                onChange={(e) => setisPublic(e.target.checked)}
                                className="toggle-input"
                            />
                            <span className="toggle-slider"></span>
                            </label>
                        </div>
                        <div className="form-post">
                            <label>비밀번호 생성</label>
                            <input
                                type="password"
                                placeholder="추억 비밀번호를 생성해 주세요"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required={!isPublic} // 비공개인 경우 비밀번호 필수 입력
                            />
                        </div>
                    </div>
                  </div>
                </div>
                <div className="create-post-button-container">
                  <button type="submit" className="create-post-button">
                      올리기
                  </button>
                </div>
            </form>
        </div>
      )}
      {isSuccess !== null && (
        <div className={`message ${isSuccess ? "success" : "failure"}`}>
          <p>{isSuccess ? "추억 만들기 성공" : "추억 만들기 실패"}</p>
          <p className="details">
            {isSuccess
              ? "추억이 성공적으로 등록되었습니다."
              : "추억 등록에 실패했습니다."}
          </p>
          <button onClick={() => navigate("/group-details/1")}>확인</button>
        </div>
      )}
    </div>
  );
};

export default CreatePostPage;
