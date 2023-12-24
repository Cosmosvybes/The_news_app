import { useState } from "react";
import { FaBirthdayCake } from "react-icons/fa";

const Profile = () => {
  const [editform, setEditForm] = useState(false);
  const editForm = (
    <div className="flex flex-col">
      <form action="" className="px-5 py-1">
        <input
          type="text"
          placeholder="Fullname"
          className="w-full px-2 py-2 border border-sky-400"
        />
        <input
          type="text"
          placeholder="Bio"
          className="w-full px-2 py-2 border border-sky-400"
        />
        <input
          type="date"
          placeholder="DOB"
          className="w-full px-2 py-2 border border-sky-400"
        />
        <div className="flex justify-between px-5 py-2">
          <button
            onClick={() => setEditForm(!editform)}
            className="bg-red-500 rounded-md px-2 py-2 text-white font-bold"
          >
            cancel
          </button>
          <button
            onClick={() => setEditForm(!editform)}
            className="bg-sky-500 rounded-md px-2 py-2 text-white font-bold"
          >
            save
          </button>
        </div>
      </form>
    </div>
  );
  return (
    <>
      <div className="flex h-screen bg-sky-100 justify-around max-sm:flex-col py-24 max-sm:py-14 max-sm:px-0 max-sm:items-center max-sm:flex-start">
        <div className="flex flex-col justify-between">
          <input type="file" accept="*/*" id="profilePic" className="hidden" />
          <label htmlFor="profilePic">
            <div className="border border-gray-400 h-80 w-80 rounded-md">
              <img src="" className="w-full h-full" />
            </div>
          </label>
        </div>
        <div className="flex flex-col py-5">
          {/* <FaUser className="text-4xl font-bold text-sky-400 " /> */}
          <h1 className="text-4xl font-bold text-gray-700 text-left px-5">
            {"Adewale Ayomide"}
          </h1>

          {/* <FaRegAddressCard className="text-4xl font-bold text-sky-400 " /> */}

          <p className=" px-5"> Nationality - {"Nigeria"}</p>
          <div className="flex justify-start px-5 items-center ">
            <FaBirthdayCake className="" /> <p>{"Dec, 13, 1998"}</p>
          </div>
          <p className=" text-gray-700 px-5">
            Bio - {"Hey welcome to my page, i'm Alfrred chris ayo from nigeria"}
          </p>
          {editform ? (
            editForm
          ) : (
            <div className="flex justify-end px-6">
              <button
                onClick={() => setEditForm(!editform)}
                className="bg-sky-400 hover:bg-sky-500 px-6 py-2 m-1 font-extrabold text-white rounded-md"
              >
                {" "}
                Edit profile
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
