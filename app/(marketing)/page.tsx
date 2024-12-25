'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
  Grid,
  useColorMode,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'
import ClientsSection from '#components/Clients'
import TeamSection from '#components/Team'
import ContactUsSection from '#components/ContactUs'
import Footer from '#components/Footer'

export const metadata = {
  title: 'Marketing Page',
  description: 'This is the marketing page of our app.',
};

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      {/* <HighlightsSection /> */}

      <ServicesSection />

      <AboutSection />

      <FeaturesSection />

      <ClientsSection />

      <TestimonialsSection />

      <TeamSection />

      <ContactUsSection />

      <Footer />

      {/* <PricingSection /> */}

      {/* <FaqSection /> */}
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Where AI meets
                <Br />  HUMAN ingenuity
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                An <Em>innovative startup</Em> that offers technical assistance to startups by harnessing the power of AI
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              {/* <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
              </HStack> */}

              <ButtonGroup pt="8" spacing={4} alignItems="center">
                <ButtonLink colorScheme="teal" size="lg" href="/signup">
                  Visit Our Works
                </ButtonLink>
                {/* <ButtonLink
                  size="lg"
                  href="https://demo.saas-ui.dev"
                  variant="outline"
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
                  View demo
                </ButtonLink> */}
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/images/AInobg.png"
                  width={350}
                  height={650}
                  alt="featured"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      {/* <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Accessible',
            icon: FiSmile,
            description: 'All components strictly follow WAI-ARIA standards.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Themable',
            icon: FiSliders,
            description:
              'Fully customize all components to your brand with theme support and style props.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Composable',
            icon: FiGrid,
            description:
              'Compose components to fit your needs and mix them together to create new ones.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Productive',
            icon: FiThumbsUp,
            description:
              'Designed to reduce boilerplate and fully typed, build your product at speed.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      /> */}
    </Box>
  )
}

const MotionBox = motion(Box); // Wrap Chakra's Box with motion

