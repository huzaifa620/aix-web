import { ColorModeScript, theme } from '@chakra-ui/react';

import { Provider } from './provider';

export default function Layout(props: { children: React.ReactNode }) {
  const colorMode = theme.config.initialColorMode;

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

        {/* Scrollbar Styling */}
        <style>
          {`
            /* For WebKit browsers (Chrome, Safari, etc.) */
            body::-webkit-scrollbar {
              width: 8px; /* Width of the scrollbar */
            }
            body::-webkit-scrollbar-thumb {
              background-color: green; /* Color of the scrollbar thumb */
              border-radius: 10px; /* Rounded corners */
            }
            body::-webkit-scrollbar-track {
              background-color: #f1f1f1; /* Track color */
            }

            /* For Firefox */
            html {
              scrollbar-width: thin; /* Thin scrollbar */
              scrollbar-color: green #f1f1f1; /* Thumb and track colors */
            }

            /* For Edge and IE (optional; uses WebKit styles in newer versions) */
          `}
        </style>
      </head>
      <body className={`chakra-ui-${colorMode}`}>
        <ColorModeScript initialColorMode={colorMode} />
        <Provider>{props.children}</Provider>
      </body>
    </html>
  );
}
