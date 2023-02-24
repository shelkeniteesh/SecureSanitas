import React from "react";
import "../resources/styles/pages/Header.css";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content } = Layout;

export default function HeaderComponent() {
  return (
    <div className="headerDiv">
      <div className="logo">
        <h1>SecureSanitas</h1>
      </div>
      <div className="profileSection">
        <div className="profilePhoto"></div>
        <div className="menu-item">
          <b>Want Help?</b>
        </div>
      </div>
    </div>
  );
}
