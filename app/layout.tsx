import { ColorModeScript, theme } from '@chakra-ui/react'

import { Provider } from './provider'

export default function Layout(props: { children: React.ReactNode }) {
  const colorMode = theme.config.initialColorMode

  return (
    <html lang="en" data-theme={colorMode} style={{ colorScheme: colorMode }}>
      <head>
        <title>AIgnitiveX</title>
        <meta
          name="description"
          content="Where Artificial Intelligence meets human ingenuity"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        <meta property="og:title" content="AIgnitiveX" />
        <meta
          property="og:description"
          content="Where Artificial Intelligence meets human ingenuity"
        />
        <meta property="og:image" content="/images/logo.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aignitivex.com" />

        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/symbol.jpg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/symbol.jpg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/symbol.jpg"
        />
        <link rel="manifest" href="/static/favicons/manifest.json" />
      </head>
      <body className={`chakra-ui-${colorMode}`}>
        <ColorModeScript initialColorMode={colorMode} />
        <Provider>{props.children}</Provider>
      </body>
    </html>
  )
}
