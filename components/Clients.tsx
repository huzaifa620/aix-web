import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ClientsSection = () => {
  const logos = [
    '/static/images/client1-logo.png',
    '/static/images/client2-logo.png',
    '/static/images/client10-logo.png',
    '/static/images/client4-logo.png',
    '/static/images/client5-logo.png',
    '/static/images/client6-logo.png',
    'https://prices.vn/frontend/v2/images/logo.svg',
    '/static/images/client8-logo.png',
  ];

  const { colorMode } = useColorMode();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true }); // Ensures animation triggers only once

  return (
    <Box
      id="clients"
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="full"
    >
      <Container ref={ref} maxW="container.xl" pt="12" pb="20">
        <Heading
          lineHeight="short"
          fontSize={['2xl', '3xl', '4xl']}
          textAlign="center"
          mb={8}
        >
          Trusted by Leading Brands
        </Heading>
        <Text fontSize="lg" textAlign="center" mb={12}>
          Our clients include top companies from various industries who trust us
          for reliable and innovative solutions.
        </Text>

        {/* Grid of Logos */}
        <SimpleGrid
          columns={[2, 4]}
          spacing={8}
          justifyItems="center"
          alignItems="center"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={
                inView
                  ? { opacity: 1, y: 0 } // Fade in and move up
                  : { opacity: 0, y: 50 } // Reset (if needed)
              }
              transition={{
                delay: index * 0.1, // Staggered animation
                type: 'spring',
                stiffness: 100,
                damping: 25,
              }}
            >
              <Box
                bg={colorMode === 'light' ? 'transparent' : 'transparent'}
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={['80px', '100px', '120px']}
                width={['120px', '160px', '200px']}
                maxWidth="200px"
                rounded="lg"
                p={2}
              >
                <Image
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  bg={index === 2 && colorMode === 'light' ? 'gray.800' : 'transparent'}
                  rounded={'lg'}
                  cursor={'pointer'}
                  width="100%"
                  objectFit="contain"
                />
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ClientsSection;
