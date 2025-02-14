import Button from "../Component/Button";

const Intro = () => {
  return (
    <div>
      <hr className="w-[200px] hidden sm:block text-white z-100 mb-20" />
      <div className="space-y-[20px] mx-4 sm:mx-0">
        <h2 className="text-[38px] my-5 sm:my-0 text-center sm:text-right sm:text-[64px] font-bold font-Serif tracking-widest">
          Humanizing
          <br />
          Your Insurance.
        </h2>
        <p className="text-[20px] sm:text-[24px] text-center sm:text-right text-gray-50 opacity-80">
          Get your life insurance coverage easier and faster. We blend our
          expertise
          <br /> and technology to help you find the plan that&apos;s right for
          you. Ensure you
          <br /> and your loved ones are protected.
        </p>
        <div className="text-center sm:text-right mb-[20px]">
          <Button styling="border-white">View Plans</Button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
