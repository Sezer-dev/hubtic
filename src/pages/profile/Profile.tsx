import { Row, Col } from 'antd';
import { useGetAllByIdQuery } from '../../services/posts/PostsService';
import Post from '../../components/post/Post';
import './Profile.css';

const Profile = () => {
  const { data } = useGetAllByIdQuery(2);

  return (
    <Row justify="center">
      <Col span={18} className="profile-container">
        <Post postList={data} />
      </Col>
    </Row>
  );
};

export default Profile;
