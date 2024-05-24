import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { Tabs } from "antd";
import AdminExperience from "./AdminExperience";
const { TabPane } = Tabs;

const Admin = () => {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div className="">
      <Header />
      <div className="mx-auto w-2/3">
        <div className="mt-12 px-6">
          {
            portfolioData && 
            <Tabs>
            <TabPane tab="Intro" key="1">
              <AdminIntro />
            </TabPane>

            <TabPane tab="About" key="2">
              <AdminAbout />
            </TabPane>

            <TabPane tab="Experience" key="3">
              <AdminExperience />
            </TabPane>
          </Tabs>
          }
        </div>
      </div>
    </div>
  );
};

export default Admin;
