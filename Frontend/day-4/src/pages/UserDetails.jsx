import React, { useState } from 'react';
import AdminNavBar from '../component/AdminNavBar';
const initialUsers = [
    { id: 1, username: 'admin', role: 'admin' },
    { id: 2, username: 'user1', role: 'user' },
    { id: 3, username: 'user2', role: 'user' },
];
const UserManagement = () => {
    const [users, setUsers] = useState(initialUsers);
    const deleteUser = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    };
    return (
        <>
        <AdminNavBar/>
        <div className="section">
            <h1 className="section-header">User Management</h1>
            <table className="table user-table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.role}</td>
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
