import React from "react";
import { Row, Col, Space } from "antd";
import Layout from "components/Layout";
import FeedCard from "components/FeedCard";

export default function Feed() {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Space direction="vertical" size="small" style={{ display: "flex" }}>
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </Space>
      </Col>
    </Row>
  );
}

Feed.getLayout = function getLayout(page) {
  return <Layout item="feed">{page}</Layout>;
};
