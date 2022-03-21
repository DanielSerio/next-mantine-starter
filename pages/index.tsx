
import { Paper, Title } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Page, PageBlock, Footer } from '../components'
import { AppHeader } from '../components'


const Home: NextPage = () => {
  const footerHeight: number = 400
  return (
    <div>
      <Page
        sx={{ marginBottom: footerHeight }}
        header={
          <AppHeader />
        }>
        <Head>
          <title>Dan Serio</title>
          <meta name="description" content="Dan Serio | Web Development" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PageBlock>
          <Title order={1}>Index Page</Title>
          <p>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rem magnam, ad enim rerum
            ratione quis culpa neque temporibus adipisci
            molestiae dolore debitis? Sapiente, labore.
            Adipisci voluptates quos nostrum obcaecati voluptatem.</p>
        </PageBlock>
        <PageBlock emphasis>
          <Title order={1}>Index Page Emphasis</Title>
          <p>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rem magnam, ad enim rerum
            ratione quis culpa neque temporibus adipisci
            molestiae dolore debitis? Sapiente, labore.
            Adipisci voluptates quos nostrum obcaecati voluptatem.</p>
        </PageBlock>
        <PageBlock>
          <Title order={1}>Index Page</Title>
          <p>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rem magnam, ad enim rerum
            ratione quis culpa neque temporibus adipisci
            molestiae dolore debitis? Sapiente, labore.
            Adipisci voluptates quos nostrum obcaecati voluptatem.</p>
        </PageBlock>
      </Page>
      <Footer height={footerHeight} />
    </div>
  )
}

export default Home
