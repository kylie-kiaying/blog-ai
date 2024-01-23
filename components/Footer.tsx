import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">Write Wizard</h4>
          <p className="my-5">
            Write Wizard is a blog platform dedicated towards AI and generation and job automation.
          </p>
          <p>© Write Wizard All Rights Reserved.</p>
        </div>
        {/* SECOND COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Write wizard link 1</p>
          <p className="my-5">Write wizard link 2</p>
          <p className="my-5">Write wizard link 3</p>
        </div>
        {/* THIRD COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">email@writewizard.com</p>
          <p>+65 91234567</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;