import React from 'react'

const Form = ({ users, setUsers, isUpdate, setIsUpdate, updateId, name, setName, email, setEmail, phone, setPhone }) => {


    const handleSubmit = async (e) => {
        e.preventDefault();

        setEmail("")
        setName('')
        setPhone('')

        const newUser = {
            name,
            email,
            phone
        }

        if (name && email && phone) {

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                    body: JSON.stringify(newUser),
                });
                const newData = await response.json();


                setUsers([...users, newData])


            } catch (error) {
                console.error('Error creating user:', error);
            }

        }

    }



    const handleUpdate = async (id) => {
        console.log("update")
        setIsUpdate(!isUpdate)
        setEmail("")
        setName('')
        setPhone('')


        if (name && email && phone) {
            const updatedData = { name, email, phone };
            console.log(updatedData)

            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                    body: JSON.stringify(updatedData),
                });

                const data = await res.json();
                setUsers(users.map(user => (user.id === id ? data : user))); // Update user in list
                // setUsers(data)
            } catch (error) {
                console.error('Error:', error);
            }
        }


    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-1  justify-between mb-4">
                {/* Name Input */}
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="p-2 border border-gray-300 rounded w-full "
                />

                {/* Email Input */}
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="p-2 border border-gray-300 rounded w-full"
                />

                {/* Phone Input */}
                <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone"
                    className="p-2 border border-gray-300 rounded w-full"
                />

                {/* Submit Button */}
                {isUpdate ? <button onClick={() => handleUpdate(updateId)} className="p-2 bg-blue-500 text-white rounded">
                    Update
                </button> :
                    <button type="submit" className="p-2 bg-blue-500 text-white rounded">
                        Submit
                    </button>
                }
            </form>

        </div>
    )
}


export default Form
