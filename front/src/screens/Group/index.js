import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import defaultImage from "../defaultImage.png";


//그룹 목록 조회 api 호출

const Group = ({ groups = [] }) => {
  // 상태 변수 설정: 필터, 검색어, 정렬 순서
  const [filter, setFilter] = useState("public");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const navigate = useNavigate();

  // 필터 버튼 클릭 시 호출되는 함수
  const handleFilterClick = (filterType) => {
    setFilter(filterType);
    // 필터 타입에 따라 다른 경로로 네비게이션
    navigate(
      filterType === "public" ? "/public-group-list" : "/private-group-list"
    );
  };

  // 메인 페이지 접속 시 기본 상태는 public 그룹 조회로 설정
  useEffect(() => { // eslint-disable-next-line 
    handleFilterClick("public"); }, []
  );

  const dayDiffCal = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const timeDiff = now - createdDate;
    console.log(now,'pp', createdDate, 'dd', groups.createdAt);
    const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    return dayDiff
  }
    

  // const handleLikeClick = async (groupId) => {
  //   await fetch(`/api/groups/${groupId}/like`, { method: 'POST' });
  //   // 공감 수 증가 등의 로직 추가
  // };

  // 검색어 입력 시 호출되는 함수
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  // 정렬 순서 변경 시 호출되는 함수
  const handleSortChange = (e) => setSortOrder(e.target.value);

  // 그룹 클릭 시 호출되는 함수
  const handleGroupClick = (group) => {
    // 그룹이 비공개일 경우 비공개 접근 경로로, 그렇지 않으면 그룹 상세 페이지로 이동
    navigate(
      group.isPublic
        ? `/group-details/${group.id}`
        : `/private-group-access/${group.id}`
    );
  };

  // 그룹의 배지 획득 조건을 확인하는 함수
  const checkBadgeConditions = (group) => {
    let earnedBadges = [];

    if (group.memoryStreak >= 7) earnedBadges.push(1); // 7일 연속 추억 등록
    if (group.memoryCount >= 20) earnedBadges.push(2); // 추억 20개 이상
    const oneYear = 365 * 24 * 60 * 60 * 1000;
    if (new Date() - new Date(group.createdAt) >= oneYear) earnedBadges.push(3); // 그룹 생성 1년 달성
    if (group.likeCount >= 10000) earnedBadges.push(4); // 공감 1만 개 이상
    if (group.memories?.some((memory) => memory.likeCount >= 10000))
      earnedBadges.push(5); // 추억 공감 1만 개 이상

    return earnedBadges;
  };

  // 필터, 검색어, 정렬 조건에 따라 그룹 목록 필터링 및 정렬
  const filteredGroups = groups
    .map((group) => ({
      ...group,
      badgeIds: checkBadgeConditions(group),
    }))
    .filter((group) => (filter === "public" ? group.isPublic : !group.isPublic))
    .filter((group) =>
      group.name?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "latest")
        return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortOrder === "mostLiked") return b.likeCount - a.likeCount;
      if (sortOrder === "mostPosts") return b.memoryCount - a.memoryCount;
      if (sortOrder === "mostBadges")
        return b.badgeIds.length - a.badgeIds.length;
      return 0;
    });

  return (
    <div className="group-list-page">
      {/* 헤더 섹션 */}
      <div className="header-container">
        <div className="logo-container"></div>
        <div className="create-button-container">
          <button onClick={() => navigate("/create")} className="create-button">
            그룹 만들기
          </button>
        </div>
      </div>

      {/* 검색 및 정렬 섹션 */}
      <div className="search-and-sort">
        <div className="filter-buttons">
          <button
            className={filter === "public" ? "active-filter" : ""}
            onClick={() => handleFilterClick("public")}
          >
            공개
          </button>
          <button
            className={filter === "private" ? "active-filter" : ""}
            onClick={() => handleFilterClick("private")}
          >
            비공개
          </button>
        </div>
        <input
          type="text"
          placeholder="그룹명을 검색해 주세요"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="sort-select"
        >
          <option value="latest">최신순</option>
          <option value="mostLiked">공감순</option>
          <option value="mostPosts">게시글 많은순</option>
          <option value="mostBadges">획득 배지순</option>
        </select>
      </div>

      {/* 그룹 목록 섹션 */}
      <div className="group-list">
        {filteredGroups.length > 0 ? (
          filteredGroups.map((group, index) => (
            <div
              key={index}
              className="group-item"
              onClick={() => handleGroupClick(group)}
            >
              {group.imageUrl !== "string" ? (
                <img
                  src={group.imageUrl}
                  alt={group.name}
                />
              ) : (
                <img
                  src={defaultImage} // 기본 이미지
                  alt="기본 그룹 이미지"
                />
              )}
              <div className="group-details">
                <span>D+{dayDiffCal(group.createdAt)}</span>
                <span>|</span>
                <span>{group.isPublic ? "공개" : "비공개"}</span>
              </div>
              <div className="group-item-title">
                {group.name}
              </div>
              <div className="group-item-introduction-container">
                <div className="group-item-introduction">
                  {group.introduction && <p>{group.introduction}</p>}
                </div>
              </div>
              <div className="group-stats">
                <div>
                  <span>획득 배지 {(group.badgeIds || []).length}</span>
                </div>
                <div>
                  <span>추억 {group.memoryCount}</span>
                </div>
                <div>
                  <span>그룹 공감 {group.likeCount}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>그룹이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Group;
