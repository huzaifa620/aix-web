import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'AIgnitiveX',
    description: 'Where Artificial Intelligence meets human ingenuity.',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'services',
        label: 'Services',
        href: '',
      },
      {
        id: 'about',
        label: 'About',
        href: '',
      },
      {
        id: 'clients',
        label: 'Clients',
        href: '',
      },
      {
        id: 'projects',
        label: 'Projects',
        href: '',
      },
      {
        id: 'team',
        label: 'Team',
        href: '',
      },
      {
        id: 'testimonial',
        label: 'Testimonial',
        href: '',
      },
      {
        id: 'contact',
        label: 'Contact',
        href: '',
      },
      // {
      //   label: 'Sign Up',
      //   href: '/signup',
      //   variant: 'primary',
      // },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="https://twitter.com/Pagebakers">Eelco Wiersma</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:hello@saas-ui.dev',
        label: 'Contact',
      },
      {
        href: 'https://twitter.com/saas_js',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/saas-js/saas-ui',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
