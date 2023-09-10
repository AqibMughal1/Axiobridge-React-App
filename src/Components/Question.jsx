import { BsArrowRight, BsArrowDown } from "react-icons/bs";

function Question({isOpen, handleChange}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row justify-between">
        <h3 className="text-2xl text-white">Generate Your Design</h3>
        {isOpen ? (
          <BsArrowDown
            className="text-[#1F70AF] text-3xl cursor-pointer"
            onClick={handleChange}
          />
        ) : (
          <BsArrowRight
            className="text-[#1F70AF] text-3xl cursor-pointer"
            onClick={handleChange}
          />
        )}
      </div>

      {isOpen ? (
        <p className="w-full py-12 px-6 border-2 rounded-lg border-[#1F70AF] bg-black text-white text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      ) : (
        <div className="w-full bg-white h-[1px]"></div>
      )}
    </div>
  );
}

export default Question;
