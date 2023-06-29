import React from 'react';

const CardDetails = () => {
  return (
    <div className="container mt-2">
      <h2 className='text-center'>Items Details Page</h2>
<div className='flex'>
      <div className="items_img">
  <img src="https://cdn.tgdd.vn/Files/2021/04/16/1343752/cam-nang-cho-corgi-nguon-goc-dac-diem-cach-nuoi-gia-ban-202206041207083467.jpg" alt="" />
</div>     <div className="bg-gray-100 rounded-lg p-4">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="py-3">
                <p><strong>Restaurant:</strong> name</p>
                <p><strong>Price:</strong> price</p>
                <p><strong>Dishes:</strong> addsa</p>
                <p><strong>Total:</strong> ₹</p>
              </td>
              <td className="py-3">
                <p><strong>Rating:</strong></p>
                <span className="inline-block py-1 px-2 bg-green-500 text-white rounded">5★</span>
                <p><strong>Order Review:</strong> <span>ok</span></p>
                <p><strong>Remove:</strong> <i>i</i></p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default CardDetails;
