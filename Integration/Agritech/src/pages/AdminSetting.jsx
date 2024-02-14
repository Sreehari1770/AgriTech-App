import React, { useState } from 'react';
import AdminNavBar from '../component/AdminNavBar';

function AdminSettings() {
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('en');
    const [notifications, setNotifications] = useState(true);
    const [autoSave, setAutoSave] = useState(false);

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
        // Save theme to backend
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        // Save language to backend
    };

    const handleNotificationsChange = () => {
        setNotifications(!notifications);
        // Save notifications preference to backend
    };

    const handleAutoSaveChange = () => {
        setAutoSave(!autoSave);
        // Save autosave preference to backend
    };

    return (
        <div>
            <AdminNavBar/>
            <h1 style={{marginTop:"10vh"}}>Admin Settings</h1>
            <form>
                <div>
                    <label htmlFor="theme">Select Theme:</label>
                    <select name="theme" id="theme" value={theme} onChange={handleThemeChange}>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="language">Select Language:</label>
                    <select name="language" id="language" value={language} onChange={handleLanguageChange}>
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        {/* Add more language options */}
                    </select>
                </div>
                <div>
                    <input type="checkbox" id="notifications" checked={notifications} onChange={handleNotificationsChange} />
                    <label htmlFor="notifications">Receive Notifications</label>
                </div>
                <div>
                    <input type="checkbox" id="autoSave" checked={autoSave} onChange={handleAutoSaveChange} />
                    <label htmlFor="autoSave">Auto Save</label>
                </div>
                {/* Add more settings/options here */}
            </form>
        </div>
    );
}

export default AdminSettings;
