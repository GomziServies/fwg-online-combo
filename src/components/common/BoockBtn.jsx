import { motion } from "framer-motion";

const BoockBtn = ({ className, btnnamed, onClick }) => {
  return (
    <>
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className={className}
      >
        
        {btnnamed}
      </motion.button>
    </>
  );
};

export default BoockBtn;
