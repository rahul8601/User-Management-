import React, { useEffect, useState } from 'react'

import UsersList from './UsersList';
import Form from './Form';

const Home = () => {
    const [users, setUsers] = useState([])
    const [isUpdate, setIsUpdate] = useState(false)
    const [updateId, setUpdateId] = useState(null)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true)
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();

                setUsers(data);

            } catch (error) {
                console.error('Error fetching users:', error);
            }
            setIsLoading(false)
        };

        fetchUsers();
    }, []);


    return (
        <div className="container mx-auto p-4  h-[100vh] mb-10">
            <>
                <Form users={users} setUsers={setUsers} isUpdate={isUpdate} setIsUpdate={setIsUpdate} updateId={updateId} name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} />
                {isLoading ? <p className="text-center text-gray-900 justify-center mt-[200px]">Loading...</p> :
                    <UsersList users={users} setUsers={setUsers} setIsUpdate={setIsUpdate} setUpdateId={setUpdateId} setName={setName} setEmail={setEmail} setPhone={setPhone} />
                }
            </>
        </div>

    )
}

export default Home
