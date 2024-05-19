import React, { useEffect, useState } from 'react';
import { fetchUsers } from './services/userService';
import { getAvatarUrl } from './utils/avatarUtils';
import UserProfile from './components/UserProfile';
import './App.css';
import EditUser from './EditUser';
import LoadingIndicator from './loadingindicator';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    setTimeout(()=>{
    const getUsers = async () => {
      const userData = await fetchUsers();
      const usersWithAvatars = userData.map(user => ({
        ...user,
        avatar: getAvatarUrl(user.username)
      }));
      
      setUsers(usersWithAvatars);
      setLoading(false)
  
    };

    getUsers();
  },1500)

  }, []);

  const handleFavoriteUser = (userId, isFavorite) => {
    console.log(`User ${userId} favorite status: ${isFavorite}`);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleSaveUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setIsModalOpen(false);
  };

  const handleDelete=(userToDelete)=>{
    setUsers(users.filter(user=>user.id !== userToDelete.id));
  }
  
  if(loading){
    return <div className='loading-container'><LoadingIndicator/></div> 
  }
  return (
    <div className="app" >
      <h3 >User Profiles</h3>
      <div className="user-profiles">
        {users.map(user => (
          <UserProfile key={user.id} user={user} onEdit={handleEditUser} onDelete={handleDelete} onFavorite={handleFavoriteUser}/>
        ))}
      </div>
      <EditUser
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      user={selectedUser}
      onSave={handleSaveUser}

    />
    </div>
  );
};

export default App;



// import React, { useEffect, useState } from 'react';
// import { fetchUsers } from './services/userService';
// import { getAvatarUrl } from './utils/avatarUtils';
// import UserProfile from './components/UserProfile';
// import './App.css';
// import EditUser from './EditUser';
// import LoadingIndicator from './loadingindicator'; // Ensure this import is correct

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [loading, setLoading] = useState(true); // Initialize loading state

//   useEffect(() => {
//     const getUsers = async () => {
//       setLoading(true); // Show loading indicator
//       const userData = await fetchUsers();
//       const usersWithAvatars = userData.map(user => ({
//         ...user,
//         avatar: getAvatarUrl(user.username)
//       }));
//       setUsers(usersWithAvatars);
//       setLoading(false); // Hide loading indicator
//     };

//     getUsers();
//   }, []);

//   const handleFavoriteUser = (userId, isFavorite) => {
//     console.log(`User ${userId} favorite status: ${isFavorite}`);
//   };

//   const handleEditUser = (user) => {
//     setSelectedUser(user);
//     setIsModalOpen(true);
//   };

//   const handleSaveUser = (updatedUser) => {
//     setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
//     setIsModalOpen(false);
//   };

//   const handleDelete = (userToDelete) => {
//     setUsers(users.filter(user => user.id !== userToDelete.id));
//   };

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <LoadingIndicator />
//       </div>
//     );
//   }

//   return (
//     <div className="app">
//       <h3>User Profiles</h3>
//       <div className="user-profiles">
//         {users.map(user => (
//           <UserProfile
//             key={user.id}
//             user={user}
//             onEdit={handleEditUser}
//             onDelete={handleDelete}
//             onFavorite={handleFavoriteUser}
//           />
//         ))}
//       </div>
//       <EditUser
//         isOpen={isModalOpen}
//         onRequestClose={() => setIsModalOpen(false)}
//         user={selectedUser}
//         onSave={handleSaveUser}
//       />
//     </div>
//   );
// };

// export default App;
