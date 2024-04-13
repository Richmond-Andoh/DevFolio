/* eslint-disable react/prop-types */

const SectionsTitle = ({ title }) => {
  return (
    <div className='flex items-center gap-5 py-10'>
        <h1 className='text-primary text-3xl'>{title}</h1>
        <div className="w-56 h-[1px] bg-teal-200 mt-5 sm:w-40"></div>
    </div>
  )
}

export default SectionsTitle;