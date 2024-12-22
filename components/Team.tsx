import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'

const MotionBox = motion(Box)

interface TeamMember {
  image: string
  name: string
  role: string
  socialLinks: {
    linkedin: string
    github: string
    portfolio: string // Personal portfolio
  }
}

const teamMembers: TeamMember[] = [
  {
    image: '/static/images/team1.png',
    name: 'Owais Ahmed',
    role: 'Machine Learning Engineer | Computer Vision Engineer',
    socialLinks: {
      linkedin: '#',
      github: '#',
      portfolio: '#',
    },
  },
  {
    image: '/static/images/team1.png',
    name: 'Hamza Ali',
    role: 'Machine Learning Engineer | Full Stack Developer',
    socialLinks: {
      linkedin: '#',
      github: '#',
      portfolio: '#',
    },
  },
  {
    image: '/static/images/team1.png',
    name: 'Muhammad Huzaifa',
    role: 'MERN Stack Developer | Python Developer',
    socialLinks: {
      linkedin: '#',
      github: '#',
      portfolio: '#',
    },
  },
  {
    image: '/static/images/team1.png',
    name: 'Muhammad Areeb',
    role: 'Full Stack Developer',
    socialLinks: {
      linkedin: '#',
      github: '#',
      portfolio: '#',
    },
  },
]

const TeamSection = () => {
  // Use theme-aware colors for icon visibility and border color
  const iconColor = useColorModeValue('gray.800', 'white') // Light mode: dark icons, dark mode: white icons
  const borderColor = useColorModeValue('gray.300', 'gray.600') // Dark mode: gray.300, Light mode: gray.600

  return (
    <Box position="relative" overflow="hidden">
      <Container maxW="container.xl" pt={{ base: 12, lg: 20 }} pb="20">
        <MotionBox
          p={8}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Heading
            lineHeight="short"
            fontSize={['2xl', null, '4xl']}
            textAlign="center"
            mb={8}
          >
            Our Creative Team
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12}>
            Tour function information without cross action media value quickly
            maximize timely deliverables.
          </Text>
          <Flex wrap="wrap" justify="center" gap={6}>
            {teamMembers.map((member, index) => (
              <Box
                key={index}
                w={{ base: '100%', sm: '45%', md: '22%' }}
                mb={8} // Adds spacing between the rows
                textAlign="center"
                position="relative"
                boxShadow="md"
                borderRadius="md"
                borderWidth={1} // Border width
                borderColor={borderColor} // Border color based on theme
                overflow="hidden"
                _hover={{
                  boxShadow: 'lg', // More prominent shadow on hover
                  transform: 'scale(1.05)', // Slightly zoom the card on hover for better visual effect
                }}
                transition="all 0.3s ease-in-out"
              >
                <Image
                  src={member.image}
                  alt={`${member.name}'s photo`}
                  objectFit="cover"
                  w="100%"
                  h={250}
                  transition="all 0.3s ease-in-out"
                  _hover={{ opacity: 0.8 }}
                />

                <Box p={4}> 
                  <Text mb={2} fontSize="xl" fontWeight="bold">
                    {member.name}
                  </Text>
                  <Text mb={2} fontSize="sm">
                    {member.role}
                  </Text>
                  <Flex mb={2} wrap="wrap" justify="center" gap={6}>
                    <IconButton
                      as="a"
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      aria-label="LinkedIn"
                      icon={<FiLinkedin />}
                      variant="ghost"
                      color={iconColor}
                    />
                    <IconButton
                      as="a"
                      href={member.socialLinks.github}
                      target="_blank"
                      aria-label="GitHub"
                      icon={<FiGithub />}
                      variant="ghost"
                      color={iconColor}
                    />
                    <IconButton
                      as="a"
                      href={member.socialLinks.portfolio}
                      target="_blank"
                      aria-label="Portfolio"
                      icon={<FiGithub />} // Replace with an appropriate icon for personal portfolio
                      variant="ghost"
                      color={iconColor}
                    />
                  </Flex>
                </Box>
              </Box>
            ))}
          </Flex>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default TeamSection
