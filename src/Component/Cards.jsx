import React from "react";

const Cards = ({ cliname, comment }) => {
  return (
    <div className="
      mycard 
      flex 
      justify-center 
      items-center 
      px-4 
      sm:px-8 
      md:px-16 
      mt-10
    ">

      <div className="
        rounded-2xl
        w-full
        sm:w-[90%]
        md:w-[500px]
        lg:w-[600px]
        min-h-[220px]
        shadow-md
        hover:shadow-xl/20
        p-6
        sm:p-8
        flex
        flex-col
        justify-center
        items-center
        gap-6
        text-center
      ">

        {/* Comment */}
        <div className="comment">
          <p className="font-thin font-serif text-sm sm:text-base leading-6 sm:leading-7">
            {comment}
          </p>
        </div>

        {/* Client Name */}
        <div className="clname">
          <h1 className="
            text-xl 
            sm:text-2xl 
            md:text-3xl 
            font-extrabold 
            gradient-text
          ">
            {cliname}
          </h1>
        </div>

      </div>
    </div>
  );
};

export default Cards;