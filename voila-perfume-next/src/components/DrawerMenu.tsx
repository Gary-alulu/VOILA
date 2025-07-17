// Initial content for DrawerMenu.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ isOpen, onClose, children }) => {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: { x: 0 },
        closed: { x: "-100%" },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 z-50"
    >
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1 },
          closed: { opacity: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></motion.div>
      <div className="relative w-full h-full bg-ivoryBeige dark:bg-deepCharcoal shadow-lg flex flex-col">
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="text-darkText dark:text-lightText text-2xl">
            <FaTimes />
          </button>
        </div>
        <div className="flex-grow overflow-y-auto">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default DrawerMenu;