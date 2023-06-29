  import React, { useState } from "react";
  import CardsData from "./CardsData";
  import { useDispatch } from "react-redux";
  import cartSlice from "../redux/cartSlice";

  const Cards = () => {
    const [data] = useState(CardsData);
    const dispatch = useDispatch();

    return (
      <div>
        <h1 className="text-center bg-slate-100">Add to Cart Project</h1>
        <div>
          <div className="bg-red-100 rounded shadow p-4 div grid grid-cols-3 gap-4">
            {data.map((item) => (
              <div key={item.id} className="bg-red-100 rounded shadow p-4">
                <img
                  src={item.imgdata}
                  alt={item.rname}
                  className="w-48 h-48 object-cover object-center"
                />
                <div className="flex items-center justify-between mt-4">
                  <h3 className="text-gray-700 font-medium">{item.rname}</h3>
                  <span className="text-gray-600">Price: ₹ {item.price}</span>
                </div>
                <button
                  className="bg-blue-500 text-white py-2 px-4 inline-block mt-4 hover:bg-blue-700"
                  onClick={() => dispatch(cartSlice.actions.addCart(item))}

                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Cards;
