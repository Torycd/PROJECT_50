// import React from 'react'

const HomePage = () => {
  return (
    <div className="h-screen relative">
      {/* Purple background */}
      <div className="w-full h-full absolute">
        {/* Left SVG overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-left z-20"
          style={{
            backgroundImage:
              'url("/src/assets/images/bg-pattern-intro-left-desktop.svg")',
          }}
        />

        {/* Right SVG overlay */}
        <div
          className="absolute top-0 right-0 w-full h-full bg-no-repeat bg-right-top z-20"
          style={{
            backgroundImage:
              'url("/src/assets/images/bg-pattern-intro-right-desktop.svg")',
          }}
        />

        {/* Main content */}
        <div className="relative z-10 h-[700px] bg-purple-900">
          <div className="max-w-[1440px] mx-auto flex justify-between">
            <div className="text-white mt-[100px]">
              <h2>Helllo</h2>
            </div>

            <div className="translate-y-[100px]">
              <img
              className="h-full"
                src="/src/assets/images/image-intro-desktop.jpg"
                alt="Image intro"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
