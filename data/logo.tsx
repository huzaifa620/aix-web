import { chakra, Box, useColorModeValue } from '@chakra-ui/react';

export const Logo: React.FC = (props) => {
  return (
    <Box
      display="inline-block"
      px={2}
      pt={2}
      pb={1}
      mt={-2}
      borderRadius="md"
      bg={useColorModeValue('rgba(255, 255, 255, 0.68)', 'rgba(255, 255, 255, 0.68)')}
      backdropFilter="blur(5px)"
    >
      <chakra.img
        src="/static/images/logo.png"
        alt="Logo"
        {...props}
      />
    </Box>
  );
};
