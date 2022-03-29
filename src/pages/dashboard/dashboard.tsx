import { Row, Col, Form, Button, Input, Select } from 'antd';
import Post from '../../components/post/Post';
import { IPostParams } from '../../services/posts/posts.interface';
// import { IPostParams } from '../../services/posts/posts.interface';
import { useGetAllQuery, useCreatePostQuery } from '../../services/posts/PostsService';
import './dashboard.css';

const { TextArea } = Input;
const { Option } = Select;

const Dashboard = () => {
  const [form] = Form.useForm();

  const { data } = useGetAllQuery();

  const postTitleChanged = (value: string) => {
    form.setFieldsValue({ title: value });
  };

  const postTextChanged = (value: string) => {
    form.setFieldsValue({ text: value });
  };

  const userIdChanged = (value: string) => {
    form.setFieldsValue({ userId: Number(value) });
  };

  const onSubmit = async (values: any) => {
    const requestParams: IPostParams = {
      title: values.title,
      body: values.text,
      userId: Number(values.userId),
    };

    await useCreatePostQuery(requestParams);
  };

  return (
    <Row justify="space-around" className="posts-container">
      <Col span={8} className="posts">
        <div>
          <Form form={form} wrapperCol={{ span: 24 }} onFinish={onSubmit}>
            <Form.Item name="title" wrapperCol={{ span: 24 }} rules={[{ required: true }]}>
              <Input
                onChange={(e) => postTitleChanged(e.target.value)}
                placeholder="What do you like to talk about ?"
              />
            </Form.Item>
            <Form.Item name="text" required={true} rules={[{ required: true }]}>
              <TextArea
                placeholder="What do you think ?"
                maxLength={180}
                autoSize={{ minRows: 2, maxRows: 3 }}
                showCount={true}
                onChange={(e) => postTextChanged(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="userId"
              wrapperCol={{ span: 24 }}
              rules={[{ required: true }]}
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Select placeholder="What is your User Id ?" onChange={userIdChanged} allowClear>
                {data &&
                  data.map((post, index) => {
                    return (
                      <Option key={index} value={post.userId}>
                        {post.userId}
                      </Option>
                    );
                  })}
              </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 20, span: 1 }} className="btn-submit">
              <Button type="primary" htmlType="submit">
                Share
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div>
          <Post postList={data} />
        </div>
      </Col>
    </Row>
  );
};

export default Dashboard;
