import { motion } from 'framer-motion';
import { signOut } from 'next-auth/react';

interface ProfileNavigationProps {
  onNavigate: (section: string) => void;
}

const ProfileNavigation = ({ onNavigate }: ProfileNavigationProps) => {
  const navItems = ['Account Info', 'Orders & Tracking', 'Wishlist', 'Addresses', 'Payment Methods', 'Settings', 'Logout'];

  return (
    <nav className="mb-8">
      <ul className="flex flex-wrap gap-4">
        {navItems.map((item) => (
          <motion.li 
            key={item}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.button 
              className="px-4 py-2 rounded-md bg-white text-dark-charcoal hover:bg-ivory-white dark:bg-velvet-obsidian dark:text-soft-pale dark:hover:bg-gray-800"
              whileHover={{
                backgroundColor: '#F3E9E1',
                color: '#1B1B1B',
                transition: { duration: 0.2 }
              }}
              onClick={() => {
                if (item === 'Logout') {
                  signOut({ callbackUrl: '/login' });
                } else {
                  onNavigate(item);
                }
              }}
            >
              {item}
            </motion.button>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default ProfileNavigation;