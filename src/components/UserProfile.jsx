import React, { useState } from "react";

const UserProfile = ({ user, onEdit, onDelete,onFavorite }) => {
  const[isFavorite,setIsfavorite]=useState(false)
  const handleEditClick = () => {
    onEdit(user);
  };
  
  const handleDeleteClick=()=>{
    onDelete(user)
  }

  const handleFavoriteClick=()=>{
    setIsfavorite(!isFavorite)
    onFavorite(user.id, !isFavorite)
  }
  return (
    <div className="user-profile">
      <img src={user.avatar} alt={`${user.name}'s avatar`} />
      <h2>{user.name}</h2>
      <p>
        <i class="bi bi-envelope"></i>: {user.email}
      </p>
      <p>
        <i class="bi bi-telephone"></i>: {user.phone}
      </p>
      <p>
        <i class="bi bi-globe"></i>:{" "}
        <a href={`http://${user.website}`}>{user.website}</a>
      </p>
      <div className="d-flex justify-content-center mt-3">
      <button className={isFavorite ? "favorite-btn active" : "favorite-btn"} onClick={handleFavoriteClick}>
          {isFavorite ? <i class="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>}
        </button>
        <button className="edit-btn" onClick={handleEditClick}>
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="delete-btn" onClick={handleDeleteClick} >
          <i className="bi bi-trash3"></i>
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
