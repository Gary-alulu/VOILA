import { motion } from 'framer-motion';

/**
 * @typedef {object} UserOverviewCardProps
 * @property {string} userName - The name of the user to display.
 * @property {string} userEmail - The email of the user to display.
 * @property {() => void} [onEditProfile] - Optional callback function to be executed when the 'Edit Profile' button is clicked.
 */
interface UserOverviewCardProps {
  userName: string;
  userEmail: string;
  onEditProfile?: () => void;
}

const UserOverviewCard = ({ userName, userEmail, onEditProfile = () => {} }: UserOverviewCardProps) => {
  return (
    <aside className="w-full md:w-1/4 p-6 rounded-lg bg-white dark:bg-velvet-obsidian shadow-lg border border-soft-border dark:border-dark-border">
      <div className="flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(210, 171, 128, 0.6)' }}
          transition={{ duration: 0.3 }}
          className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center mb-4"
        >
          {/* User Avatar Placeholder */}
          <span className="text-xl font-bold">{userName.charAt(0).toUpperCase()}{userEmail.charAt(0).toUpperCase()}</span>
        </motion.div>
        <h2 className="text-xl font-semibold">{userName}</h2>
        <p className="text-gray-600 dark:text-gray-400">{userEmail}</p>
        <motion.button
          whileHover={{
            backgroundColor: '#F3E9E1',
            borderColor: '#D2AB80',
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
          className="mt-4 px-4 py-2 bg-soft-gold text-charcoalBlack border border-soft-gold rounded-md hover:bg-hoverAccentLight hover:text-white dark:bg-velvet-obsidian dark:text-soft-pale dark:border-velvet-obsidian dark:hover:bg-hoverAccentDark dark:hover:text-velvetObsidian"
          onClick={onEditProfile}
        >
          Edit Profile
        </motion.button>
      </div>
    </aside>
  );
};

export default UserOverviewCard;