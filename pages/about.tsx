
import { Container, createStyles, Image, List, MantineTheme, MediaQuery, Text, ThemeIcon, Title } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import { BrandLinkedin, Mail } from 'tabler-icons-react'
import { Page, PageBlock } from '../components'
import { AppHeader } from '../components'

const useHomeStyles = createStyles((theme: MantineTheme) => ({
  h1: {
    marginBottom: theme.spacing.xl * 2,
    textAlign: 'center'
  },
  h2: {
    marginBottom: theme.spacing.xl * 2,
    textAlign: 'center'
  },
  h3: {
    marginBottom: theme.spacing.xl * 2,
    textAlign: 'center'
  },
  flexContainer: {
    display: 'flex',
    maxWidth: 560,
    flexDirection: 'column',
    padding: 0,
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
  },
  image: { marginBottom: theme.spacing.xl },
  list: {
    color: 'inherit',
    paddingLeft: theme.spacing.md,
    '& li': {
      marginBottom: theme.spacing.xl
    },
    '& a': {
      textDecoration: 'underline'
    }
  },
  listText: {
    fontSize: theme.fontSizes.sm,
    opacity: 0.8
  },
  address: {
    display: 'grid',
    maxWidth: '300px',
    gridTemplateColumns: 'auto 1fr',
    gap: theme.spacing.sm,
    margin: `${theme.spacing.xl}px auto`,
    '& a': {
      color: theme.colors.violet
    }
  }
}))

const Home: NextPage = () => {
  const { classes } = useHomeStyles()
  return (
    <div>
      <Page
        header={
          <AppHeader />
        }>
        <Head>
          <title>Dan Serio</title>
          <meta name="description" content="Dan Serio | Web Development" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PageBlock>
          <Title className={classes.h1} order={1}>About Me</Title>
          <MediaQuery largerThan={'md'} styles={{
            flexDirection: 'row',
            '& > div:first-of-type': {
              marginRight: '4ch'
            }
          }}>
            <Container className={classes.flexContainer}>
              <div>
                <Image
                  className={classes.image}
                  mx={'auto'}
                  sx={{ maxWidth: 200 }}
                  width={200}
                  height={200}
                  alt="Dan Serio"
                  src="headshot.jpg"
                  fit='cover'
                  radius={'lg'}
                />
              </div>
              <div>
                <p>
                  My name is <Text component='strong' color={'violet'}>Dan Serio</Text>.
                  I am a front end web developer with roughly 10 years
                  of freelance experience, looking for a permanent role
                  in the industry. Specializing in Typescript,
                  SCSS, and React; I keep current with modern design trends
                  and development best-practices.
                </p>
              </div>
            </Container>
          </MediaQuery>
        </PageBlock>
      </Page>
    </div>
  )
}

export default Home
