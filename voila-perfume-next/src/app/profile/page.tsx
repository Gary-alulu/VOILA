'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useSession, getSession } from 'next-auth/react';
import ProfileHeader from '@/components/ProfileHeader';
import UserOverviewCard from '@/components/UserOverviewCard';
import ProfileNavigation from '@/components/ProfileNavigation';
import AccountInfoSection from '@/components/AccountInfoSection';
import OrdersSection from '@/components/OrdersSection';
import WishlistSection from '@/components/WishlistSection';
import AddressesSection from '@/components/AddressesSection';
import PaymentMethodsSection from '@/components/PaymentMethodsSection';
import SettingsSection from '@/components/SettingsSection';


const ProfilePage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [activeSection, setActiveSection] = useState<string>('Account Info');
  const [isEditingAccountInfo, setIsEditingAccountInfo] = useState(false);
  const [userData, setUserData] = useState<{ name: string; email: string; phone?: string; address?: string; isProfileComplete?: boolean } | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const session = await getSession();
      if (!session) {
        router.push('/login');
        return;
      }
      // In a real application, you would fetch the full user profile from your API
      // For now, we'll use session data and simulate profile completion status
      setUserData({
        name: session.user?.name || '',
        email: session.user?.email || '',
        phone: (session.user as any)?.phone || '', // Assuming phone is part of session.user
        address: (session.user as any)?.address || '', // Assuming address is part of session.user
        isProfileComplete: (session.user as any)?.isProfileComplete || false, // Assuming isProfileComplete is part of session.user
      });

      if (!(session.user as any)?.isProfileComplete) {
        setIsEditingAccountInfo(true);
        setActiveSection('Account Info');
      }
    };
    fetchUserData();
  }, [router, session]);

  if (status === 'loading' || !userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory-white dark:bg-dark-charcoal">
        <p className="text-dark-charcoal dark:text-soft-pale text-xl">Loading...</p>
      </div>
    );
  }

  const handleEditProfile = () => {
    setIsEditingAccountInfo(true);
    setActiveSection('Account Info');
  };

  const handleSaveAccountInfo = async (data: { name: string; email: string; phone: string; address: string }) => {
    console.log('Saving account info:', data);
    // In a real application, send this data to your API to update the user profile
    // and set isProfileComplete to true
    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, isProfileComplete: true }),
      });
      if (response.ok) {
        setUserData(prev => ({ ...prev!, ...data, isProfileComplete: true }));
        setIsEditingAccountInfo(false);
        // Optionally, refresh session to update client-side session data
        // signIn('credentials', { ...session?.user, ...data, isProfileComplete: true });
      } else {
        console.error('Failed to save profile:', await response.text());
      }
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  /**
   * Renders the content of the active profile section based on the `activeSection` state.
   * @returns {JSX.Element}
   */
  const renderContent = () => {
    switch (activeSection) {
      case 'Account Info':
        return <AccountInfoSection isEditing={isEditingAccountInfo} onSave={handleSaveAccountInfo} onCancel={() => setIsEditingAccountInfo(false)} initialData={userData} />;
      case 'Orders & Tracking':
        return <OrdersSection />;
      case 'Wishlist':
        return <WishlistSection />;
      case 'Addresses':
        return <AddressesSection />;
      case 'Payment Methods':
        return <PaymentMethodsSection />;
      case 'Settings':
        return <SettingsSection />;
      case 'Logout':
        return <p>Logging out...</p>;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-ivory-white dark:bg-dark-charcoal text-dark-charcoal dark:text-soft-pale"
    >
      <ProfileHeader />

      <div className="flex flex-col md:flex-row p-8 gap-8 pl-12 md:pl-16">
          <UserOverviewCard userName={userData.name} userEmail={userData.email} onEditProfile={() => {
            setIsEditingAccountInfo(true);
            setActiveSection('account-info');
          }} />

        <main className="w-full md:w-3/4">
          <ProfileNavigation onNavigate={setActiveSection} />

          {/* Dynamic Content Area */}
          <div className="p-6 rounded-lg bg-white dark:bg-velvet-obsidian shadow-lg border border-soft-border dark:border-dark-border">
            <h2 className="text-2xl font-semibold mb-4">{activeSection}</h2>
            {renderContent()}
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default ProfilePage;