import { useDispatch, useSelector } from "react-redux";
import { Form, Input, message } from "antd";
import { showloading, hideloading } from "../../reducer/rootSlice";
import axios   from "axios";


const AdminIntro = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  //const { intro } = portfolioData
  //const intro = portfolioData ? portfolioData.intro : null;
  console.log(portfolioData?.intro);

  const onFinish = async(values) => {
    try {
      dispatch(showloading());
      const response = await axios.post("/api/portfolio/update-intro", {
        ...values,
        _id: portfolioData.intro._id
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
      <Form layout="vertical" onFinish={onFinish} initialValues={portfolioData?.intro}>
        <Form.Item name="welcomeText" label="Welcome Text">
          <Input placeholder="Welcome Text" />
        </Form.Item>

        <Form.Item name="firstName" label="First Name">
          <Input placeholder="First Name" />
        </Form.Item>

        <Form.Item name="lastName" label="Last Name">
          <Input placeholder="Last Name" />
        </Form.Item>

        <Form.Item name="caption" label="Caption">
          <Input placeholder="caption" />
        </Form.Item>

        <Form.Item name="description" label="Description">
          <textarea placeholder="description"></textarea>
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

export default AdminIntro;
