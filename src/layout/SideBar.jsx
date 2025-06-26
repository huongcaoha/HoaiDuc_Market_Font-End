import React, { useState } from "react";
import {
  AppleOutlined,
  BookOutlined,
  DashboardOutlined,
  FieldTimeOutlined,
  FileSearchOutlined,
  GiftOutlined,
  HomeOutlined,
  InsertRowLeftOutlined,
  MailOutlined,
  MessageOutlined,
  PictureOutlined,
  UserSwitchOutlined,
  WindowsOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link, NavLink } from "react-router-dom";
import "../css/sideBarAdmin.css";
const items = [
  {
    key: "1",
    icon: <DashboardOutlined style={{ fontSize: "20px" }} />,
    label: (
      <Link to={""} className="text-base font-semibold mb-5">
        Dashboard
      </Link>
    ),
  },
  {
    key: "2",
    icon: <WindowsOutlined style={{ fontSize: "20px" }} />,
    label: (
      <Link to={"/admin/class"} className="text-base font-semibold mb-5">
        Class Manager
      </Link>
    ),
  },
  {
    key: "3",
    icon: <BookOutlined style={{ fontSize: "20px" }} />,
    label: (
      <Link to={"/admin/subject"} className="text-base font-semibold mb-5">
        Subject Manager
      </Link>
    ),
  },
  
];
const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};
const levelKeys = getLevelKeys(items);

export default function SideBar() {
  const [stateOpenKeys, setStateOpenKeys] = useState([]);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };
  return (
    <Menu
      className="sidebar h-[100vh] pt-[50px] bg-[#f5f5f5]"
      mode="inline"
      defaultSelectedKeys={["231"]}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 256,
      }}
      items={items}
    />
  );
}
