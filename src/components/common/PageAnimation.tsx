import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const isRefresh = sessionStorage.getItem('isRefresh');

  useEffect(() => {
    sessionStorage.setItem('isRefresh', 'true');
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="box" // 라우트 변경 시 애니메이션 트리거
        initial={isRefresh === 'true' ? false : { x: '100%' }} // 새로고침 시 애니메이션 비활성화
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
