import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // uuid 가져오기
import "./style.css";

const CreateGroupPage = ({ addGroup }) => {
  const [name, setname] = useState("");
  const [introduction, setintroduction] = useState("");
  const [image, setImage] = useState("");
  const [isPublic, setisPublic] = useState(true);
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(null); // 성공 또는 실패를 추적하기 위한 상태
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // 선택한 파일의 URL을 상태에 저장
    } //이미지 api 호출
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 비밀번호가 입력되었는지 확인
    if (!password) {
      alert("비밀번호를 입력해 주세요.");
      return;
    }

    //그룹 등록 api 호출

    const newGroup = {
      id: uuidv4(), // 새 그룹에 고유 ID 할당
      name,
      introduction,
      image,
      isPublic,
      password,
      createdAt: new Date(), // 그룹 생성 시간
      likeCount: 0,
      memories: [],
      memoriesCount: 0,
      recommendations: 0,
    };

    // 그룹 등록 시 request body
    // {
    //   "name": "string",
    //   "password": "string",
    //   "imageUrl": "string",
    //   "isPublic": true,
    //   "introduction": "string"
    // }

    try {
      addGroup(newGroup); // 그룹 추가 시도
      setIsSuccess(true); // 그룹 추가가 성공하면 성공 상태를 true로 설정
    } catch (error) {
      setIsSuccess(false); // 오류가 발생하면 성공 상태를 false로 설정
    }
  };

  return (
    <div>
      {isSuccess === null && (
        <div className="create-group-container">
          <h1 className="name">그룹 만들기</h1>
          <form onSubmit={handleSubmit} className="create-group-form">
            <div className="form-group">
              <label>그룹명</label>
              <input
                type="text"
                placeholder="그룹명을 입력해 주세요"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>대표 이미지</label>
              <div className="file-input-container">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange} // 파일 선택 시 handleFileChange 호출
                  className="file-input"
                />
              </div>
            </div>
            <div className="form-group">
              <label>그룹 소개</label>
              <textarea
                placeholder="그룹을 소개해 주세요"
                value={introduction}
                onChange={(e) => setintroduction(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>그룹 공개 선택</label>
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
            </div>
            <div className="form-group">
              <label>비밀번호</label>
              <input
                type="password"
                placeholder="비밀번호를 입력해 주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={!isPublic} // 비공개인 경우 비밀번호 필수 입력
              />
            </div>
            <button type="submit" className="submit-button">
              만들기
            </button>
          </form>
        </div>
      )}
      {isSuccess !== null && (
        <div className={`message ${isSuccess ? "success" : "failure"}`}>
          <p>{isSuccess ? "그룹 만들기 성공" : "그룹 만들기 실패"}</p>
          <p className="details">
            {isSuccess
              ? "그룹이 성공적으로 등록되었습니다."
              : "그룹 등록에 실패했습니다."}
          </p>
          <button onClick={() => navigate("/")}>확인</button>
        </div>
      )}
    </div>
  );
};

export default CreateGroupPage;
