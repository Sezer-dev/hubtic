import { IPost } from '../../services/posts/posts.interface';
import { Card } from 'antd';
import { LikeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import 'antd/lib/card/style/css';
import './Post.css';

const Post = ({ postList }: { postList: IPost[] | undefined }) => {
  return (
    <>
      {postList &&
        postList!.map((post, index) => {
          return (
            <Card
              key={index}
              title={post.title}
              className="post"
              actions={[<LikeOutlined key="Like" />, <EditOutlined key="Dislike" />, <DeleteOutlined key="Comment" />]}
            >
              <p>{post.body}</p>
            </Card>
          );
        })}
    </>
  );
};

export default Post;