const ServicesSection = () => {
  const { colorMode } = useColorMode();

  const services = [
    {
      title: 'Web Development',
      description:
        'We provide responsive and modern websites, tailored to meet your business needs and user expectations. Our expertise includes popular frameworks and libraries that will make your project stand out.',
      image: '/static/images/web.jpg',
      techs: ['React', 'Next.js', 'Vue.js', 'Angular', 'Django', 'Flask', 'NestJs', 'Node.js', 'DotNet', 'GraphQL', 'Express.js'],
    },
    {
      title: 'Artificial Intelligence',
      description:
        'Leverage AI to enhance your business operations, from machine learning to natural language processing.',
      image: '/static/images/ai.png',
      techs: ['Demand Forecasting', 'Optimization Algorithms', 'Computer Vision', 'LLMs'],
    },
    {
      title: 'Cloud And DevOps',
      description:
        'Build scalable, reliable, and efficient cloud infrastructure with DevOps best practices.',
      image: '/static/images/devops.png',
      techs: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'GCP'],
    },
    {
      title: 'Mobile Apps',
      description:
        'Create intuitive and high-performance mobile applications for iOS and Android platforms.',
      image: '/static/images/mobile-app.jpg',
      techs: ['React Native', 'Flutter', 'Android Studio'],
    },
  ];

  return (
    <Container id="services" maxW="container.xl">
      <Box p={4}>
        <Grid
          templateColumns={{ base: '1fr', sm: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' }}
          gap={8}
        >
          {services.map((service, index) => (
            <AnimatedCard
              key={index}
              service={service}
              direction={index % 2 === 0 ? 'left' : 'right'} // Alternate animation directions
              colorMode={colorMode}
            />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

// Animated card component
const AnimatedCard = ({ service, direction, colorMode }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the card is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <MotionBox
      ref={ref}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      bg={colorMode === 'dark' ? 'gray.700' : 'white'}
      w="full"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 1 }}
    >
      <Box w="full" h={300} overflow="hidden">
        <Image
          alt={`${service.title} Image`}
          src={service.image}
          layout="responsive"
          width={350}
          height={200}
          className="rounded-t-lg"
        />
      </Box>

      <Box w="full" overflow="hidden" p={8}>
        <Text fontSize="xl" fontWeight="bold" color={colorMode === 'dark' ? 'white' : 'gray.900'} mb={4}>
          {service.title}
        </Text>
        <Text color={colorMode === 'dark' ? 'gray.400' : 'muted'} fontSize="lg">
          {service.description}
        </Text>
        <Wrap mt="8">
          {service.techs.map((tech) => (
            <Tag
              key={tech}
              variant="subtle"
              colorScheme="cyan"
              rounded="full"
              px="3"
              color={colorMode === 'dark' ? 'white' : 'cyan.800'}
            >
              {tech}
            </Tag>
          ))}
        </Wrap>
      </Box>
    </MotionBox>
  );
};


const AboutSection = () => {
  const bgColor = useColorModeValue('gray.700', 'gray.500'); // Different background colors for light/dark mode
  const textColor = useColorModeValue('white', 'gray.100'); // Light text color for dark background, dark text for light background

  return (
    <Box id="about" mt={{ base: '20', md: '32' }} py={{ base: '12', md: '24' }}>
      <Flex direction={{ base: 'column', lg: 'row' }} justify="space-between">
        {/* Left side - Image */}
        <Box
          w={{ base: 'full', lg: '50%' }}
          h="600px"
          bgImage="/static/images/about.jpg"
          bgSize="cover"
          bgPosition="center"
        />
        {/* Right side - Solid Color */}
        <Box
          w={{ base: 'full', lg: '50%' }}
          bg={bgColor}
          p={{ base: 4, lg: 16 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems={{ base: 'center', lg: 'flex-start' }}
        >
          <MotionBox
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            mb={4}
          >
            <Text
              fontSize="2xl"
              fontWeight="semibold"
              textTransform="uppercase"
              color={useColorModeValue('teal.600', 'green.300')}
              mb={2}
            >
              About Us
            </Text>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            mb={4}
          >
            <Heading size="xl" color={textColor}>
              Empowering Startups with AI-Driven Solutions for Smarter Decision-Making
            </Heading>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            mb={6}
          >
            <Text fontSize="lg" color={textColor} mb={4}>
              We strive to make decision-making easier for startups by harnessing the power of Artificial Intelligence. Our goal is to simplify complex challenges by using advanced AI technologies to analyze data, uncover patterns, and deliver actionable insights that drive informed business decisions.
            </Text>
            <Text fontSize="lg" color={useColorModeValue('teal.600', 'green.300')} mb={6}>
              “Unlocking the potential of data to drive smarter decisions and foster growth.”
            </Text>
          </MotionBox>
        </Box>
      </Flex>
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Core components">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started for free with <Em>30+ open source components</Em>.
            Including authentication screens with Clerk, Supabase and Magic.
            Fully functional forms with React Hook Form. Data tables with React
            Table.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
          We don&apos;t like to re-invent the wheel, neither should you. We
          selected the most productive and established tools in the scene and
          build Saas UI on top of it.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={['pink.200', 'purple.500']}
      >
        “Saas UI helped us set up a beautiful modern UI in no time. It saved us
        hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start your next idea two steps ahead"
      >
        <Text color="muted" fontSize="lg">
          We took care of all your basic frontend needs, so you can start
          building functionality that makes your product unique.
        </Text>
        <Wrap mt="8">
          {[
            'authentication',
            'navigation',
            'crud',
            'settings',
            'multi-tenancy',
            'layouts',
            'billing',
            'a11y testing',
            'server-side rendering',
            'documentation',
            'onboarding',
            'storybooks',
            'theming',
            'upselling',
            'unit testing',
            'feature flags',
            'responsiveness',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Not your standard
          <Br /> dashboard template.
        </Heading>
      }
      description={
        <>
          Saas UI Pro includes everything you need to build modern frontends.
          <Br />
          Use it as a template for your next product or foundation for your
          design system.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: '#components.',
          icon: FiBox,
          description:
            'All premium components are available on a private NPM registery, no more copy pasting and always up-to-date.',
          variant: 'inline',
        },
        {
          title: 'Starterkits.',
          icon: FiLock,
          description:
            'Example apps in Next.JS, Electron. Including authentication, billing, example pages, everything you need to get started FAST.',
          variant: 'inline',
        },
        {
          title: 'Documentation.',
          icon: FiSearch,
          description:
            'Extensively documented, including storybooks, best practices, use-cases and examples.',
          variant: 'inline',
        },
        {
          title: 'Onboarding.',
          icon: FiUserPlus,
          description:
            'Add user onboarding flows, like tours, hints and inline documentation without breaking a sweat.',
          variant: 'inline',
        },
        {
          title: 'Feature flags.',
          icon: FiFlag,
          description:
            "Implement feature toggles for your billing plans with easy to use hooks. Connect Flagsmith, or other remote config services once you're ready.",
          variant: 'inline',
        },
        {
          title: 'Upselling.',
          icon: FiTrendingUp,
          description:
            '#components and hooks for upgrade flows designed to make upgrading inside your app frictionless.',
          variant: 'inline',
        },
        {
          title: 'Themes.',
          icon: FiToggleLeft,
          description:
            'Includes multiple themes with darkmode support, always have the perfect starting point for your next project.',
          variant: 'inline',
        },
        {
          title: 'Generators.',
          icon: FiTerminal,
          description:
            'Extend your design system while maintaininig code quality and consistency with built-in generators.',
          variant: 'inline',
        },
        {
          title: 'Monorepo.',
          icon: FiCode,
          description: (
            <>
              All code is available as packages in a high-performance{' '}
              <Link href="https://turborepo.com">Turborepo</Link>, you have full
              control to modify and adjust it to your workflow.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      id="testimonial"
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
