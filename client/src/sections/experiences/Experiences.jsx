import { useState } from 'react'
import SectionsTtitle from '../../components/SectionsTtitle'
import { experiences } from '../../resources/experience'

const Experiences = () => {

    const [selectedPeriodIndex, setselectedPeriodIndex] = useState(0)
  return (
    <div className='pb-10 pt-20'>
        <SectionsTtitle title="Experience" />

        <div className="flex py-10">
            <div className='flex flex-col gap-5 border-l-2 border-teal-700'>
                {
                    experiences.map((experience, idx) => (
                        <div className='cursor-pointer' onClick={() => setselectedPeriodIndex(idx)} key={idx}>
                            <h1 className={`text-xl px-5 ${ selectedPeriodIndex === idx ? "text-teal-600 border-l-4 -ml-[3px] bg-teal-500 opacity-60 py-3" : "text-white" } text-white`}>{ experience.period }</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experiences