import { assets } from "../assets/assets";
import QuickLink from "./QuickLink";

const QuickLinks = () => {
  return (
    <div className="h-[30vh] w-full bg-white flex-center flex-wrap py-2 px-4 gap-x-8">
      <QuickLink
        img={assets.oneStop_logo}
        altText={"One stop logo"}
        quickLinkText="One Stop"
      />
      <QuickLink
        img={assets.bookstore_logo}
        altText={"Bookstore logo"}
        quickLinkText="Bookstore"
      />
      <QuickLink
        img={assets.library_logo}
        altText={"Library logo"}
        quickLinkText="Library"
      />
      <QuickLink
        img={assets.police_logo}
        altText={"Police logo"}
        quickLinkText="Campus Police"
      />
      <QuickLink
        img={assets.studentLounge_logo}
        altText={"Student lounge logo"}
        quickLinkText="Student Lounge"
      />
      <QuickLink
        img={assets.studentCenter_logo}
        altText={"Student Center logo"}
        quickLinkText="Student Center"
      />
    </div>
  );
};

export default QuickLinks;
