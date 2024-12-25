import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react'

const ContactUsSection = () => {
  const email = 'contact@aignitivex.com'
  const subject = 'Let us know how we can help you'

  // Theme-aware colors
  const bgColor = useColorModeValue('gray.100', 'gray.700')
  const formBg = useColorModeValue('white', 'gray.800')
  const headingColor = useColorModeValue('gray.800', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const inputFocusColor = 'teal.500'

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const name = formData.get('name')?.toString()
    const emailInput = formData.get('email')?.toString()
    const message = formData.get('message')?.toString()

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${emailInput}\nMessage: ${message}`
    )}`

    window.location.href = mailtoLink
  }

  return (
    <Box id="contact" py={{ base: 12, lg: 20 }} bg={bgColor}>
      <Container maxW="container.xl" px={{ base: 4, md: 8 }} textAlign="center">
        <Heading
          lineHeight="short"
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          textAlign="center"
          mb={6}
          color={headingColor}
        >
          Contact Us
        </Heading>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          textAlign="center"
          mb={10}
          color={textColor}
        >
          Got a business idea? Have a question, feedback, or need assistance? <br />
          We're here to help. Reach out to us and we'll get back to you as soon as possible!
        </Text>

        <Box
          as="form"
          onSubmit={handleSubmit}
          bg={formBg}
          borderRadius="md"
          p={{ base: 6, md: 8 }}
          boxShadow="md"
          maxW={{ base: 'full', sm: 'md', lg: '3xl' }}
          mx="auto"
        >
          <FormControl id="name" mb={4} isRequired>
            <FormLabel color={textColor}>Your Name</FormLabel>
            <Input
              name="name"
              type="text"
              placeholder="Enter your name"
              fontSize={{ base: 'sm', md: 'md' }}
              focusBorderColor={inputFocusColor}
            />
          </FormControl>

          <FormControl id="email" mb={4} isRequired>
            <FormLabel color={textColor}>Your Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              defaultValue=""
              fontSize={{ base: 'sm', md: 'md' }}
              focusBorderColor={inputFocusColor}
            />
          </FormControl>

          <FormControl id="message" mb={6} isRequired>
            <FormLabel color={textColor}>Your Message</FormLabel>
            <Textarea
              name="message"
              placeholder="Leave a comment..."
              rows={5}
              fontSize={{ base: 'sm', md: 'md' }}
              focusBorderColor={inputFocusColor}
            />
          </FormControl>

          <Button
            type="submit"
            colorScheme="teal"
            size="lg"
            w="full"
            fontSize={{ base: 'sm', md: 'md' }}
          >
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default ContactUsSection
