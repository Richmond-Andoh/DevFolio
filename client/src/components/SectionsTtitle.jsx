
const SectionsTtitle = ({ title }) => {
  return (
    <div className='flex items-center gap-10 py-10'>
        <h1 className='text-white text-3xl'>{title}</h1>
        <div className="w-60 h-[1px] bg-primary sm:w-40"></div>
    </div>
  )
}

export default SectionsTtitle;