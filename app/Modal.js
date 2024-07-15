import { motion, AnimatePresence } from 'framer-motion';

function Modal({ isOpen, setIsOpen, children }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed left-0 top-0 w-full h-full bg-background-1/50 backdrop-blur-sm z-50 overflow-auto flex items-center justify-center"
                >
                    <div
                        className="absolute top-0 left-0 w-full h-full cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                    
                    <motion.div animate={{ translateY: ['25%', 0] }}>
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Modal;
