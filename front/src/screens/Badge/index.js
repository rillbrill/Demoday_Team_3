import React from "react";
import "./style.css";

//뱃지 정보
const badges = [
  {
    id: 1,
    title: "7일 연속 추억 등록",
  },
  {
    id: 2,
    title: "추억 수 20개 이상 등록",
  },
  {
    id: 3,
    title: "그룹 생성 후 1년 달성",
  },
  {
    id: 4,
    title: "그룹 공간 1만 개 이상 받기",
  },
  {
    id: 5,
    title: "추억 공감 1만 개 이상 받기",
  },
];

// 뱃지 컴포넌트
const Badge = ({ badgeIds = [] }) => {
  const userBadges = badges.filter((badge) => badgeIds.includes(badge.id));

  return (
    <div className="badge-container">
      {userBadges.map((badge) => (
        <div key={badge.id} className="badge-item">
          <span className="badge-title">{badge.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Badge;
