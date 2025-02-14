import Button from "../Component/Button";

const More = () => {
  return (
    <div className=" bg-purple-900 text-white w-full">
      <div
        style={{
          backgroundImage: `url(${
            window.innerWidth >= 640
              ? "/src/assets/images/bg-pattern-how-we-work-desktop.svg"
              : "/src/assets/images/bg-pattern-footer-mobile.svg"
          })`,
          backgroundPosition: "right top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        className="relative w-full z-10 p-20"
      >
        <div className="flex flex-col sm:flex-row justify-between">
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
