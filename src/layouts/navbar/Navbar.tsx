import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Hubtic2.png';
import { UserOutlined } from '@ant-design/icons';
import './navbar.css';

const Navbar = () => {
  return (
    <Row className="container" justify="space-between">
      <Col span={2}>
        <Link to="/">
          <div className="logo-container">
            <img src={Logo} alt="Logo" />
          </div>
        </Link>
      </Col>

      <Col span={1}>
        <Link to="/profile">
          <div className="profile-picture-container">
            <UserOutlined className="profile-picture" />
          </div>
        </Link>
      </Col>
    </Row>
  );
};

export default Navbar;
