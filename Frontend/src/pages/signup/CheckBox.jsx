import React from 'react'

const CheckBox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="form-control flex flex-row gap-2">
      <label
        className={`label cursor-pointer flex gap-2 ${
          selectedGender === "male" ? "selected" : " "
        } `}
      >
        <span className="label-text">Male</span>
        <input
          type="checkbox"
          checked={selectedGender === "male"}
          onChange={() => onCheckboxChange("male")}
          className="checkbox checkbox-primary"
        />
      </label>
      <label
        className={`label cursor-pointer flex gap-2 ${
          selectedGender === "female" ? "selected" : " "
        } `}
      >
        <span className="label-text">Female</span>
        <input
          type="checkbox"
          checked={selectedGender === "female"}
          onChange={() => onCheckboxChange("female")}
          className="checkbox checkbox-secondary"
        />
      </label>
    </div>
  );
};

export default CheckBox