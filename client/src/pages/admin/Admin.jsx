import Header from "../../components/header/Header";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const Admin = () => {
  return (
    <div className="">
      <Header />
      <div className="mx-auto w-2/3">
        <div className="mt-12 px-6">
          <Tabs>
            <TabPane tab="Intro" key="1">
              <AdminIntro />
            </TabPane>

            <TabPane tab="About" key="2">
              <AdminAbout />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Admin;
