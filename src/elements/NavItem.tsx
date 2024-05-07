import { Box, Link, Popover, PopoverContent, PopoverTrigger, Stack } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import SubNav, { ISubNav } from './SubNav';

const NavItem: FC<ISubNav> = ({ label, children, href, href_blank, onToggle }) => {
  return (
    <Popover trigger={'hover'} placement={'bottom-start'}>
      <PopoverTrigger>
        <Box>
          <Box fontSize={17} fontWeight={500} cursor="pointer">
            {children ? (
              <>
                {label} <ChevronDownIcon m="-1"/>
              </>
            ) : href_blank ? (
                <Link target="_blank" href={href_blank} _hover={{textDecoration: 'none'}}>
                  {label}
                </Link>
            ) :
            (
              <NextLink href={href || '/'}>
                <Link _hover={{textDecoration: 'none'}} onClick={onToggle}>
                  {label}
                </Link>
              </NextLink>
            )}
          </Box>
        </Box>
      </PopoverTrigger>

      {children && (
        <PopoverContent backgroundColor="gray.100" border={0} boxShadow={'xl'} p={4} rounded={'xl'} minW={'sm'}>
          <Stack>
            {children.map((child) => (
              <SubNav key={child.label} {...child} />
            ))}
          </Stack>
        </PopoverContent>
      )}
    </Popover>
  );
};

export default NavItem;
