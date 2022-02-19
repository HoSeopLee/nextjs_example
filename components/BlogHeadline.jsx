import { Col, Row } from 'antd';
import React from 'react';

const BlogHeadline = () => {
  return (
    <Row align="middle" style={{ height: 400, textAlign: 'center' }}>
      <Col span={24}>
        <h1 style={{ fontSize: '15vw', fontWeight: 'bold' }}>HoSeop Blog</h1>
        <p style={{ fontSize: 24 }}>여기는 내 블로그 헤더라인이다.</p>
      </Col>
    </Row>
  );
};

export default BlogHeadline;
