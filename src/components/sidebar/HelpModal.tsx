import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Modal,
  Button,
  HStack,
  VStack,
  Divider,
  Textarea,
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import ModalCloseIcon from '../modals/ModalCloseIcon';
import {
  MailIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
  LinkedInIcon,
  FacebookIcon,
  WhatsAppIcon,
  InstagramIcon,
} from '@/assets/Icons';
import { CN_Link } from '../theme/CN_Link';
import { addFeedback, addFeedbackStudent } from '@/store/actions';
import { toast } from '@/helpers/Toast';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/reducers';
import { useAppSelector } from '@/store/ReduxHook';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [feedback, setFeedback] = useState('');
  const { addFeedbackLoading } =
  useAppSelector((s) => s.feedback) || {};
      const { accessToken, teacherId } = useAppSelector((s) => s.auth) || {};

  const onSubmitFeedback = () => {
    if(teacherId){
    dispatch(
      addFeedback({
        data: { feedback },
        callback: () => {
          toast({
            title: 'Feedback submitted successfully',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
          setFeedback('');
          onClose();
        },
      })
    );}
    else {
      dispatch(
        addFeedbackStudent({
          data: { feedback },
          callback: () => {
            toast({
              title: 'Feedback submitted successfully',
              status: 'success',
              duration: 3000,
              isClosable: true,
            });
            setFeedback('');
            onClose();
          },
        })
      )
    }
  };

  return (
    <Modal size='2xl' isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent py={4}>
        <ModalHeader color='darkText'>{'Help Center'}</ModalHeader>
        <ModalCloseIcon />
        <ModalBody px={0}>
          <Box px={6}>
            <Button mb='8' variant='solid' colorScheme='brand'>
              Contact Us
            </Button>
            <Flex className='justify-between'>
              <IconContainer
                icon={<WhatsAppIcon color='lightIcon' h={'28px'} w={'28px'} />}
                type='WhatsApp No.'
                value='6361629230'
                href='https://wa.me/916361629230?text=Hello%20Qtopia'
              />
              <IconContainer
                icon={<MailIcon color='lightIcon' h={'28px'} w={'28px'} />}
                type='Email'
                value='sachin@qtopia.in'
                href='mailto:sachin@qtopia.in'
              />
              <IconContainer
                icon={<PhoneIcon color='lightIcon' h={'28px'} w={'28px'} />}
                type='Phone No.'
                value='6361629230'
                href='tel:6361629230'
              />
            </Flex>

            <Flex my={8} align='center'>
              <Text fontSize={'small'} mr={12}>
                Follow us
              </Text>
              <HStack spacing={4}>
                <CN_Link
                  href={
                    'https://www.facebook.com/people/Qtopia/100089777914417/'
                  }
                >
                  <FacebookIcon color='lightIcon' h='28px' w='28px' />
                </CN_Link>
                <CN_Link href='https://www.instagram.com/qtopia_in/'>
                  <InstagramIcon color='lightIcon' h='28px' w='28px' />
                </CN_Link>
                <CN_Link href='https://www.linkedin.com/company/90401524'>
                  <LinkedInIcon color='lightIcon' h='28px' w='28px' />
                </CN_Link>
                <CN_Link href='https://twitter.com/qtopia_in'>
                  <TwitterIcon color='lightIcon' h='28px' w='28px' />
                </CN_Link>
                <CN_Link href={'https://www.youtube.com/@Qtopia_in'}>
                <YoutubeIcon color='lightIcon' h={'28px'} w={'28px'} />
                </CN_Link>
              </HStack>
            </Flex>
          </Box>
          <Divider />
          <Box px={6}>
            <Text fontSize={'small'} mt={4}>
              Please help us improve by blessing us with your valuable feedback
            </Text>

            <Textarea
              placeholder='Enter your feedback here'
              size='sm'
              rounded={'md'}
              my={4}
              h={40}
              resize='none'
              onChange={(e) => setFeedback(e.target.value)}
            />
          </Box>
          <Flex justify='flex-end' px={6}>
            <Button
              px={12}
              alignSelf={'flex-end'}
              colorScheme='brand'
              onClick={onSubmitFeedback}
              isLoading={addFeedbackLoading}
            >
              Submit Feedback
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default HelpModal;

interface IconContainerProps {
  icon: any;
  type: string;
  value: string;
  href: string;
}
const IconContainer: React.FC<IconContainerProps> = ({
  icon,
  type,
  value,
  href,
}) => {
  return (
    <CN_Link href={href}>
      <Flex className='items-start'>
        {icon}
        <Box mt={-2} className='ml-2'>
          <Text color='black' fontSize={'small'} fontWeight={600}>
            {type}
          </Text>
          <Text color='brand.500' fontWeight={400}>
            {value}
          </Text>
        </Box>
      </Flex>
    </CN_Link>
  );
};
