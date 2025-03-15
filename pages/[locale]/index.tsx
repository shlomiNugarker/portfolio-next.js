import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {
  Grid,
  GridItem,
  Stack,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { memo, Suspense } from 'react'
import OpenGraphHead from 'components/Misc/OpenGraphHead'
import FadeInLayout from 'components/Layout/FadeWhenVisible'
import Menu from 'components/Menu'
import Sidebar from 'components/Sidebar'
import About from 'components/Sections/About'
import FeaturedWorks from 'components/Sections/FeaturedWorks'
import ScrollMore from 'components/Misc/ScrollMore'
import ErrorBoundary from 'components/Misc/ErrorBoundary' // You'll need to create this
import LoadingFallback from 'components/Misc/LoadingFallback' // You'll need to create this

import { GetStaticPaths, GetStaticProps } from 'next'
import ButterflyButton from 'components/Misc/ButterflyButton'

// Constants
const SUPPORTED_LOCALES = ['en', 'he', 'ar', 'ru', 'fr', 'es', 'de', 'hi'] as const
type SupportedLocale = typeof SUPPORTED_LOCALES[number]

const BREAKPOINT_CONFIG = {
  sideBarPadding: { base: '5', md: '8', lg: '14' },
  mainContent: { base: '5', md: '14', lg: '14', xl: '0' },
  topPadding: { base: '20', sm: '20', md: '20' },
  gridColumns: {
    base: 'repeat(1, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(5, 1fr)',
  },
  gridRows: {
    sm: 'repeat(1, 0)',
    lg: 'repeat(2, 1fr)',
  },
} as const

// Dynamically imported components with loading states
const GetInTouch = dynamic(() => import('components/Sections/GetInTouch'), {
  loading: () => <LoadingFallback />,
  ssr: false,
})

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: SUPPORTED_LOCALES.map((locale) => ({ params: { locale } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const locale = (params?.locale as SupportedLocale) || 'en'
  
  try {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
        locale,
      },
    }
  } catch (error) {
    console.error(`Failed to build page for locale ${locale}:`, error)
    return { notFound: true }
  }
}

// Memoized content sections
const ContentSection = memo(({ id, children, ...props }: any) => (
  <FadeInLayout>
    <Box id={id} className="contentRow" {...props}>
      {children}
    </Box>
  </FadeInLayout>
))
ContentSection.displayName = 'ContentSection'

const Portfolio = (): JSX.Element => {
  const sideBarPadding = useBreakpointValue(BREAKPOINT_CONFIG.sideBarPadding)
  const mainContent = useBreakpointValue(BREAKPOINT_CONFIG.mainContent)
  const paddTop = useBreakpointValue(BREAKPOINT_CONFIG.topPadding)

  return (
    <Box overflowX="hidden">
      <OpenGraphHead />
      <ErrorBoundary>
        <Menu />
        <Grid
          id="mainGrid"
          templateColumns={BREAKPOINT_CONFIG.gridColumns}
          templateRows={BREAKPOINT_CONFIG.gridRows}
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
              <ContentSection
                id="aboutMe"
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
              </ContentSection>

              <ContentSection
                id="works"
                paddingTop={{ base: 0, lg: 20, xl: 20 }}
                paddingBottom={{ base: 12, lg: 10 }}
                paddingX={0}
                flexDirection="row"
              >
                <FeaturedWorks />
              </ContentSection>

              <ContentSection
                id="contact"
                paddingX={0}
                flexDirection="row"
              >
                <Suspense fallback={<LoadingFallback />}>
                  <GetInTouch />
                </Suspense>
              </ContentSection>
            </Stack>
          </GridItem>
        </Grid>
        <ScrollMore />
        <ButterflyButton />
      </ErrorBoundary>
    </Box>
  )
}

export default memo(Portfolio)