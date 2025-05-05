import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiGithub, FiUser, FiLinkedin } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'

const MotionBox = motion(Box)

interface TeamMember {
  image: string
  name: string
  role: string
  socialLinks: {
    linkedin: string
    github: string
    portfolio: string
  }
}

const teamMembers: TeamMember[] = [
  {
    image: '/static/images/team1.png',
    name: 'Owais Ahmed',
    role: 'Machine Learning Engineer | Computer Vision Engineer',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/owais-ahmed-749911192',
      github: '#',
      portfolio: 'https://owais142002.github.io/',
    },
  },
  {
    image: '/static/images/team2.png',
    name: 'Hamza Ali',
    role: 'Machine Learning Engineer | Full Stack Developer',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/hamza-ali-khan-5781b0200/',
      github: '#',
      portfolio: '#',
    },
  },
  {
    image: '/static/images/team3.png',
    name: 'Muhammad Huzaifa',
    role: 'Full Stack Developer | Python Developer',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/muhammad-huzaifa-2a3821249',
      github: 'https://github.com/huzaifa620',
      portfolio: 'https://personal-portfolio-eta-three.vercel.app',
    },
  },
  {
    image: '/static/images/team4.png',
    name: 'Muhammad Areeb',
    role: 'Full Stack Developer | Python Developer',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/muhammad-areeb-1844a5192/',
      github: '#',
      portfolio: '#',
    },
  },
]

const TeamSection = () => {
  const iconColor = useColorModeValue('gray.800', 'white')
  const borderColor = useColorModeValue('gray.300', 'gray.600')

  return (
    <Box id="team" position="relative" overflow="hidden">
      <Container maxW="container.xl" pt={{ base: 12, lg: 20 }} pb="20">
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="center"
          mb={8}
        >
          Our Creative Team
        </Heading>
        <Text fontSize="lg" textAlign="center" mb={12}>
          Our team combines expertise, creativity, and a shared vision to deliver outstanding solutions that drive results.
        </Text>
        <Flex wrap="wrap" justify="center" gap={6}>
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </Flex>
      </Container>
    </Box>
  )
}

const TeamMemberCard = ({ member, index }: { member: TeamMember, index: number }) => {
  const iconColor = useColorModeValue('gray.800', 'white')
  const borderColor = useColorModeValue('gray.300', 'gray.600')

  // Using the useInView hook to trigger the animation when the element is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.2, // Trigger when 20% of the element is in view
  })

  return (
    <MotionBox
      ref={ref}
      w={{ base: '100%', sm: '45%', md: '22%' }}
      mb={8}
      textAlign="center"
      position="relative"
      boxShadow="md"
      borderRadius="md"
      borderWidth={1}
      borderColor={borderColor}
      overflow="hidden"
      _hover={{
        boxShadow: 'lg',
        transform: 'scale(1.05)',
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
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
            icon={<FiUser />}
            variant="ghost"
            color={iconColor}
          />
        </Flex>
      </Box>
    </MotionBox>
  )
}

export default TeamSection
