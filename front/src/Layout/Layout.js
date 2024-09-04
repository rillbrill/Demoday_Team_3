import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "./logo.png"; // 로고 이미지 경로
import "./Layout.css";

const Layout = () => {

  const navigate = useNavigate();

  const logoClick = () => {
    (
      navigate("/")
    );
  };

  return (
    <div className="layout">
      <header className="layout-header">
        <div className="logo-container" onClick={logoClick}>
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </header>
      <main className="layout-content">
        <Outlet /> {/* 중첩된 라우트가 렌더링되는 위치 */}
      </main>
    </div>
  );
};

export default Layout;
