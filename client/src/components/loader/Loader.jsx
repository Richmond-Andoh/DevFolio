
const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary-content'>
        <div className="text-4xl font-extrabold">
           <h1 className="loading loading-ring loading-lg text-success"></h1>
        </div>
    </div>
  )
}

export default Loader