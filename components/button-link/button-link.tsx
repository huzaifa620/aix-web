import { Button, ButtonProps } from '@chakra-ui/react'
import NextLink from 'next/link'
import { forwardRef } from 'react'

interface ButtonLinkProps extends ButtonProps {
  href: string
  target?: string
  rel?: string
}

export const ButtonLink = forwardRef<HTMLButtonElement, ButtonLinkProps>(
  ({ href, target, rel, ...props }, ref) => {
    return (
      <NextLink href={href} passHref legacyBehavior>
        <Button
          ref={ref}
          as="a"
          target={target}
          rel={rel || target === '_blank' ? 'noopener noreferrer' : undefined}
          {...props}
        />
      </NextLink>
    )
  }
)

ButtonLink.displayName = 'ButtonLink'