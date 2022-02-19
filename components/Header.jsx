import { CodeOutlined } from '@ant-design/icons/lib/icons';
import { Col, Row } from 'antd';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <Row align="middle" style={{ height: 64 }}>
      <Col span={24}>
        <Link href="/">
          <a>
            <div style={{ fontSize: 20, fontWeight: 'bold' }}>
              <CodeOutlined /> HoSeop Blog
            </div>
          </a>
        </Link>
      </Col>
    </Row>
  );
};

export default Header;
