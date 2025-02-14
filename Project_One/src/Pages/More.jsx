const More = () => {
  return (
    <div className="absolute max-w-[1440px] bg-purple-900 text-white w-full">
      <div
        className="hidden sm:block absolute bg-right-top  w-full h-full bg-no-repeat z-20"
        style={{
          backgroundImage:
            'url("/src/assets/images/bg-pattern-how-we-work-desktop.svg")',
        }}
      />
      <div className="relative w-full z-10 p-20">
        <h2 className="text-[64px]">
          Find out more
          <br /> about how we work
        </h2>
      </div>
    </div>
  );
};

export default More;
