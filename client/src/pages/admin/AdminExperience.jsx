/* eslint-disable react/jsx-key */
import { Form, Input, Modal, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { showloading, hideloading, ReloadData } from "../../reducer/rootSlice";
import axios from "axios";

//import { Form, Input, message } from "antd";
//import { showloading, hideloading } from "../../reducer/rootSlice";
//import axios   from "axios";

const AdminExperience = () => {
  // eslint-disable-next-line no-unused-vars
  const [showAddEditModal, setshowAddEditModal] = useState(false);
  const [selectedItemForEdit, setselectedItemForEdit] = useState(null);

  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  console.log(experiences);

    const onFinish = async(values) => {
      try {
        const tempSkills = values.skills.split(",");
        
        values.skills = tempSkills;
        dispatch(showloading());
        const response = await axios.post("/api/portfolio/add-experience", values);

        dispatch(hideloading());

        if(response.data.success) {
           message.success(response.data.message);
           setshowAddEditModal(false);
           dispatch(hideloading());
           dispatch(ReloadData(true));
        } else {
          message.error(response.data.message);
        }
      } catch (error) {
        message.error(error.message);
      }
    };

    // grid-cols-4 gap-5 sm:grid-cols-12 md:grid-cols-6

  return (
    <div>
      <div className="flex justify-end my-5">
        <button className=" px-5 py-2 text-white bg-primary-content"
         onClick={() => ( setselectedItemForEdit(null), setshowAddEditModal(true))}
        >
          Add Experience
        </button>
      </div>
      <div className="grid gap-5 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
        {experiences.map((experience) => (
          <div className="shadow-xl border border-gray-600 px-5 py-2 flex flex-col gap-3">
            <h1 className="text-white font-bold text-xl">{experience.title}</h1>
            <h1>{experience.period}</h1>
            <h1>{experience.company}</h1>
            <h1>{experience.description}</h1>

            <div className="flex justify-end gap-5 mt-5">
              <button className="bg-primary-content text-white px-4 py-2">
                Edit
              </button>
              <button className="text-white px-4 py-2 bg-red-600">
                Delete
              </button>
            </div>

            <Modal
              visible={showAddEditModal}
              title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
              footer={null}
              onCancel={() => setshowAddEditModal(false)}
            >
              <Form layout="vertical" onFinish={onFinish}>
                <Form.Item name="period" label="Period">
                  <Input placeholder="Period" />
                </Form.Item>

                <Form.Item name="title" label="Title">
                  <Input placeholder="Title" />
                </Form.Item>

                <Form.Item name="company" label="Company">
                  <Input placeholder="Company" />
                </Form.Item>

                <Form.Item name="description" label="Description">
                  <Input placeholder="Description" />
                </Form.Item>

                <div className="flex gap-5 justify-end">
                  <buttton
                    className="border border-red-600 cursor-pointer text-center px-5 py-2"
                    onClick={() => setshowAddEditModal(false)}
                  >
                    Cancel
                  </buttton>
                  <buttton type="submit" onClick={onFinish} className="bg-primary-content text-white px-5 py-2 cursor-pointer">
                    {selectedItemForEdit ? "Update" : "Add"}
                  </buttton>
                </div>
              </Form>
            </Modal>
          </div>
        ))}

        {/* <div className="flex">
        <button className="bg-primary text-white px-4 py-2">Edit</button>
        <button className="text-white px-4 py-2 bg-red-600">Delete</button>
      </div> */}
      </div>
    </div>
  );
};

export default AdminExperience;
