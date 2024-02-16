
import { Link } from 'react-router-dom';

const UserList = ({user}) => {
  console.log(user);

  const { id, image, address,email, lastName, firstName, company } = user;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Link to={`/user/${id}`}>
        <div className="px-4 md:py-4 bg-white h-full rounded-xl shadow-md space-y-2 sm:flex sm:items-center sm:py-4 py-4 sm:space-y-0 sm:space-x-6">
            <img className="h-24 mx-auto rounded-full ring-4 ring-indigo-400 sm:mx-0 sm:flex-shrink-0" src={image} alt="User logo" />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">{firstName} {lastName}</p>
                    <p className="text-gray-500 font-medium">{email}</p>
                    <p className="text-gray-500 font-medium">{address.city}, {address.state}</p>
                    <p className="text-gray-500 font-medium">{company.name}</p>
                </div>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default UserList
