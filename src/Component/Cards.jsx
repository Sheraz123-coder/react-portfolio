import React from "react";

const Cards = ({ cliname, comment }) => {
  return (
    <>
      <div className="mycard flex justify-center items-center p-20 mt-10 gap-6">
        <div className="card rounded-2xl  w-96 h-60 shadow-md hover:shadow-xl/20 p-8 flex justify-center items-center flex-col  ">
          <div className="comment ">
            <p className="font-thin font-serif">{comment}</p>
          </div>
          <div className="clname flex justify-around items-center ">
            <h1 className="text-3xl font-extrabold gradient-text">
              {cliname}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
