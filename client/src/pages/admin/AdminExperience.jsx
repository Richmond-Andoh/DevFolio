/* eslint-disable react/jsx-key */
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
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

  //   const onFinish = async(values) => {
  //     try {
  //       const tempSkills = values.skills.split(",");
  //       values.skills = tempSkills;
  //       dispatch(showloading());
  //       const response = await axios.post("/api/portfolio/update-experience", {
  //         ...values,
  //         _id: portfolioData.experience._id
  //       });

  //       dispatch(hideloading());

  //       if(response.data.success) {
  //          message.success(response.data.message)
  //       } else {
  //         message.error(response.data.message);
  //       }
  //     } catch (error) {
  //       message.error(error.message);
  //     }
  //   };

  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
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

            <Modal visible={showAddEditModal} title={selectedItemForEdit ? "Edit Experience" : "Add Experience" }>
              
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
