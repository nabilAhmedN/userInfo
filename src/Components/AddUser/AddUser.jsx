
import axios from 'axios';
import useForm from '../../hooks/useform';
import baseUrl from '../../apiConfig';

const AddUser = ({ setUsers, users }) => {
  const { formData, handleChange, reset } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
    name: "",
    image: ""
  });

  const addUser = async () => {
      const payload = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          address: {
              city: formData.city,
              state: formData.state,  
          },
          company: {
              name: formData.name,
          },
          image: formData.image
      };

      try {
          const response = await axios.post(
              `${baseUrl}/users/add`,
              payload
          );
          console.log("Response data:", response.data);

          if (response.data){
              handleChange("firstName","")
              handleChange("lastName","")
              handleChange("email","")
              handleChange("city","")
              handleChange("state","")
              handleChange("name","")
              handleChange("image","")
              setUsers([...users, response.data]);
          }
          
      } catch (error) {
          console.error("Error adding user:", error);
      }
  };
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Add New User</h2>
        <div className="flex flex-col mr-[23px] ">

          <input 
              className="border rounded-md mb-2 p-3"
              placeholder='firstName'
              name="firstName" 
              onChange={(value) => handleChange("firstName", value.target.value)}
              value={formData.firstName} 
          />

          <input 
              className="border rounded-md mb-2 p-3"
              placeholder='lastName'
              name="lastName" 
              onChange={(value) => handleChange("lastName", value.target.value)}
              value={formData.lastName} 
          />  

          <input
              className="border rounded-md mb-2 p-3"
              placeholder='email'
              name="email" 
              onChange={(value) => handleChange("email", value.target.value)}
              value={formData.email} 
          />

          <input
              className="border rounded-md mb-2 p-3"
              placeholder='city'
              name="city" 
              onChange={(value) => handleChange("city", value.target.value)}
              value={formData.city} 
          />

          <input
              className="border rounded-md mb-2 p-3"
              placeholder='state'
              name="state" 
              onChange={(value) => handleChange("state", value.target.value)}
              value={formData.state} 
          />

          <input
              className="border rounded-md mb-2 p-3"
              placeholder='company name'
              name="name" 
              onChange={(value) => handleChange("name", value.target.value)}
              value={formData.name} 
          />

          <input
              className="border rounded-md mb-2 p-3"
              placeholder='image'
              name="image" 
              onChange={(value) => handleChange("image", value.target.value)}
              value={formData.image} 
          />

          <button
          onClick={addUser}
          className="border bg-indigo-400 text-white text-lg p-1 rounded-lg items-center"
          >
          Add User
          </button>
        </div>
      </div>
  )
}

export default AddUser
