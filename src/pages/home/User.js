import React from 'react'
import { useNavigate } from 'react-router-dom';

const User = ({ user, users, setUsers, setIsUpdate, setUpdateId, setName, setEmail, setPhone }) => {


    const navigate = useNavigate()


    // Handle user delete
    const handleDelete = async (id) => {
        alert("Are you sure delete user ")
        try {
            await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: 'DELETE',
            });
            setUsers(users.filter(user => user.id !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };


    const handleEdit = async (id) => {
        const data = users[id - 1]
        console.log("Edit", data)
        setIsUpdate(true)
        setUpdateId(id)
        setName(data.name)
        setEmail(data.email)
        setPhone(data.phone)

    }

    return (

        <tr className="border-2 hover:bg-slate-200">
            <td className="px-4 py-2">{user.name}</td>
            <td className="px-4 py-2">{user.email}</td>
            <td className="px-4 py-2">{user.phone}</td>
            <td className="px-4 py-2 flex flex-wrap gap-2 justify-center">
                <button
                    onClick={() => handleEdit(user.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                >
                    Edit
                </button>
                <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                >
                    Delete
                </button>
                <button
                    onClick={() => navigate(`details/${user.id}`)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                    Detail
                </button>
            </td>
        </tr>

    )
}

export default User
