import Intro from "../modules/IntroSchema";

const updateIntro = async(res, req) => {
   try {
    const intro = await Intro.findByIdAndUpdate(
        {_id: req.body._id},
        req.body,
        { new: true }
    );

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