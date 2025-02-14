import snappy from "../assets/images/icon-snappy-process.svg";
import afford from "../assets/images/icon-affordable-prices.svg";
import people from "../assets/images/icon-people-first.svg";
import Card from "../Component/Card";
import More from "./More";

const Different = () => {
  const DUMMY = [
    {
      title: "Snappy Process",
      icon: snappy,
      statement:
        "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
    },
    {
      title: "Affordable Prices",
      icon: afford,
      statement:
        "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    },
    {
      title: "People first",
      icon: people,
      statement:
        " Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
    },
  ];
  return (
    <div className="mt-[100px] max-w-[1440px] mx-auto overflow-hidden">
      <hr className="w-[200px] hidden sm:block border-black text-[24px] z-100" />
      <h2 className="text-[40px] text-center sm:text-left md:text-[60px] mt-[20px]">
        We&apos;re are different
      </h2>
      <div className="flex flex-col md:flex-row justify-between gap-2 my-[20px]">
        {DUMMY.map((item) => (
          <Card
            statement={item.statement}
            key={item.title}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="mt-[60px]">
        <More/>
      </div>
    </div>
  );
};

export default Different;
