import { chakra, useColorModeValue } from '@chakra-ui/react';

export const Logo: React.FC = (props) => {
  const logoSrc = useColorModeValue(
    '/static/images/logo.png',
    '/static/images/logo.png',
  );

  return (
    <chakra.img
      src={logoSrc}
      alt="Logo"
      {...props}
    />
  );
};
