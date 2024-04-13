import { useState } from 'react'
import SectionsTitle from '../../components/SectionsTitle'
import { experiences } from '../../resources/experience'

const Experiences = () => {

    const [selectedPeriodIndex, setselectedPeriodIndex] = useState(0)
  return (
    <div className='pb-10 pt-20'>
        <SectionsTitle title="Experience" />

        <div className="flex py-10 gap-20 sm:flex-col">
            <div className='flex flex-col gap-10 border-l-2 border-teal-700 w-1/3 sm:w-full sm:overflow-x-scroll sm:flex-row'>
                {
                    experiences.map((experience, idx) => (
                        <div className='cursor-pointer' onClick={() => setselectedPeriodIndex(idx)} key={idx}>
                            <h1 className={`text-xl px-5 ${ selectedPeriodIndex === idx ? "text-teal-600 border-l-4 -ml-[3px] bg-teal-500 opacity-60 py-3" : "text-white" } text-white`}>{ experience.period }</h1>
                        </div>
                    ))
                }
            </div>

            <div className="flex flex-col gap-10">
                <h1 className="text-primary">{experiences[selectedPeriodIndex].title}</h1>
                <p>
                 {experiences[selectedPeriodIndex].company}
                </p>
                <p>
                  {experiences[selectedPeriodIndex].description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Experiences