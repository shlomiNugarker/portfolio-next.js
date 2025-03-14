import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {
  Grid,
  GridItem,
  Stack,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import OpenGraphHead from 'components/Misc/OpenGraphHead'
import FadeInLayout from 'components/Layout/FadeWhenVisible'
import Menu from 'components/Menu'
import Sidebar from 'components/Sidebar'
import About from 'components/Sections/About'
import FeaturedWorks from 'components/Sections/FeaturedWorks'
import ScrollMore from 'components/Misc/ScrollMore'

import { GetStaticPaths, GetStaticProps } from 'next'
import ButterflyButton from 'components/Misc/ButterflyButton'

export const getStaticPaths: GetStaticPaths = async () => {
  const locales = ['en', 'he', 'ar', 'ru', 'fr', 'es', 'de', 'hi']

  const paths = locales.map((locale) => ({
    params: { locale },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const locale = (params?.locale as string) || 'en'

  console.log(`🔹 Building page for locale: ${locale}`)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locale,
    },
  }
}

const GetInTouch = dynamic(() => import('components/Sections/GetInTouch'))

const Portfolio = (): JSX.Element => {
  const sideBarPadding = useBreakpointValue({ base: '5', md: '8', lg: '14' })
  const mainContent = useBreakpointValue({
    base: '5',
    md: '14',
    lg: '14',
    xl: 0,
  })
  const paddTop = useBreakpointValue({ base: '20', sm: 20, md: 20 })

  return (
    <Box overflowX="hidden">
      <OpenGraphHead />
      <Menu />
      <Grid
        id="mainGrid"
        templateColumns={{
          base: 'repeat(1, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(5, 1fr)',
        }}
        templateRows={{
          sm: 'repeat(1, 0)',
          lg: 'repeat(2, 1fr)',
        }}
        gap={2}
      >
        <GridItem
          padding={sideBarPadding}
          marginTop={paddTop}
          rowSpan={2}
          colSpan={{ base: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
          display="flex"
          alignContent="center"
          as="div"
          flexDirection="row"
          justifyContent={{ base: 'center', lg: 'flex-start' }}
        >
          <Sidebar />
        </GridItem>

        <GridItem
          as="main"
          padding={mainContent}
          rowSpan={2}
          colSpan={{ base: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
          overflow="hidden"
        >
          <Stack w="100" spacing={4}>
            <FadeInLayout>
              <Box
                id="aboutMe"
                className="contentRow"
                minH={{ lg: '100vh' }}
                display="flex"
                alignItems="center"
                paddingTop={{ base: 0, lg: 10, xl: 0 }}
                paddingBottom={{ base: 2, lg: 0 }}
                flexDirection={{
                  base: 'column-reverse',
                  lg: 'row',
                }}
              >
                <About />
              </Box>
            </FadeInLayout>

            <FadeInLayout>
              <Box
                id="works"
                className="contentRow"
                paddingTop={{ base: 0, lg: 20, xl: 20 }}
                paddingBottom={{ base: 12, lg: 10 }}
                paddingX={0}
                flexDirection="row"
              >
                <FeaturedWorks />
              </Box>
            </FadeInLayout>

            <FadeInLayout>
              <Box
                id="contact"
                className="contentRow"
                paddingX={0}
                flexDirection="row"
              >
                <GetInTouch />
              </Box>
            </FadeInLayout>
          </Stack>
        </GridItem>
      </Grid>
      <ScrollMore />

      <ButterflyButton />
    </Box>
  )
}

export default Portfolio
