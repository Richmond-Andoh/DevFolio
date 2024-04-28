import { Form, Input } from "antd";
import { useSelector } from "react-redux";
const AdminIntro = () => {

  const { portfolioData } = useSelector((state) => state.root);

  const handleFinish = (values) => {
    console.log("Success:", values);
  }
  return (
    <div className="justify-center items-center mx-auto mt-12">
      <Form layout="vertical" onFinish={handleFinish}>
        <Form.Item name="welcomTetxt" label="Welcome Text">
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
          <button className="text-white bg-primary-content border border-teal px-7 py-3 text-center">
            Save
          </button>
        </div>
      </Form>
    </div>
  )
}

export default AdminIntro;