export default function Home() {
  return (
    <main className="flex  flex-col ">
      <div className="h-[80vh] space-x-12 w-screen flex justify-center items-center">
        <img className="w-[35vw] h-auto" src="/ill/relationship.png" />
        <div className="flex flex-col">
          {/* hero text */}
          <div className="flex justify-center items-center flex-col text-4xl font-extrabold text-[#4A4B4A] tracking-wide">
            <h2>Pick your model below which suits</h2>
            <h2>you best</h2>
          </div>
          {/* call to action btn */}
          <div className="flex justify-center tracking-wide space-y-6 items-center flex-col mt-6">
            <button
              className="bg-[#59CC03]   rounded-md w-8/12 py-3.5 font-bold text-white  capitalize"
              style={{ boxShadow: "0 4px 0 0 #66A813", borderRadius: "6px" }}
            >
              School Student
            </button>
            <button
              className="border-[#E4E4E5] border-2 bg-white text-[#59CC03] rounded-md w-8/12 py-3.5 font-bold capitalize"
              style={{ boxShadow: "0 4px 0 0 #E4E4E5", borderRadius: "6px" }}
            >
              College Student
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
