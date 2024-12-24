import {
  Box,
  Container,
  Flex,
  Link,
  SimpleGrid,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

import { Logo } from './layout/logo'

const Footer = () => {
  const columnSize = useBreakpointValue({ base: 1, md: 2, lg: 4 })

  return (
    <Box bg="teal.700" color="white" py={{ base: 8, md: 12 }}>
      <Container maxW="container.xl">
        <SimpleGrid
          columns={columnSize}
          spacing={{ base: 6, md: 8 }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Flex direction="column">
            {/* Logo */}
            <Logo
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault()

                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  })
                }
              }}
            />

            {/* Contact Details Box */}
            <Box mb={{ base: 6, md: 0 }} mt={8}>
              <VStack spacing={2} align="flex-start">
                <Text fontSize="sm">Karachi, Pakistan</Text>
                <Link
                  href="mailto:contact@aignitivex.com"
                  color="teal.100"
                  _hover={{ textDecor: 'underline' }}
                >
                  contact@aignitivex.com
                </Link>
                <Text fontSize="sm">+92 (312) 202 9205 (Main)</Text>
              </VStack>
            </Box>
          </Flex>

          {/* Footer About Us Column */}
          <Box mb={{ base: 6, md: 0 }}>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              About Us
            </Text>
            <Text fontSize="sm" lineHeight="tall" mb={4}>
              We are a startup helping businesses grow by providing efficient,
              accessible, and customizable tools.
            </Text>
            <Link
              href="mailto:hello@saas-ui.dev"
              isExternal
              color="teal.100"
              _hover={{ textDecor: 'underline' }}
            >
              Contact Us
            </Link>
          </Box>

          {/* Footer Quick Links Column */}
          <Box mb={{ base: 6, md: 0 }}>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Quick Links
            </Text>
            <Link
              href="#services"
              display="block"
              mb={2}
              color="teal.100"
              _hover={{ textDecor: 'underline' }}
            >
              Services
            </Link>
            <Link
              href="#about"
              display="block"
              mb={2}
              color="teal.100"
              _hover={{ textDecor: 'underline' }}
            >
              About
            </Link>
            <Link
              href="#team"
              display="block"
              mb={2}
              color="teal.100"
              _hover={{ textDecor: 'underline' }}
            >
              Team
            </Link>
            <Link
              href="#clients"
              display="block"
              mb={2}
              color="teal.100"
              _hover={{ textDecor: 'underline' }}
            >
              Our Clients
            </Link>
          </Box>

          {/* Footer Follow Us Column */}
          <Box mb={{ base: 6, md: 0 }}>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Follow Us
            </Text>
            <Box display="flex" gap={3} justifyContent={{ base: 'center', md: 'flex-start' }}>
                <Link
                    href="https://twitter.com/saas_js"
                    isExternal
                    _hover={{
                        borderColor: 'teal.200',
                        backgroundColor: 'rgba(255, 255, 255, 0.3)'
                    }}
                    display="inline-block"
                    borderRadius="50%"
                    border="1px solid"
                    borderColor="teal.100"
                    padding="10px"
                    transition="background-color 0.2s ease, border-color 0.2s ease"
                >
                    <FaLinkedinIn size={16} />
                </Link>
                <Link
                    href="https://twitter.com/saas_js"
                    isExternal
                    _hover={{
                        borderColor: 'teal.200',
                        backgroundColor: 'rgba(255, 255, 255, 0.3)'
                    }}
                    display="inline-block"
                    borderRadius="50%"
                    border="1px solid"
                    borderColor="teal.100"
                    padding="10px"
                    transition="background-color 0.2s ease, border-color 0.2s ease"
                >
                    <FaGithub size={16} />
                </Link>
            </Box>

          </Box>
        </SimpleGrid>

        <Box mt={10}>
          <Text fontSize="sm" opacity={0.7}>
            © AIgnitiveX™, {new Date().getFullYear()}. All rights reserved. Company Registration Number: 21479524.{' '}
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
