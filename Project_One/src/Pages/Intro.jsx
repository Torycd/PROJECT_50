import Button from "../Component/Button";

const Intro = () => {
  return (
    <div>
      <hr className="w-[200px] text-white z-100 mb-20" />
      <div className="space-y-[20px]">
        <h2 className="text-[64px] font-bold font-Serif tracking-widest">
          Humanizing
          <br />
          Your Insurance.
        </h2>
        <p className="text-[24px] text-gray-50 opacity-80">
          Get your life insurance coverage easier and faster. We blend our
          expertise
          <br /> and technology to help you find the plan that&apos;s right for
          you. Ensure you
          <br /> and your loved ones are protected.
        </p>
        <Button styling="border-white">View Plans</Button>
      </div>
    </div>
  );
};

export default Intro;
