import React from 'react'
import User from './User'

const UsersList = ({ users, setUsers, setIsUpdate, setUpdateId, setName, setEmail, setPhone }) => {

    return (

        <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
                <thead className="bg-gray-400 border-2">
                    <tr>
                        <th className="px-4 py-2 text-left">Name</th>
                        <th className="px-4 py-2 text-left">Email</th>
                        <th className="px-4 py-2 text-left">Phone</th>
                        <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {users?.map((user, i) => (
                        <User key={i} user={user} users={users} setUsers={setUsers} setIsUpdate={setIsUpdate} setUpdateId={setUpdateId} setName={setName} setEmail={setEmail} setPhone={setPhone} />
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default UsersList
