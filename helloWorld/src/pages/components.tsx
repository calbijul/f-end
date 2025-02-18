import { FC } from "react";
import Button from "../components/buttons";
import Card from "../components/cards";

const Components: FC = () => {
  return (
    <>
      <div className="p-5 py-11">
        {/* <h1 className="flex justify-center xs:text-h3 sm:text-h2 md:text-h1 lg:text-h2 xl:text-h2 mb-2">Typography</h1> */}
        <h1 className="xs:text-h3 sm:text-h2 md:text-h1 lg:text-h1  bg-pm-600">
          This is Heading H1
        </h1>
        <h2 className="xs:text-h4 sm:text-h3 md:text-h2 lg:text-h2 xl:text-h2 bg-pm-300">
          This is Heading H2
        </h2>
        <h3 className="xs:text-h5 sm:text-h4 md:text-h3 lg:text-h3 xl:text-h3 bg-pm-50">
          This is Heading H3
        </h3>
        <h4 className="xs:text-h6 sm:text-h5 md:text-h4 lg:text-h4 xl:text-h4 bg-nt-100">
          This is Heading H4
        </h4>
        <h5 className="xs:text-h6 sm:text-h5 md:text-h5 lg:text-h5 xl:text-h5 bg-nt-300">
          This is Heading H5
        </h5>
        <h6 className="xs:text-h6 sm:text-h6 md:text-h6 lg:text-h6 xl:text-h6 bg-nt-500">
          This is Heading H6
        </h6>
        <p className="font-helvetica bg-nt-700 text-nt-white">This is a paragraph with helvetica.</p>
        <p className="text-body-big-reg bg-nt-900 text-nt-white">Big Regular (18/26)</p>
        <p className="text-body-big-str">Big Strong (18/26)</p>
        <p className="text-base-big-reg">Base Regular (16/24)</p>
        <p className="text-small-reg">Small Regular (14/20)</p>
        <p className="text-caption-reg">Caption Regular (12/auto)</p>
        <p className="text-all-caps">ALL CAPS (12/auto)</p> 

        {/* <h1>Buttons</h1> */}
        <Button size="sm" text="Small Button" />
        <Button size="lg" text="Large Button" />
        <Card size="sm" text="Small Card" />
        <Card size="lg" text="Large Card" />
       
      </div>
    </>
  );
};

export default Components;
