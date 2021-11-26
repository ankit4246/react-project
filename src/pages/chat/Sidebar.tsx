import Avatar from "react-avatar";

const ChatSidebar = () => {
  return (
    <div className="chat_sidebar">
      <div className="chat_profile">
        <div className="chat_profile_image">
          <Avatar name="Parash Ojha" size="50" round={true} />
        </div>
        <div className="chat_profile_content">
          <h2>Gravid Cristofer</h2>
          <span>Senior developer</span>
        </div>
      </div>
      <div className="chat_search">
        <input type="search" placeholder="Search Friends" />
      </div>
      <div className="chat_messages_list">
        <ul>
          <li>
            <div className="chat_image">
              <Avatar name="Parash Ojha" size="45" round={true} />
            </div>
            <div className="chat_info">
              <div className="chat-header">
                <h3>New User</h3>
                <span>10:34 AM</span>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dumm
              </p>
            </div>
          </li>
          <li>
            <div className="chat_image">
              <Avatar name="Bimal Gawali" size="45" round={true} />
            </div>
            <div className="chat_info">
              <div className="chat-header">
                <h3>New User</h3>
                <span>10:34 AM</span>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dumm
              </p>
            </div>
          </li>
          <li>
            <div className="chat_image">
              <Avatar name="Nimesh Poudel" size="45" round={true} />
            </div>
            <div className="chat_info">
              <div className="chat-header">
                <h3>New User</h3>
                <span>10:34 AM</span>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dumm
              </p>
            </div>
          </li>
          <li>
            <div className="chat_image">
              <Avatar name="Mahesh Katiwada" size="45" round={true} />
            </div>
            <div className="chat_info">
              <div className="chat-header">
                <h3>New User</h3>
                <span>10:34 AM</span>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dumm
              </p>
            </div>
          </li>
          <li>
            <div className="chat_image">
              <Avatar name="Anil Kumar Panta" size="45" round={true} />
            </div>
            <div className="chat_info">
              <div className="chat-header">
                <h3>New User</h3>
                <span>10:34 AM</span>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dumm
              </p>
            </div>
          </li>
          <li>
            <div className="chat_image">
              <Avatar name="Aayush Khadka" size="45" round={true} />
            </div>
            <div className="chat_info">
              <div className="chat-header">
                <h3>New User</h3>
                <span>10:34 AM</span>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dumm
              </p>
            </div>
          </li>
          <li>
            <div className="chat_image">
              <Avatar name="Santhosh Khadka" size="45" round={true} />
            </div>
            <div className="chat_info">
              <div className="chat-header">
                <h3>New User</h3>
                <span>10:34 AM</span>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dumm
              </p>
            </div>
          </li>
          <li>
            <div className="chat_image">
              <Avatar name="Bibik Khanal" size="45" round={true} />
            </div>
            <div className="chat_info">
              <div className="chat-header">
                <h3>New User</h3>
                <span>10:34 AM</span>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dumm
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChatSidebar;
