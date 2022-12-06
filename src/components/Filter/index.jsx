import React from "react";
import { Row, Col, Space, Input, Radio, Button, Table, Tabs, Card } from "antd";

const { Search } = Input;
const periodOptions = ["1D", "7D", "1M", "3M"];
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Volume",
    dataIndex: "volume",
  },
  {
    title: "Sentiment",
    dataIndex: "sentiment",
  },
  {
    title: "Change",
    dataIndex: "change",
  },
  {
    title: "Market",
    dataIndex: "market",
  },
  {
    title: "Social",
    dataIndex: "social",
  },
  {
    title: "Volatility",
    dataIndex: "volatility",
  },
];
const data = [
  {
    key: "1",
    name: "ElonMusk",
    volume: 2,
    sentiment: 5,
    change: 0.5,
    market: 3,
    social: 8,
    volatility: 5.2,
  },
  {
    key: "2",
    name: "ElonMusk",
    volume: 2,
    sentiment: 5,
    change: 0.5,
    market: 3,
    social: 8,
    volatility: 5.2,
  },
  {
    key: "3",
    name: "ElonMusk",
    volume: 2,
    sentiment: 5,
    change: 0.5,
    market: 3,
    social: 8,
    volatility: 5.2,
  },
  {
    key: "4",
    name: "ElonMusk",
    volume: 2,
    sentiment: 5,
    change: 0.5,
    market: 3,
    social: 8,
    volatility: 5.2,
  },
  {
    key: "5",
    name: "ElonMusk",
    volume: 2,
    sentiment: 5,
    change: 0.5,
    market: 3,
    social: 8,
    volatility: 5.2,
  },
  {
    key: "6",
    name: "ElonMusk",
    volume: 2,
    sentiment: 5,
    change: 0.5,
    market: 3,
    social: 8,
    volatility: 5.2,
  },
  {
    key: "7",
    name: "ElonMusk",
    volume: 2,
    sentiment: 5,
    change: 0.5,
    market: 3,
    social: 8,
    volatility: 5.2,
  },
  {
    key: "8",
    name: "ElonMusk",
    volume: 2,
    sentiment: 5,
    change: 0.5,
    market: 3,
    social: 8,
    volatility: 5.2,
  },
];
const items = [
  {
    label: "Proflie",
    key: "1",
    children: (
      <Card title="General Info">
        <p>Profile</p>
      </Card>
    ),
  },
  { label: "Sentiment", key: "2", children: "Sentiment" },
  { label: "Alpha", key: "3", children: "Alpha" },
];

function Filter() {
  return (
    <Row gutter={24}>
      <Col span={14} style={{ borderRight: "1px grey solid" }}>
        <Space direction="vertical" style={{ display: "flex" }} size="middle">
          <Row>
            <Col span={12} offset={6}>
              <Search placeholder="input search text" />
            </Col>
          </Row>
          <Row>
            <Col flex="auto">
              <Radio.Group
                options={periodOptions}
                optionType="button"
                buttonStyle="solid"
              />
            </Col>
            <Col flex="none">
              <Space>
                <Button type="primary">Filters</Button>
                <Button type="primary">Expand</Button>
              </Space>
            </Col>
          </Row>
          <Table columns={columns} dataSource={data} size="small" />
        </Space>
      </Col>
      <Col span={10}>
        <Space
          direction="vertical"
          style={{ display: "flex", padding: "1rem" }}
          size="middle"
        >
          <Tabs defaultActiveKey="1" items={items} />
        </Space>
      </Col>
    </Row>
  );
}

export default Filter;
