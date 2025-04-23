
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ x: '-100%', opacity:0 }}
      animate={{ x: 0, opacity: 20 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className=' py-4 relative'
    >
      <div className='container mx-auto px-4 text-center text-2xl text-pink-600'>
        <p>&copy; 2024 Amit Hasan Faysal. All rights reserved</p>
      </div>
    </motion.footer>
  )
}

export default Footer