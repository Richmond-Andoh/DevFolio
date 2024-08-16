import Intro from "../modules/IntroSchema.js";

const updateIntro = async(req, res) => {
   try {
    const intro = await Intro.findOneAndUpdate(
        {_id: req.body._id},
        req.body,
        { new: true }
    );

    if(!intro){
      res.status(404).send({
        success: false,
        message: "Intro Not found"
      });
    }

    res.status(200).send({
        data: intro,
        success: true,
        message: "Intro updated successfully"
    });
   } catch (error) {
    res.status(500).send(error.message);
   };
};


export default updateIntro;