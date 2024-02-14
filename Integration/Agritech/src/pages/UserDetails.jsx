import React, { useState, useEffect } from 'react';
import AdminNavBar from '../component/AdminNavBar';

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:8080/auth/users');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteUser = async (userId) => {
        try {
            const response = await fetch(`http://localhost:8080/auth/users/${userId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete user');
            }
            setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <AdminNavBar />
            <div className="section" style={{ marginTop: "10vh" }}>
                <h1 className="section-header">User Management</h1>
                <table className="table user-table">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Username</th>
                            {/* <th>Role</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                {/* <td>{user.role}</td> */}
                                <td>
                                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default UserManagement;
