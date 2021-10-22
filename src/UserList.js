import React from "react";
function UserList({ setAlbums, setUsers, users, setCurrentUser }) {
  
const abortController = new AbortController;
  return (
    <ul className="user-list">
      {users.map((user) =>{   
   const handleClick = async () => { 
    setCurrentUser(user)
   const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${user.id}`,
      { signal: abortController.signal }
    );
    const albums = await response.json()
    setAlbums(albums)
  };
       return (
        <li key={user.id}>
          <button type="button" 
            onClick={handleClick}
            >
            {user.name}
          </button>
        </li>
      )})}
    </ul>
  );
}

export default UserList;