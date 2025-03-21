"use client";


import { AnimatePresence , motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const PageTransition = ({children}) => {
    // eslint-disable-next-line react/jsx-no-undef
    const pathname = usePathname();
    return <AnimatePresence>
        <div key={pathname}>
            <motion.div 
                initial={{opacity: 1 }} 
                animate={{
                    opacity: 0, 
                    transition: {delay: 2, duration: 2, ease: "easeInOut"}
                }}
                className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            />
            {children}
        </div>
    </AnimatePresence>
}

export default PageTransition;