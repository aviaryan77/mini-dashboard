import Log from '@/helpers/Log';
import { clippedText } from '@/helpers/stringHelper';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Flex,
  Menu,
  Text,
  MenuItem,
  MenuList,
  MenuButton,
  StyleProps,
} from '@chakra-ui/react';
import React, { FC } from 'react';

interface ListItemType {
  name: string;
  value: string;
}

interface DropDownProps extends StyleProps {
  label: string;
  visible?: boolean;
  disabled?: boolean;
  placeholder?: string;
  list: ListItemType[];
  selectedValue?: ListItemType;
  onItemClick?: (item: ListItemType) => void;
}

const DropDown: FC<DropDownProps> = ({
  list,
  label,
  disabled,
  placeholder,
  selectedValue,
  visible = true,
  onItemClick = () => {},
  ...rest
}) => {
  if (!visible) return null;

  return (
    <Flex align={'center'} zIndex={9} {...rest}>
      <Text mr={4} fontSize='.8rem'>
        {label}
      </Text>
      <Menu placement='bottom-end' matchWidth>
        <MenuButton
          w='full'
          disabled={disabled}
          _disabled={{ cursor: 'not-allowed', opacity: 0.6 }}
          px={2}
          py={1}
          transition='all 0.2s'
          fontSize='.8rem'
          borderRadius='md'
          borderWidth='1px'
          role='group'
          _hover={{ bg: 'brand.100' }}
          _expanded={{ bg: 'brand.50' }}
        >
          <Flex align='center'>
            <Text w='80%' textAlign='left' flex={1}>
              {clippedText(selectedValue?.name, 30) ?? placeholder}
            </Text>
            <ChevronDownIcon
              ml={4}
              h={4}
              w={4}
              transition='all 0.3s'
              _groupActive={{
                transform: 'rotate(180deg)',
              }}
            />
          </Flex>
        </MenuButton>
        <MenuList bg='white' p={0} rounded={6} overflow={'hidden'}>
          {list?.map((item: ListItemType, index: number) => (
            <MenuItem
              fontSize={'.8rem'}
              borderBottomWidth='1px'
              key={item.name}
              onClick={() => {
                onItemClick(item);
              }}
            >
              {item.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default DropDown;
