import React from 'react';

function TabProfileEdit() {
  return (
    <div id="tab-profile-edit">
      <div className="avatar">
        <div>
          <img alt="" src="https://i.pravatar.cc/500" />
        </div>
        <div>
          <h5>Your avatar</h5>
          <p>PNG or JPG no bigger then 1000px wide and tall.</p>
          <div>
            <button>load file</button>
            <button>delete file</button>
          </div>
        </div>
      </div>

      <div className="grid-two-cols">
        <div className="input-item">
          <label>First Name</label>
          <input
            className="input"
            type="text"
            id="firstName"
            placeholder="Enter First Name"
            required
            // onChange={}
          ></input>
        </div>
        <div className="input-item">
          <label>Last Name</label>
          <input
            className="input"
            type="text"
            id="lastName"
            placeholder="Enter Last Name"
            required
            // onChange={}
          ></input>
        </div>
        <div className="input-item">
          <label>Phone</label>
          <input
            className="input"
            type="tel"
            id="phone"
            placeholder="Enter phone"
            required
            // onChange={}
          ></input>
        </div>
        <div className="input-item">
          <label>Location</label>
          <input
            className="input"
            type="text"
            id="location"
            placeholder="Enter yout direcction"
            required
            // onChange={}
          ></input>
        </div>
      </div>
      <div>
        <div className="input-item">
          <label>Personal Info</label>
          <textarea
            className="input"
            type="text"
            id="personalDescription"
            placeholder="Enter a text descrtiption"
            rows="4"
            cols="50"
            // onChange={}
          ></textarea>
        </div>
      </div>

      <button>Update Profile</button>
    </div>
  );
}

export default TabProfileEdit;
