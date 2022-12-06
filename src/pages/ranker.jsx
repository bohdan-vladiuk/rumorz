import React from "react";
import { Row, Col, Space, Input, Select, Button, Card } from "antd";
import Layout from "components/Layout";

export default function Ranker() {
  return (
    <Row>
      <Col span={18} offset={3}>
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <Row justify="center">
            <Space size="large">
              <Button type="primary">My Filters</Button>
              <Button type="primary">New</Button>
            </Space>
          </Row>
          <Card title="Mentions">
            <Space>
              <Input addonBefore="coins" />
              <Input addonBefore="categories" />
            </Space>
          </Card>
          <Card title="Sentiment">
            <Row gutter={16}>
              <Col span={12}>
                <Space direction="vertical">
                  <div>
                    Sentiment
                    <Select
                      mode="multiple"
                      style={{ width: "100%" }}
                      allowClear
                      placeholder="Please select"
                      defaultValue={["Movies", "Books", "Music", "Sports"]}
                    />
                  </div>
                  <div>
                    Hate
                    <Select
                      mode="multiple"
                      style={{ width: "100%" }}
                      allowClear
                      placeholder="Please select"
                      defaultValue={["Movies", "Books", "Music", "Sports"]}
                    />
                  </div>
                </Space>
              </Col>
              <Col span={12}>
                <Space direction="vertical">
                  <div>
                    Joy
                    <Select
                      mode="multiple"
                      style={{ width: "100%" }}
                      allowClear
                      placeholder="Please select"
                      defaultValue={["Movies", "Books", "Music", "Sports"]}
                    />
                  </div>
                  <div>
                    Surprise
                    <Select
                      mode="multiple"
                      style={{ width: "100%" }}
                      allowClear
                      placeholder="Please select"
                      defaultValue={["Movies", "Books", "Music", "Sports"]}
                    />
                  </div>
                </Space>
              </Col>
            </Row>
          </Card>
          <Row justify="center">
            <Button type="primary">Save</Button>
          </Row>
        </Space>
      </Col>
    </Row>
  );
}

Ranker.getLayout = function getLayout(page) {
  return <Layout item="ranker">{page}</Layout>;
};
