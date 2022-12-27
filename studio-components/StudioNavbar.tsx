import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5 text-white bg-slate-600">
        <Link href="/" className="flex items-center">
          <BiArrowBack className="w-5 h-5 mr-2 hover:bg-slate-900 hover:rounded-full " />
          Zur Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
