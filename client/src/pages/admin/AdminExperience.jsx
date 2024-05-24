import { useDispatch, useSelector } from "react-redux";
//import { Form, Input, message } from "antd";
//import { showloading, hideloading } from "../../reducer/rootSlice";
//import axios   from "axios";


const AdminExperience = () => {
  //const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experience } = portfolioData
  //const experience = portfolioData ? portfolioData.experience : null;
  console.log(portfolioData?.experience);

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
    <div className="grid ">
     
    </div>
  );
};

export default AdminExperience;
