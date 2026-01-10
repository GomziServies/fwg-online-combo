import { motion } from "framer-motion";

const BoockBtn = ({ className, btnnamed }) => {
  return (
    <>
      <motion.button
        onClick={() => console.log("clicked!!!!!!")}
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
