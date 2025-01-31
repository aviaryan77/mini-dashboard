import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Image as C_Image,
  Spinner,
  VStack,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '@/store/ReduxHook';

interface DynamicLogoProps {
  isSidebarOpen?: boolean;
}

const DynamicLogo: React.FC<DynamicLogoProps> = ({ isSidebarOpen }) => {
  const dispatch = useAppDispatch();
  const { editOrgLoading, organisation } = useAppSelector((s) => s.auth);

  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!organisation?.logo) return;
    // Determine the aspect ratio of the logo image
    const img = new Image();
    img.src = organisation?.logo ?? '';
    img.onload = () => {
      let ar = img.width / img.height; // Calculate aspect ratio
      setAspectRatio(ar);
      setLoading(false);
    };
  }, [organisation?.logo, editOrgLoading]);

  return (
    <Box key={organisation?.logo} maxW='md' borderRadius='lg' mx='auto'>
      <VStack>
        {(aspectRatio ?? 0) < 1.4 ? (
          <Avatar size='sm' src={organisation?.logo} />
        ) : isSidebarOpen ? (
          <Box
            key={organisation?.logo}
            as='figure'
            height='50px' // Adjust height for rectangular logos
            width={aspectRatio ? `${50 * aspectRatio}px` : 'auto'}
            overflow='hidden'
            mx='auto'
          >
            <C_Image src={organisation?.logo} alt='logo' objectFit='cover' />
          </Box>
        ) : (
          <Box
            key={organisation?.logo}
            as='figure'
            height='25px' // Adjust height for rectangular logos
            width={aspectRatio ? `${25 * aspectRatio}px` : 'auto'}
            mx='auto'
          >
            <C_Image src={organisation?.logo} alt='logo' objectFit='cover' />
          </Box>
        )}

        {isSidebarOpen ? (
          <Box
            noOfLines={1}
            textAlign='center'
            fontSize={(organisation?.name?.length ?? 0) > 12 ? 'xs' : 'sm'}
          >
            {organisation?.name}
          </Box>
        ) : null}
      </VStack>
    </Box>
  );
};

export default DynamicLogo;
