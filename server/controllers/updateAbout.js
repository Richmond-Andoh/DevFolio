import About from "../modules/AboutSchema.js";

const updateAbout = async(req, res) => {
    try {
     const about = await About.findOneAndUpdate(
         {_id: req.body._id},
         req.body,
         { new: true }
     );
  

     if(!about){
       res.status(404).send({
        success: false,
        message: "About Not found"
         
       });
     }
  
     res.status(200).send({
        data: about,
        success: true,
        message: "About updated successfully"
     });
    } catch (error) {
     res.status(500).send(error.message);
    };
  };

  export default updateAbout;