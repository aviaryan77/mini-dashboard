import { createStandaloneToast } from '@chakra-ui/react';
const { ToastContainer, toast } = createStandaloneToast();

const showToast = ({
  title, 
  status='info',
  description,
  duration = 3000,
  isClosable = true,
  position = 'bottom',
}: {
  title?: string;
  description?: string;
  status?: 'info' | 'warning' | 'success' | 'error';
  duration?: number;
  isClosable?: boolean;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'|'bottom';
}) => {
  toast({
    title,
    status,
    position,
    variant: 'subtle',
    duration,
    isClosable,
    description,
  });
};

export { ToastContainer, showToast as toast };
