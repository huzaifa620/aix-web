import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'

const MotionBox = motion(Box)

interface TeamMember {
  image: string
  name: string
  role: string
  socialLinks: {
    facebook: string
    twitter: string
    instagram: string
    linkedin: string
  }
}

const teamMembers: TeamMember[] = [
  {
    image: '/static/images/team1.png',
    name: 'Owais Ahmed',
    role: 'Machine Learning Engineer | Computer Vision Engineer',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    image: '/static/images/team1.png',
    name: 'Hamza Ali',
    role: 'Machine Learning Engineer | Full Stack Developer',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    image: '/static/images/team1.png',
    name: 'Muhammad Huzaifa',
    role: 'MERN Stack Developer | Python Developer',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    image: '/static/images/team1.png',
    name: 'Full Stack Developer',
    role: 'Software Engineer',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
]

const TeamSection = () => {
  return (
    <Box position="relative" overflow="hidden">
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
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
              <Flex wrap="wrap" justify="center" gap={6} flexDirection="column">
                <Image
                  src={member.image}
                  alt={`${member.name}'s photo`}
                  objectFit="cover"
                  w={255}
                  h={290}
                  transition="all 0.3s ease-in-out"
                  _hover={{ opacity: 0.8 }}
                />
                {/* Social Icons */}
                <Box
                  position="absolute"
                  bottom={0}
                  left="50%"
                  transform="translateX(-50%)"
                  zIndex={2}
                  color="white"
                  display="flex"
                  gap={4}
                  pb={4}
                  opacity={0} // Start hidden
                  transition="opacity 0.3s ease-in-out"
                  _groupHover={{
                    opacity: 1,
                    transform: 'translateY(-20px)',
                    transition:
                      'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                  }}
                >
                  <IconButton
                    as="a"
                    href={member.socialLinks.facebook}
                    target="_blank"
                    aria-label="Facebook"
                    icon={<FiFacebook />}
                    variant="ghost"
                    color="white"
                  />
                  <IconButton
                    as="a"
                    href={member.socialLinks.twitter}
                    target="_blank"
                    aria-label="Twitter"
                    icon={<FiTwitter />}
                    variant="ghost"
                    color="white"
                  />
                  <IconButton
                    as="a"
                    href={member.socialLinks.instagram}
                    target="_blank"
                    aria-label="Instagram"
                    icon={<FiInstagram />}
                    variant="ghost"
                    color="white"
                  />
                  <IconButton
                    as="a"
                    href={member.socialLinks.linkedin}
                    target="_blank"
                    aria-label="LinkedIn"
                    icon={<FiLinkedin />}
                    variant="ghost"
                    color="white"
                  />
                </Box>

                {/* Static Content below image */}
                <Box w={255} p={4} textAlign="center" bg="white">
                  <Text w={255} fontSize="xl" fontWeight="bold">
                    {member.name}
                  </Text>
                  <Text w={255}>{member.role}</Text>
                </Box>
              </Flex>
            ))}
          </Flex>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default TeamSection
