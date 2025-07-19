import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

interface AccountInfoSectionProps {
  isEditing: boolean;
  onSave: (data: { name: string; email: string; phone: string; address: string }) => void;
  onCancel: () => void;
  initialData?: { name: string; email: string; phone?: string; address?: string };
}

const AccountInfoSection: React.FC<AccountInfoSectionProps> = ({ isEditing, onSave, onCancel, initialData }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [email, setEmail] = useState(initialData?.email || '');
  const [phone, setPhone] = useState(initialData?.phone || '');
  const [address, setAddress] = useState(initialData?.address || '');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || '');
      setEmail(initialData.email || '');
      setPhone(initialData.phone || '');
      setAddress(initialData.address || '');
    }
  }, [initialData]);

  const handleSave = () => {
    onSave({ name, email, phone, address });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold flex items-center"><FaUser className="mr-2" /> Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600 dark:text-soft-pale/80">Name:</p>
          {isEditing ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-soft-border dark:border-dark-border rounded-md bg-white dark:bg-velvet-obsidian text-dark-charcoal dark:text-soft-pale"
            />
          ) : (
            <p className="font-medium text-dark-charcoal dark:text-soft-pale">{name}</p>
          )}
        </div>
        <div>
          <p className="text-gray-600 dark:text-soft-pale/80">Email:</p>
          {isEditing ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-soft-border dark:border-dark-border rounded-md bg-white dark:bg-velvet-obsidian text-dark-charcoal dark:text-soft-pale"
            />
          ) : (
            <p className="font-medium flex items-center text-dark-charcoal dark:text-soft-pale"><FaEnvelope className="mr-2" /> {email}</p>
          )}
        </div>
        <div>
          <p className="text-gray-600 dark:text-soft-pale/80">Phone:</p>
          {isEditing ? (
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border border-soft-border dark:border-dark-border rounded-md bg-white dark:bg-velvet-obsidian text-dark-charcoal dark:text-soft-pale"
            />
          ) : (
            <p className="font-medium flex items-center text-dark-charcoal dark:text-soft-pale"><FaPhone className="mr-2" /> {phone}</p>
          )}
        </div>
        <div>
          <p className="text-gray-600 dark:text-soft-pale/80">Address:</p>
          {isEditing ? (
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border border-soft-border dark:border-dark-border rounded-md bg-white dark:bg-velvet-obsidian text-dark-charcoal dark:text-soft-pale"
            />
          ) : (
            <p className="font-medium flex items-center text-dark-charcoal dark:text-soft-pale"><FaMapMarkerAlt className="mr-2" /> {address}</p>
          )}
        </div>
      </div>
      {isEditing && (
        <div className="flex justify-end mt-4 space-x-4">
          <button
            onClick={() => onSave({ name, email, phone, address })}
            className="px-6 py-2 bg-accent-gold text-dark-bg rounded-md hover:bg-yellow-600 dark:bg-imperialGold dark:text-whiteSnow transition-colors duration-200"
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className="px-6 py-2 bg-gray-300 text-dark-charcoal rounded-md hover:bg-gray-400 dark:bg-gray-700 dark:text-soft-pale dark:hover:bg-gray-600 transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountInfoSection;