import { motion } from 'framer-motion';

const ProfileHeader = () => {
  return (
    <section className="p-8 mt-12">
      <h1 className="text-4xl font-serif mb-4 text-dark-charcoal dark:text-soft-pale">VOILÀ - Luxury Perfumes</h1>
      {/* Quick Stats Preview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard title="12 Orders Made" />
        <StatsCard title="5 Wishlist Items" />
        <StatsCard title="Gold Member" />
      </div>
    </section>
  );
};

interface StatsCardProps {
  title: string;
}

const StatsCard = ({ title }: StatsCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}
      transition={{ duration: 0.2 }}
      className="p-4 rounded-lg bg-white/50 dark:bg-black/50 backdrop-filter backdrop-blur-lg border border-soft-border dark:border-dark-border"
    >
      <p className="text-lg text-dark-charcoal dark:text-soft-pale">{title}</p>
    </motion.div>
  );
};

export default ProfileHeader;