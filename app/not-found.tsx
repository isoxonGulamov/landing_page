import React from 'react'

const NotFound = () => {
  return (
    <div className="p-25">
      <div className=" max-[485px]:w-[390px] max-[485px]:ml-1 max-sm:w-[450px] max-sm:mt-[290px] max-sm:h-[280px] max-lg:w-[600px]  h-[300px] max-xl:w-[800px] max-xl:h-[450px] max-xl:mt-40 bg-NotFound text-center mr-auto ml-[390px] max-md:ml-[40px]  mt-[160px]  w-[1200px] h-[600px] ">
        <h2 className="text-black max-sm:left-[24%] max-sm:top-[300px]  max-lg:text-4xl absolute top-[35%] left-[39%] text-6xl font-semibold	">
          <span className="text-8xl max-lg:text-6xl">
            Oooops{" "}
            <span className="text-8xl max-lg:text-6xl text-orange-500">.</span>
          </span>{" "}
          <br />
          page not found
        </h2>
      </div>
    </div>
  );
}

export default NotFound