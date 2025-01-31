'use client';
import React, { useState } from 'react';

import {
  Box,
  Text,
  Flex,
  Input,
  VStack,
  Button,
  Center,
  HStack,
  Circle,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';

import * as Yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';

// STATE MANAGEMENT
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/store/actions';

// TYPES
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useAppSelector } from '@/store/ReduxHook';

interface EmailFormProps {
  visible: boolean;
  setIsOtpVisible: (value: boolean) => void;
}

const EmailForm: React.FC<EmailFormProps> = ({ visible, setIsOtpVisible }) => {
  if (!visible) return null;
  const dispatch = useDispatch();
  const { loginLoading } = useAppSelector((s) => s.auth) || {};
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('ⓘ Enter Correct email address')
      .required('ⓘ Email is required'),
    password: Yup.string()
      .required('ⓘ Password is required')
      .min(6, 'ⓘ Password must be at least 6 characters'),
  });

  const onEmailSubmit = (values: { password: string; email: string }) => {
    dispatch(
      login({
        data: {
          password: values.password,
          email: values.email,
        },
        callback: (cb) => {
          setIsOtpVisible(true);
        },
      })
    );
  };

  return (
    <Center
      p={8}
      flex={1}
      w='100%'
      h='100vh'
      bg='brand.100'
      alignItems='center'
    >
      <HStack
        h='80%'
        bg='white'
        w={['1000%', '100%', '80%', '80%']}
        maxW='1000px'
        rounded={12}
        overflow='hidden'
        flexDir={['column', 'column', 'row', 'row']}
      >
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={onEmailSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isValid,
          }) => (
            <VStack
              p={8}
              h='100%'
              as={Form}
              align='flex-start'
              justify='space-between'
              w={['100%', '100%', '50%', '50%']}
            >
              <VStack w='100%' align='start'>
                <Box mb={8}>
                  <Text fontSize='2xl' color='#5E6163'>
                    Sign in to your account
                  </Text>
                  <Text fontSize='2xl' fontWeight='bold' color='brand.500'>
                    to enjoy all of our cool features ✌️
                  </Text>
                </Box>
                <InputGroup role='group'>
                  <InputLeftElement pointerEvents='none'>
                    <EmailIcon fontSize='2xl' />
                  </InputLeftElement>

                  <Input
                    type='email'
                    name='email'
                    autoComplete='email'
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                    placeholder='Enter your Email ID'
                  />
                </InputGroup>
                <Box h={4}>
                  <Flex
                    color='error'
                    component='p'
                    as={ErrorMessage}
                    fontSize='small'
                    name='email'
                  />
                </Box>

                <InputGroup role='group'>
                  <InputLeftElement pointerEvents='none'>
                    <LockIcon fontSize='2xl' />
                  </InputLeftElement>

                  <Input
                    type={isPasswordVisible ? 'text' : 'password'}
                    name='password'
                    autoComplete='password'
                    onBlur={handleBlur}
                    value={values.password}
                    onChange={handleChange}
                    placeholder='Enter your password'
                  />
                  <InputRightElement>
                    {isPasswordVisible ? (
                      <ViewOffIcon
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        cursor='pointer'
                        fontSize='2xl'
                      />
                    ) : (
                      <ViewIcon
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        cursor='pointer'
                        fontSize='2xl'
                      />
                    )}
                  </InputRightElement>
                </InputGroup>
                <Box h={4}>
                  <Flex
                    color='error'
                    component='p'
                    as={ErrorMessage}
                    fontSize='small'
                    name='password'
                  />
                </Box>

                <Button
                  w='100%'
                  size='lg'
                  type='submit'
                  colorScheme='brand'
                  isDisabled={!isValid || loginLoading}
                  onClick={(e: any) => handleSubmit(e)}
                  isLoading={loginLoading}
                  boxShadow='-3px -3px 0px 0px #00000040 inset'
                >
                  Proceed
                </Button>
              </VStack>
            </VStack>
          )}
        </Formik>

        <VStack
          p={8}
          h='100%'
          color='white'
          align='start'
          bg='brand.500'
          pos='relative'
          hideBelow={'md'}
          w={['100%', '100%', '50%', '50%']}
        >
          <Text fontSize='2xl' fontWeight='bold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            mollitia voluptates,
          </Text>
          <Text fontSize='large'>
            Lorem, ipsum. dolor sit amet user@example.com password123
          </Text>
          <Flex mt={4}>
            <Circle bg='white' size={2} mr={2} />
            <Circle bg='gray' size={2} mr={2} />
            <Circle bg='gray' size={2} mr={2} />
          </Flex>
        </VStack>
      </HStack>
    </Center>
  );
};

export default EmailForm;
