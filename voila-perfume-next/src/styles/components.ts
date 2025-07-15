export const buttonStyles = {
  primary: {
    base: "w-full py-3 px-6 rounded-full text-white font-semibold text-lg shadow-lg transition-all duration-300 ease-in-out",
    gradient: "bg-gradient-to-r from-muted-gold to-blush-pink hover:from-blush-pink hover:to-muted-gold",
    hover: "hover:scale-102 hover:shadow-pink-glow",
    tap: "active:scale-98",
  },
  secondary: {
    base: "w-full py-3 px-6 rounded-full text-charcoal-black border border-charcoal-black font-semibold text-lg shadow-lg transition-all duration-300 ease-in-out",
    hover: "hover:bg-charcoal-black hover:text-white hover:scale-102 hover:shadow-charcoal-glow",
    tap: "active:scale-98",
  },
};

export const cardStyles = {
  base: "bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-10 lg:p-12",
  hover: "hover:shadow-xl hover:scale-102 transition-all duration-300 ease-in-out",
};