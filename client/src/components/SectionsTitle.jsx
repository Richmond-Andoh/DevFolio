/* eslint-disable react/prop-types */

const SectionsTitle = ({ title }) => {
  return (
    <div className='flex items-center gap-10 py-10'>
        <h1 className='text-primary text-3xl'>{title}</h1>
        <div className="w-60 h-[2px] bg-teal-200 sm:w-40"></div>
    </div>
  )
}

export default SectionsTitle;