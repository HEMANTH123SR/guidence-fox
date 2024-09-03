export default function Home() {
  return (
    <main className="flex  flex-col justify-center items-center">
      <div className=" mt-16 space-x-12 w-10/12 flex justify-center items-center">
        <img className="w-[32vw] h-auto" src="/ill/relationship.png" />
        <div className="flex flex-col z-30">
          {/* hero text */}
          <div className="flex justify-center  flex-col text-4xl font-extrabold text-[#4A4B4A] tracking-wide ">
            <h2>Guiding Students, Shaping Futures,</h2>
            <h2 className="underline">Inspiring Careers.</h2>
          </div>

          {/* hero sub heading */}
          <div className="flex flex-col mt-4 font-light">
            <p>
              Empowering students to navigate their unique journeys, we
              illuminate pathways to success and ignite passions for lifelong
              learning.
            </p>
           
              Together, we shape futures and inspire careers that resonate with
              purpose and potential.
           
          </div>

          {/* call to action btn */}
          <div className="flex justify-start tracking-wide  items-center space-x-4  mt-6">
            <button
              className="border-[#E4E4E5] border-2  bg-white text-[#59CC03] rounded-md px-6 py-2 font-bold capitalize"
              style={{ boxShadow: "0 4px 0 0 #E4E4E5", borderRadius: "6px" }}
            >
              Student
            </button>
            <button
              className="border-[#E4E4E5] border-2  bg-white text-[#59CC03] rounded-md px-6 py-2 font-bold capitalize"
              style={{ boxShadow: "0 4px 0 0 #E4E4E5", borderRadius: "6px" }}
            >
              Institute
            </button>
            <button
              className="border-[#E4E4E5] border-2  bg-white text-[#59CC03] rounded-md px-6 py-2 font-bold capitalize"
              style={{ boxShadow: "0 4px 0 0 #E4E4E5", borderRadius: "6px" }}
            >
              Parent
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
