import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

//그룹 조회 권한 확인 api 호출

// PrivateAccess 컴포넌트: 비공개 그룹에 접근할 때 비밀번호를 확인하는 역할
const PrivateAccess = ({ privateGroups }) => {
  // 비밀번호와 에러 메시지를 관리하기 위한 상태 선언
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 페이지 이동을 위한 useNavigate 훅과 URL 매개변수를 가져오기 위한 useParams 훅 사용
  const navigate = useNavigate();
  const { id } = useParams();

  // 주어진 id에 해당하는 그룹을 찾음
  const group = privateGroups.find((group) => group.id === id);

  // 그룹이 존재하지 않을 경우, 에러 메시지를 표시
  if (!group) {
    return <p>그룹을 찾을 수 없습니다.</p>;
  }

  // 폼이 제출될 때 호출되는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
    // 입력한 비밀번호가 그룹의 비밀번호와 일치하는지 확인
    if (password === group.password) {
      navigate(`/group-details/${group.id}`); // 비밀번호가 일치하면 그룹 상세 페이지로 이동
    } else {
      setError("비밀번호가 일치하지 않습니다."); // 비밀번호가 틀리면 에러 메시지 설정
    }
  };

  return (
    <div className="private-access">
      <h2>비공개 그룹</h2>
      <p>비공개 그룹에 접근하기 위해선 비밀번호가 필요합니다.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">비밀번호를 입력해주세요</label>
        <input
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // 비밀번호 입력 필드가 변경될 때 상태 업데이트
        />
        <button type="submit">제출하기</button>
      </form>
      {error && <p className="error-message">{error}</p>}{" "}
      {/* 에러 메시지가 있을 경우 화면에 표시 */}
    </div>
  );
};

export default PrivateAccess;
