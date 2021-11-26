import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import Avatar from "react-avatar";

const Main = () => {
  return (
    <div className="main_content">
      <div className="main_head">
        <h1>Dianne Vanhorn</h1>
      </div>
      <div className="messages_list">
        <ul>
          <li>
            <div className="message_image">
              <Avatar name="Parash Ojha" size="45" round={true} />
            </div>
            <div className="message_content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dumm
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dumm
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="chat_box">
        <form>
          <input placeholder="Write something..." />
          <FaPaperPlane />
        </form>
      </div>
    </div>
  );
};

export default Main;
