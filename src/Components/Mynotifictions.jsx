import { useState } from "react";
import Notification from "./Notification";

const Mynotifictions = () => {
  return (
    <>
      <div className="relative px-60 max-sm:px-0 py-2">
        {[1, 2, 3].map((post) => (
          <div className="flex flex-col-reverse  " key={post}>
            <Notification />
          </div>
        ))}
      </div>
    </>
  );
};

export default Mynotifictions;
