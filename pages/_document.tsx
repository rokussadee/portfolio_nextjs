import { Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document'
import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v13-pagesRouter';
import type { DocumentHeadTagsProps } from '@mui/material-nextjs/v13-pagesRouter';

interface DocumentProps extends DocumentInitialProps {
  emotionStyleTags: React.ReactNode[]
}

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body className="min-h-screen font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Document.getInitialProps = documentGetInitialProps;
