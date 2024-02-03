
import { FaComment, FaCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Notification = () => {
  return (
    <>
      <div className="relative block h-auto border border-gray-200 py-3 ">
        <div className="flex justify-start items-start px-3">
          <p className="text-gray-400 ">{"@username"}</p>
          <p className="px-3">  Commented on your post </p>
          <FaComment className="text-green-500"/>
        </div>
        <Link className="text-green-500 px-3"> view comments</Link>
      </div>
    </>
  );
};

export default Notification;
