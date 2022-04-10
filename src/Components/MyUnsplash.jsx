import React from 'react';

function MyUnsplash({ dataValues }) {
  console.log(typeof data);
  return (
    <div>
      <h1>My UnSplash</h1>
      <div>
        {dataValues.map((val) => {
          return (
            <div>
              <h1>{val.attributes.title}</h1>
              <img src={val.attributes.img.data.attributes.formats.medium} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyUnsplash;
