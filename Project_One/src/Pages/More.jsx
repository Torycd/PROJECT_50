import Button from "../Component/Button";

const More = () => {
  return (
    <div className="text-white">
      <div
        className="w-full z-10"
      >
        <div className=" flex flex-col sm:flex-row justify-between">
          <h2 className="text-[48px] text-center sm:text-left sm:text-[64px]">
            Find out more
            <br /> about how we work
          </h2>
          <div className="flex flex-col justify-center">
            <Button styling={"hover:bg-white hover:text-black"}>
              How we work
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
