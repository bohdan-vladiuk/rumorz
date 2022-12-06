import React from "react";
import { Row, Col, Space, Card } from "antd";
import styles from "./feed.module.css";

function FeedCard() {
  return (
    <Card size="small">
      <p>Elon Musk</p>
      <p>Dodge is people's crypto</p>
      <p>DOGE</p>
    </Card>
  );
}

export default FeedCard;
