// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import baseUrl from '../../apiConfig';
// import AddUser from '../AddUser/AddUser';


import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../../apiConfig";
import AddUser from "../AddUser/AddUser";
import UserList from './UserList';



const LoadUsers = () => {
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
      fetchUsers();
  }, []);
  const fetchUsers = async () => {
      try {
          const response = await axios.get(`${baseUrl}/users`);
          setUsers(response.data.users);
      } catch (error) {
          console.error("Error fetching users:", error);
      }
  };
  
  const handleSearch = event => {
      setSearchTerm(event.target.value);
  };

  const handleSortChange = event => {
      setSortOption(event.target.value);
    };
  
    const sortedUsers = [...users].sort((a, b) => {
      if (sortOption === 'name') {
        return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`);
      } else if (sortOption === 'email') {
        return a.email.localeCompare(b.email);
      } else if (sortOption === 'company') {
        return a.company.name.localeCompare(b.company.name);
      } else {
        return 0;
      }
    });

    const filteredUsers = sortedUsers.filter(user =>
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
    );


  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center md:justify-center sm:justify-between gap-3">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search by User name"
                className="input border rounded-md mb-2 p-3 sm:mb-0 md:w-auto w-full"
            />
            <select value={sortOption} onChange={handleSortChange}>
                <option value="">Sort by...</option>
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="company">Company Name</option>
            </select>
        </div>
        
        <div className="grid md:grid-cols-[3fr_1fr] gap-4">
            <div>
                <h1 className="text-2xl font-bold mb-4">User List</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {filteredUsers.map((user) => (
                        <UserList 
                            key={user.id}
                            user={user}
                        />
                    ))}
                </div>
            </div>
            <div>
                <AddUser setUsers={setUsers} users={users}/>
            </div>
        </div>
      </div>
    </>
  )
}

export default LoadUsers
