// import React from 'react'

const FootGrid = () => {
  return (
    <div className="grid grid-col-1 text-center sm:text-left sm:grid-cols-4 text-[20px]">
      <div>
        <h2 className="mb-[30px] opacity-50 font-bold">Our company</h2>
        <ul className="flex flex-col opacity-60 gap-2 font-semibold">
          <li>
            <a href="" className="hover:underline">
              How we work
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Why Insure?
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              View plans
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-[30px] opacity-50 font-bold">FAQ</h2>
        <ul className="flex flex-col gap-2 font-semibold">
          <li>
            <a href="" className="hover:underline">
              Terms of use
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Privacy policy
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Cookies
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-[30px] opacity-50 font-bold">Contact</h2>
        <ul className="flex flex-col gap-2 font-semibold">
          <li>
            <a href="" className="hover:underline">
              Sales
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Support
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Live chat
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-[30px] opacity-50 font-bold">Others</h2>
        <ul className="flex flex-col gap-2 font-semibold">
          <li>
            <a href="" className="hover:underline">
              Careers
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Press
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Licenses
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FootGrid;
