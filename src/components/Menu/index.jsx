import React from "react";
import { useRouter } from "next/router";
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  FormOutlined,
  SortAscendingOutlined,
} from "@ant-design/icons";

import styles from "./menu.module.css";

function RmzMenu({ item }) {
  const router = useRouter();

  const handleClick = (url) => {
    router.push(url);
  };

  const items = [
    {
      label: "Home",
      key: "home",
      icon: <HomeOutlined />,
      onClick: () => handleClick("/"),
    },
    {
      label: "Social",
      key: "submenu",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: "Feed",
          key: "feed",
          icon: <FormOutlined />,
          onClick: () => handleClick("/feed"),
        },
        {
          label: "Ranker",
          key: "ranker",
          icon: <SortAscendingOutlined />,
          onClick: () => handleClick("/ranker"),
        },
      ],
    },
  ];

  return <Menu items={items} defaultSelectedKeys={[item]} mode="inline" />;
}

export default RmzMenu;
