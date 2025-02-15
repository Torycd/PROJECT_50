import Intro from "./Intro";

const HomePage = () => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url("/src/assets/images/bg-pattern-intro-right-desktop.svg"),
    ${
      window.innerWidth < 640
        ? 'url("/src/assets/images/bg-pattern-intro-left-mobile.svg")'
        : 'url("/src/assets/images/bg-pattern-intro-left-desktop.svg")'
    }
  `,
          backgroundPosition: "right top, left bottom",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "contain, contain",
        }}
        className="z-10 bg-purple-900"
      >
        <div className="max-w-[1440px] flex mx-auto flex-col-reverse sm:flex sm:flex-row sm:justify-between">
          <div className="text-white my-[60px] sm:mt-[100px]">
            <Intro />
          </div>
          <div className="sm:translate-y-[100px]">
            <img
              className="h-full"
              src="/src/assets/images/image-intro-desktop.jpg"
              alt="Image intro"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
