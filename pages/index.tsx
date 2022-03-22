
import { Container, createStyles, Grid, Image, List, MantineTheme, MediaQuery, Text, ThemeIcon, Title } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import { BrandLinkedin, Mail } from 'tabler-icons-react'
import { Page, PageBlock, Footer } from '../components'
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
          <Title className={classes.h1} order={1}>Introduction</Title>
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
        <PageBlock emphasis>
          <Title
            className={classes.h2}
            order={2}
          >My Favorite Development Tools</Title>
          <List className={classes.list}>
            <List.Item>
              <Text
                weight={700}
                component="a"
                href="https://www.typescriptlang.org/">Typescript</Text>
              <Text component="span" className={classes.listText}>
                &nbsp;-&nbsp;A strongly typed programming language
                that builds on JavaScript, giving you better tooling
                at any scale.</Text>
            </List.Item>
            <List.Item>
              <Text
                weight={700}
                component="a"
                href="https://sass-lang.com/">SASS/SCSS</Text>
              <Text component="span" className={classes.listText}>
                &nbsp;-&nbsp;The most mature, stable, and
                powerful professional grade CSS extension
                language in the world.</Text>
            </List.Item>
            <List.Item>
              <Text
                weight={700}
                component="a"
                href="https://reactjs.org/">React</Text>
              <Text component="span" className={classes.listText}>
                &nbsp;-&nbsp;A JavaScript library for
                building user interfaces</Text>
            </List.Item>
            <List.Item>
              <Text
                weight={700}
                component="a"
                href="https://vercel.com/">Next</Text>
              <Text component="span" className={classes.listText}>
                &nbsp;-&nbsp;The open source React
                framework Vercel built together with
                Google and Facebook.</Text>
            </List.Item>
          </List>
        </PageBlock>
        <PageBlock>
          <Title className={classes.h3} order={3}>Contact Me</Title>
          <address className={classes.address}>
            <ThemeIcon sx={{ background: 'grey' }}>
              <Mail />
            </ThemeIcon>
            <Text component='a' href="mailto:dserio.d@gmail.com">
              dserio.d@gmail.com
            </Text>
            <ThemeIcon sx={{ background: 'grey' }}>
              <BrandLinkedin />
            </ThemeIcon>
            <Text component='a' href="https://www.linkedin.com/in/dan-serio-22a99644/">
              Dan Serio
            </Text>
          </address>
        </PageBlock>
      </Page>
    </div>
  )
}

export default Home
