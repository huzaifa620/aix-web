import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import router from 'next/router'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

import { Logo } from './layout/logo'

const handleSmoothScroll = (
  e: React.MouseEvent<HTMLElement>,
  id?: string,
  href?: string,
) => {
  e.preventDefault()

  if (id) {
    const targetElement = document.getElementById(id)
    if (targetElement) {
      const headerOffset = 80 // Adjust based on your header's height
      const elementPosition = targetElement.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  } else if (href) {
    router.push(href)
  }
}

const Footer = () => {
  const borderColor = useColorModeValue('gray.200', 'gray.200')
  const textColor = useColorModeValue('gray.300', 'gray.300')
  const primaryText = useColorModeValue('white', 'white')

  return (
    <Box bg="teal.700" color="white" py={{ base: 12, md: 32 }}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
          align="flex-start"
        >
          {/* Left Section */}
          <VStack
            spacing={6}
            w={{ base: '100%', lg: '50%' }}
            align={{ base: 'flex-center', lg: 'flex-start' }}
          >
            <Box
              bg="tertiary_bg"
              border="1px dashed"
              borderColor="ft_border_color"
              p={8}
              borderRadius="xl"
            >
              <Text fontSize="xl" fontWeight="medium" color={primaryText}>
                Need to discuss your startup idea?
              </Text>
              <Text mt={2} fontSize="sm" color={textColor}>
                Email us to{' '}
                <Link href="mailto:contact@aignitivex.com" color="white">
                  contact@aignitivex.com
                </Link>
              </Text>
            </Box>
          </VStack>

          {/* Right Section */}
          <Flex
            direction="row"
            justify="space-between"
            w={{ base: '100%', lg: '45%' }}
            mt={{ base: 10, lg: 0 }}
            px={{ base: 4, lg: 0 }}
          >
            {/* Column 1 */}
            <VStack align="flex-start" gap={4}>
              <Text fontSize="lg" fontWeight="medium" color={primaryText}>
                Quick Links
              </Text>
              <Link
                fontSize="sm"
                color={textColor}
                _hover={{ color: 'white' }}
                onClick={(e) => handleSmoothScroll(e, 'home')}
              >
                Home
              </Link>
              <Link
                fontSize="sm"
                color={textColor}
                _hover={{ color: 'white' }}
                onClick={(e) => handleSmoothScroll(e, 'services')}
              >
                Services
              </Link>
              <Link
                fontSize="sm"
                color={textColor}
                _hover={{ color: 'white' }}
                onClick={(e) => handleSmoothScroll(e, 'about')}
              >
                About Us
              </Link>
              <Link
                fontSize="sm"
                color={textColor}
                _hover={{ color: 'white' }}
                onClick={(e) => handleSmoothScroll(e, 'team')}
              >
                Our Team
              </Link>
            </VStack>

            {/* Column 2 */}
            <VStack align="flex-start">
              <Text
                mb={2}
                fontSize="lg"
                fontWeight="medium"
                color={primaryText}
              >
                Stay Connected
              </Text>
              <Box
                display="flex"
                gap={3}
                justifyContent={{ base: 'center', md: 'flex-start' }}
              >
                <Link
                  href="https://www.linkedin.com/company/aignitivex/"
                  isExternal
                  _hover={{
                    borderColor: 'teal.200',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
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
                  href="https://github.com/AIgnitiveX"
                  isExternal
                  _hover={{
                    borderColor: 'teal.200',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
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
            </VStack>
          </Flex>
        </Flex>

        <Divider mt={10} borderColor={borderColor} />

        <Flex
          mt={{ base: '10', lg: '10' }}
          ml={{ base: '0', lg: '16' }}
          direction={{ base: 'column', lg: 'row' }}
          gap={8}
          align="center"
          justify="space-between"
        >
          <HStack spacing={4}>
            <Box transform={{ base: "scale(1.5)", lg: "scale(2)" }}>
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
            </Box>
          </HStack>
          <Text fontSize="sm" opacity={0.7}>
            © AIgnitiveX™, {new Date().getFullYear()}. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
