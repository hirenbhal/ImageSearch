import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className=" max-w-sm rounded-lg overflow-hidden shadow-lg mb-4 object-cover">
      <img src={image.webformatURL} alt="" className="object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-red-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
        </ul>
      </div>
      <div className="px-6 pb-2">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
