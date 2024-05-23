import { useDispatch, useSelector } from "react-redux";
import { Form, Input, message } from "antd";
import { showloading, hideloading } from "../../reducer/rootSlice";
import axios   from "axios";


const AdminAbout = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  //const { about } = portfolioData
  //const about = portfolioData ? portfolioData.about : null;
  console.log(portfolioData?.about);

  const onFinish = async(values) => {
    try {
      const tempSkills = values.skills.split(",");
      values.skills = tempSkills;
      dispatch(showloading());
      const response = await axios.post("/api/portfolio/update-about", {
        ...values,
        _id: portfolioData.about._id
      });

      dispatch(hideloading());

      if(response.data.success) {
         message.success(response.data.message)
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };


  return (
    <div className="justify-center items-center mx-auto mt-12">
      <Form layout="vertical" onFinish={onFinish} 
          initialValues={
            portfolioData?.about}
      >
        <Form.Item name="lottieUrl" label="Lottie URL">
          <Input placeholder="Welcome Text" />
        </Form.Item>

        <Form.Item name="description1" label="Description">
          <textarea placeholder="description2"></textarea>
        </Form.Item>

        <Form.Item name="description2" label="Description">
          <textarea placeholder="description2"></textarea>
        </Form.Item>

        <Form.Item name="skills" label="Skills">
          <textarea placeholder="skills"></textarea>
        </Form.Item>

        <div className="justify-end flex w-full">
          <button type="submit" className="text-white bg-primary-content border border-teal px-7 py-3 text-center">
            Save
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AdminAbout;
