



const Form  = () =>{
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);

  }

  return (
    <>
      <div className="form-box mt-[35px]  ">
        <form onSubmit={handleSubmit} className="w-[420px] relative flex items-center">
          <input placeholder="    +998 97-234-21-12" className="p-[10px]  w-full rounded-full" type="text" name="" id="" />
          <button type="submit" className="p-[10px] absolute right-[0%] rounded-full  bg-orange-500	 text-white ">
            Notify Me
          </button>
        </form>
      </div>

    </>
  )
}