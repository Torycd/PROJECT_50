import Button from "../Component/Button";

const More = () => {
  return (
    <div className="absolute sm:max-w-[1440px]  bg-purple-900 text-white w-full">
      <div
        className="hidden sm:block absolute bg-right-top  w-full h-full bg-no-repeat z-20"
        style={{
          backgroundImage:
            'url("/src/assets/images/bg-pattern-how-we-work-desktop.svg")',
        }}
      />
      <div className="relative w-full z-10 p-20">
        <div className="flex flex-col sm:flex-row justify-between">
          <h2 className="text-[48px] text-center sm:text-left sm:text-[64px]">
            Find out more
            <br /> about how we work
          </h2>
          <div className="flex flex-col justify-center">
            <Button styling={"hover:bg-white hover:text-black"}>How we work</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
