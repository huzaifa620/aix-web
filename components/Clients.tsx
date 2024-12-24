import {
  Box,
  Container,
  Flex,
  Image,
  Icon,
  Text,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react'
import {
    FiArrowRight
  } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { ButtonLink } from '#components/button-link/button-link'

const MotionBox = motion(Box)

interface Client {
  logo: string
  cover: string
  companyName: string
  website: string
  companyType: string
  details: string
}

const clients: Client[] = [
  {
    logo: '/static/images/client1-logo.png',
    cover: '/static/images/anf.png',
    companyName: 'Rehani Soko',
    website: 'https://www.rehanisoko.com',
    companyType: 'Prop-Tech Company',
    details: 'Providing innovative software solutions to tech giants.',
  },
  {
    logo: '/static/images/client2-logo.png',
    cover: '/static/images/anf.png',
    companyName: 'AnF Leathers',
    website: 'https://anfleathers.com',
    companyType: 'Online Clothing Store',
    details: 'Leading the way in sustainable energy solutions.',
  },
  {
    logo: '/static/images/client3-logo.png',
    cover: '/static/images/anf.png',
    companyName: 'Monarca Jewels',
    website: 'https://www.healthco.com',
    companyType: 'Online Jewelery Store',
    details: 'Revolutionizing healthcare with AI-driven platforms.',
  },
  {
    logo: '/static/images/client4-logo.png',
    cover: '/static/images/anf.png',
    companyName: 'Lovum Groups',
    website: 'https://lovumgroup.com',
    companyType: 'Consultation Organization',
    details: 'Providing innovative software solutions to tech giants.',
  },
  {
    logo: '/static/images/client5-logo.png',
    cover: '/static/images/myaskai.png',
    companyName: 'MyAskAI',
    website: 'https://myaskai.com',
    companyType: 'Customizable AI Knowledge Solutions Provider',
    details: 'Leading the way in sustainable energy solutions.',
  },
  {
    logo: '/static/images/client6-logo.png',
    cover: '/static/images/dhp.png',
    companyName: 'Diamond Home Protection',
    website: 'https://diamondhomeprotection.com',
    companyType: 'Home Protection',
    details: 'Revolutionizing healthcare with AI-driven platforms.',
  },
]

const ClientsSection = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  
    const handleCardHover = (client: Client) => {
      setSelectedClient(client)
      onOpen()
    }
  
    return (
      <Box position="relative" overflow="hidden">
        <BackgroundGradient height="100%" zIndex="-1" />
        <Container maxW="container.xl" pt={{ base: 12, lg: 20 }} pb="20">
          <MotionBox
            p={8}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>
              Our Clients
            </Text>
            <Flex wrap="wrap" justify="center" gap={6}>
              {clients.map((client, index) => (
                <Box
                  key={index}
                  w={{ base: '100%', sm: '45%', md: '30%' }}
                  h={300}
                  position="relative"
                  overflow="hidden"
                  borderRadius="lg"
                  boxShadow="lg"
                  _hover={{ transform: 'scale(1.05)', cursor: 'pointer' }}
                  transition="all 0.3s ease-in-out"
                  onClick={() => handleCardHover(client)} // Trigger modal on click
                >
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bgImage={`url(${client.cover})`}
                    bgSize="cover"
                    bgPosition="center"
                    zIndex={0}
                    opacity={1}
                    filter="blur(2px)" 
                    transition="all 0.3s ease-in-out"
                  ></Box>

                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="rgba(0, 0, 0, 0.5)"  // Black with 40% opacity for the overlay
                    zIndex={1}
                    transition="all 0.3s ease-in-out"
                  ></Box>
  
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    color={useColorModeValue('white', 'white')}
                    zIndex={1}
                    textAlign="center"
                    p={4}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <Image
                      src={client.logo}
                      alt={`${client.companyName} logo`}
                      w="160px"
                      h="160px"
                      objectFit="contain"
                      mb={4}
                      mx="auto"
                    />
                    <ButtonLink
                        size="sm"
                        href={client.website}
                        mt={-20}
                        variant="outline"
                        _hover={{
                          color: 'white', // Ensure text color is white on hover
                          borderColor: 'gray.300', // Match border color with background on hover
                        }}
                        rightIcon={
                            <Icon
                                as={FiArrowRight}
                                sx={{
                                    transitionProperty: 'common',
                                    transitionDuration: 'normal',
                                    '.chakra-button:hover &': {
                                    transform: 'translate(5px)',
                                    },
                                }}
                            />
                        }
                    >
                        Visit
                    </ButtonLink>
                    <Text fontSize="xl" fontWeight="bold" mb={2}>
                      {client.companyName}
                    </Text>
                    <Text fontSize="sm" mb={4}>{client.companyType}</Text>
                  </Box>
                </Box>
              ))}
            </Flex>
          </MotionBox>
        </Container>
      </Box>
    )
  }
  
  export default ClientsSection
