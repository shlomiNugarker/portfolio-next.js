import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {
  Grid,
  GridItem,
  Stack,
  Box,
  useBreakpointValue,
  BoxProps,
  Spinner,
  Flex,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { Suspense, ReactNode, lazy } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

// Components with static imports
import { OpenGraphHead, ErrorBoundary, LoadingFallback } from 'components/Misc'

// Import the Core components instead of using direct imports
import { AnimatedBox, Container, Section } from 'components/Core'
import { layoutConfig } from 'styles/theme/tokens'
import { useResponsiveLayout } from 'hooks'

// Dynamic imports for better code splitting
const Menu = dynamic(() => import('components/Menu'), {
  loading: () => (
    <Flex justify="center" align="center" h="60px">
      <Spinner size="sm" color="blue.500" />
    </Flex>
  ),
  ssr: true,
})

const Sidebar = dynamic(() => import('components/Sidebar'), {
  loading: () => <LoadingFallback />,
  ssr: true,
})

const FadeInLayout = dynamic(
  () => import('components/Layout/FadeWhenVisible'),
  {
    ssr: true,
  }
)

const LazySection = dynamic(() => import('components/Layout/LazySection'), {
  ssr: false,
})

const About = dynamic(() => import('components/Sections/About'), {
  loading: () => <LoadingFallback />,
  ssr: true,
})

const FeaturedWorks = dynamic(
  () => import('components/Sections/FeaturedWorks'),
  {
    loading: () => <LoadingFallback />,
    ssr: true,
  }
)

const ScrollMore = dynamic(() => import('components/Misc/ScrollMore'), {
  ssr: false,
})

const ButterflyButton = dynamic(
  () => import('components/Misc/ButterflyButton'),
  {
    ssr: false,
  }
)

// Constants
export const SUPPORTED_LOCALES = [
  'en',
  'he',
  'ar',
  'ru',
  'fr',
  'es',
  'de',
  'hi',
] as const
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]

interface PortfolioProps {
  locale: SupportedLocale
}

// Use layoutConfig from theme tokens instead of local definition
const BREAKPOINT_CONFIG = layoutConfig

// Dynamically imported components with proper loading states
const GetInTouch = dynamic(() => import('components/Sections/GetInTouch'), {
  loading: () => <LoadingFallback />,
  ssr: false, // Disable server-side rendering for contact form
})

/**
 * Generate static paths for all supported locales
 */
export const getStaticPaths: GetStaticPaths = async () => ({
  paths: SUPPORTED_LOCALES.map((locale) => ({ params: { locale } })),
  fallback: false, // Return 404 for unsupported locales
})

/**
 * Get static props for the portfolio page with translations
 */
export const getStaticProps: GetStaticProps<PortfolioProps> = async ({
  params,
}) => {
  const locale = (params?.locale as SupportedLocale) || 'en'

  try {
    console.log(`Generating page for locale: ${locale}`)

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
        locale,
      },
    }
  } catch (error) {
    console.error(
      `Failed to build page for locale ${locale}:`,
      error instanceof Error ? error.message : String(error)
    )
    return { notFound: true }
  }
}

// Define interface for ContentSection props
interface ContentSectionProps extends BoxProps {
  id: string
  children: ReactNode
}

/**
 * ContentSection component
 */
const ContentSection = ({ id, children, ...props }: ContentSectionProps) => (
  <AnimatedBox>
    <Box id={id} className="contentRow" {...props}>
      {children}
    </Box>
  </AnimatedBox>
)

/**
 * Main Portfolio component
 */
const Portfolio = ({ locale }: PortfolioProps): JSX.Element => {
  // Use our enhanced responsive layout hook
  const responsive = useResponsiveLayout()

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
          {/* Sidebar section */}
          <GridItem
            padding={responsive.sidebar.padding}
            marginTop={{ base: 4, md: 8, lg: 10 }}
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

          {/* Main content section */}
          <GridItem
            as="main"
            padding={responsive.mainContent.padding}
            rowSpan={2}
            colSpan={{ base: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
            overflow="hidden"
          >
            <Stack w="100%" spacing={responsive.section.gap}>
              {/* About section */}
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

              {/* Works section - lazy loaded */}
              <LazySection id="works" animation="fadeUp" threshold={0.05}>
                <ContentSection
                  paddingTop={{ base: 0, lg: 20, xl: 20 }}
                  paddingBottom={{ base: 12, lg: 10 }}
                  paddingX={0}
                  flexDirection="row"
                >
                  <FeaturedWorks />
                </ContentSection>
              </LazySection>

              {/* Contact section - lazy loaded */}
              <LazySection
                id="contact"
                animation="fadeUp"
                threshold={0.05}
                delay={200}
              >
                <ContentSection paddingX={0} flexDirection="row">
                  <Suspense fallback={<LoadingFallback />}>
                    <GetInTouch />
                  </Suspense>
                </ContentSection>
              </LazySection>
            </Stack>
          </GridItem>
        </Grid>
        <ScrollMore />
        <ButterflyButton />
      </ErrorBoundary>
    </Box>
  )
}

export default Portfolio
