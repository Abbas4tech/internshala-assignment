import React from "react";
interface StudentData {
  name: string;
  dateOfBirth: string;
  gender: string;
}
const Card = ({ name, dateOfBirth, gender }: StudentData) => {
  return (
    <>
      <div className="card w-full h-full bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>DOB : {new Date(dateOfBirth).toDateString()}</p>
          <p>Gender: {gender}</p>
          <div className="card-actions justify-end">
            <button className="btn">Know more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
