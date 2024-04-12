/* eslint-disable react/jsx-key */
import SectionsTtitle from "../../components/SectionsTtitle";
    
const About = () => {

    const skills = (
        [
            "HTML",
            "CSS",
            "TAILWIND",
            "BOOTSTRAP",
            "JAVASCRIPT",
            "REACT",
            "NODEJS",
            "EXPRESS",
            "MONGODB",
            "DAISYUI",
            "FIREBASE"
            
        ]
    )

  return (
    <div>
      <SectionsTtitle title="About Me ..." />

        <div className="flex w-full items-center">
            <div className="h-[70vh] w-1/2">
               <lottie-player src="https://lottie.host/542c2684-7209-48c1-b21a-e343de79dba6/NUt7nWpQ2l.json" background="transparent" autoplay speed="1" direction="1" mode="normal"></lottie-player>
            </div>
            <div className="flex flex-col gap-6 w-1/2">
                <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugiat 
                    quo, aspernatur consequuntur ea unde inventore similique earum quisquam,
                    doloremque molestiae, 
                    magnam impedit ipsam perspiciatis harum porro quasi fugit deserunt.
                </p>

                <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Perferendis vel natus aliquid repellendus a voluptate accusamus,
                     molestias cum modi ut labore culpa eveniet? Ratione expedita 
                     necessitatibus, reiciendis assumenda repudiandae ipsam ab adipisci 
                     eligendi quasi vel consequuntur sequi eius? 
                    Praesentium commodi itaque rerum, dolore doloribus reprehenderit.
                </p>
            </div>
        </div>

        <div className="py-8">
            <h1 className="text-teal text-xl">Here are Some Few Technologies I've been Working with recently;</h1>
            <div className="flex flex-wrap gap-10 mt-5">
                {
                    skills.map((skill, idx) => (
                        <div className="border border-teal px-5 py-3">
                            <h1 className="text-teal">{skill}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default About
