import React, { useState } from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const [extented, setExtented] = useState(false);
  const { recentPromts } = useSelector((state) => state.gemini);
  return (
    <div className="sidebar">
      <div className="top">
        <i
          className="menu fa-solid fa-bars"
          onClick={() => setExtented((prev) => !prev)}
        />
        <div className="new-chat">
          <i className="fa-solid fa-plus" />
          {extented && <p>New chat</p>}
        </div>
        {extented && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {recentPromts?.map((propmt, key) => (
              <div key={key} className="recent-entry">
                <i class="fa-regular fa-message" />
                <p className="typing-effect">{propmt}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <i className="fa-regular fa-circle-question" />
          {extented && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <i className="fa-solid fa-clock-rotate-left" />
          {extented && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <i className="fa-solid fa-gear" />
          {extented && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
