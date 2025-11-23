import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className=" py-4 relative"
    >
      <div className="container mx-auto px-4 text-center text-sm text-cyan-200">
        <p>@ Amit Hasan Faysal 2025</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
