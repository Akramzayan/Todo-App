import Modal from "./Modal";
import { useState } from "react";

const Addtask = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-[150px] h-[50px]  rounded-lg bg-[#6b3abe] ml-[950px] my-[-50px] cursor-pointer ">
        <h1 className="flex items-center justify-center pt-3 px-2 text-bold text-stone-100  text-lg " onClick={() => setShowModal(true)}>+ Add Task</h1>
        {showModal && <Modal setShowModal={setShowModal} />}
      
    </div>
  )
}

export default Addtask
