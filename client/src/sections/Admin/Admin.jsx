import Header from "../../components/header/Header";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { Tabs } from "antd";
const TabPane = Tabs.TabPane;

const Admin = () => {
  return (
    <div>
      <Header />
      <div className="mt-5">
        <Tabs>
          <TabPane tab="Intro" key="1">
            <AdminIntro />
          </TabPane>
          <TabPane tab="Projects" key="2">
            <AdminAbout />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
