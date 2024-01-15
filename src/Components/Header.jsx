import React, { useState } from "react";
import Modal from "react-modal";

const Header = () => {
  const [tasks, settasks] = useState([
    {
      id:1,
      text: "No Todos",
    },
  ]);
  const [text, setText] = useState("");
  const [modalIsOpen, setModal] = useState(false);

  const customStyles = {
    content: {
      top: "32%",
      left: "50%",
      right: "50%",
      bottom: "40%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const addItem = (text) => {
    let newTask = [
      {
        id:Date.now(),
        text
      },
    ];
    if (text) settasks([...newTask,...tasks]);
    setText("");
    setModal(false);
  };

  return (
    <>
      <div className="flex justify-around m-5">
        <button
          className="bg-[#646ff0] text-white py-2 px-4 rounded-md h-fit"
          onClick={openModal}
        >
          ADD TASK
        </button>

        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onRequestClose={closeModal}
          ariaHideApp={false}
        >

          <div>

          <form action="#">
            
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Enter text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />

              <div className="flex">
                <button type="submit" onClick={() => addItem(text)}>
                  Submit
                </button>
                <button onClick={closeModal}>Cancel</button>
              </div>
            </div>
          </form>


          </div>
        </Modal>

        <select
          name=""
          id=""
          className="bg-[#cccdde] py-2 px-4 rounded-md h-fit font-medium outline-none text-lg"
        >
          <option value="ALL">
            All
          </option>
          <option value="COMPLETE">
            COMPLETE
          </option>
          <option value="INCOMPLETE">
            INCOMPLETE
          </option>
        </select>
      </div>

      <div>
        {tasks.map((task) => {
          return (
            <div key={task.id} className="bg-slate-300 m-2 p-2 w-[700px] mx-auto">
              {task.text}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Header;
