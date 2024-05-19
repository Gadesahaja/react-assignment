import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; 

const Favorite = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <div onClick={toggleLike} style={{ cursor: 'pointer' }}>
        {liked ? (
          // <FaHeart color="red" size="24" /> 
          <i class="bi bi-heart"></i>
        ) : (
          // <FaRegHeart color="grey" size="24" /> 
          <i class="bi bi-heart-fill"></i>
        )}
      </div>
    </div>
  );
};

export default Favorite;