import React from 'react';
import { FaCog, FaBell, FaLock } from 'react-icons/fa';

const SettingsSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold flex items-center"><FaCog className="mr-2" /> Account Settings</h3>
      <div className="border rounded-lg p-4 flex items-center justify-between">
        <p className="font-medium flex items-center"><FaBell className="mr-2" /> Notification Preferences</p>
        <input type="checkbox" className="toggle toggle-primary" checked />
      </div>
      <div className="border rounded-lg p-4 flex items-center justify-between">
        <p className="font-medium flex items-center"><FaLock className="mr-2" /> Change Password</p>
        <button className="text-soft-gold hover:text-soft-gold/80">Edit</button>
      </div>
    </div>
  );
};

export default SettingsSection;