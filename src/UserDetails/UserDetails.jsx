
import { Link, useLoaderData } from 'react-router-dom';

const UserDetails = () => {
  const userDetails = useLoaderData()
  console.log(userDetails)
  const { image, address, email, lastName, firstName, company } = userDetails;

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="mx-auto p-8 bg-white rounded-xl shadow-md space-y-2">
      <img className="h-32 mx-auto rounded-full ring-4 ring-indigo-400" src={image} alt="User logo" />
        <div className="text-center space-y-2">
            <div className="space-y-3">
              <p className="text-3xl text-black font-semibold">{firstName} {lastName}</p>
              <p className="text-gray-500 font-medium text-xl">{email}</p>
              <p className="text-gray-500 font-medium text-xl">{address.address}, {address.city}, {address.state}</p>
              <p className="text-gray-500 font-medium text-xl">{company.name}</p>
            </div>
            <button className="px-5 py-2 border border-purple-200 rounded-full text-xl text-indigo-400 font-semibold"><Link to={"/"}>Back</Link></button>
        </div>
      </div>
    </div>
  )
}

export default UserDetails
