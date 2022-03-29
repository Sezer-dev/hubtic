import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './layouts/navbar/Navbar';
import Dashboard from './pages/dashboard/dashboard';
import Profile from './pages/profile/Profile';
import 'antd/lib/button/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/select/style/css';
import './App.css';

const { Header, Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="main-container">
        <Header>
          <Navbar />
        </Header>
        <Content className="content-container">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
