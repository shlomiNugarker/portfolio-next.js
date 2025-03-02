import {
  Stack,
  Heading,
  Text,
  Button,
  useColorMode,
  Container,
  Link,
  Box,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import {
  fadeInUp,
  letterSpace,
  simpleOpacity,
  stagger,
  scaleUp,
} from 'config/animations'
import { SocialMedias } from 'config/sidebar'

const Sidebar = () => {
  const { colorMode } = useColorMode()
  const display = useBreakpointValue({ base: 'none', lg: 'block' })
  const surNameSize = useBreakpointValue({ base: '3xl', md: '4xl' })
  const MotionHeading = motion(Heading)
  const MotionText = motion(Text)
  const MotionStack = motion(Stack)
  const MotionButton = motion(Button)
  const MotionBox = motion(Box)

  return (
    <MotionBox
      initial="initial"
      animate="animate"
      position={{ xl: 'fixed' }}
      maxWidth={{ xl: '34%' }}
      top={{ lg: 0 }}
    >
      <motion.div
        id="sidebarCircle"
        className={`${styles.sidebar} ${
          colorMode === 'light' ? styles.dark : ''
        }`}
        variants={scaleUp}
        style={{ display: display }}
        animate={colorMode === 'dark' ? 'animate' : 'lightMode'}
      ></motion.div>
      <Container
        padding={0}
        margin={0}
        height={{ xl: '100vh' }}
        display={{ xl: 'flex' }}
        alignItems={{ xl: 'center' }}
      >
        <MotionStack variants={stagger} spacing={6} w="100">
          <MotionText variants={fadeInUp} variant="accent" fontWeight="light">
            Ohh you found me?. Howdy! I am
          </MotionText>
          <MotionHeading
            as="h1"
            size="2xl"
            paddingRight={{ lg: '20' }}
            textTransform="uppercase"
            variants={fadeInUp}
          >
            Shlomi Nugarker
          </MotionHeading>
          <MotionHeading
            as="h2"
            size={surNameSize}
            variant="emphasis"
            className={styles.marginTopForce}
            textTransform="uppercase"
            variants={letterSpace}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          ></MotionHeading>

          <MotionHeading
            as="h3"
            size="xl"
            variant="emphasis"
            className={styles.marginTopSmall}
            variants={fadeInUp}
          >
            Fullstack Developer
          </MotionHeading>

          <MotionText
            variant="description"
            fontSize="md"
            paddingRight={{ lg: '12' }}
            variants={fadeInUp}
            maxWidth={{ base: '100%', lg: '80%' }}
          >
            Hey there! Thanks for stopping by my portfolio—I truly appreciate
            it. I'm a Full-Stack Web Developer with a passion for building
            scalable, high-performance web applications. Using modern
            technologies like Node.js, React.js, Next.js, TypeScript, and
            PostgreSQL, I craft efficient, well-architected solutions tailored
            to business needs. I thrive on solving complex development
            challenges, optimizing performance, and writing clean, maintainable
            code. If you're looking for a developer who can bring your vision to
            life with a powerful, fully functional web application—let’s
            connect!
          </MotionText>
          <MotionButton
            size="lg"
            variant="solid"
            bg="teal.500"
            color="white"
            fontWeight="bold"
            fontSize="sm"
            width="150px"
            variants={simpleOpacity}
            as={'a'}
            href="mailto:shlomin1231@gmail.com"
            target="_blank"
            _hover={{ bg: 'teal.600' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get in touch!
          </MotionButton>

          <MotionBox d="flex" variants={simpleOpacity}>
            {SocialMedias.map((socMedia) => (
              <Link
                variant="description"
                key={socMedia.label}
                aria-label={socMedia.label}
                rel="noreferrer"
                width={8}
                href={socMedia.href}
                target="_blank"
                _focus={{ boxShadow: 'none' }}
              >
                <Icon w={6} h={6} as={socMedia.icon} color="currentColor" />
              </Link>
            ))}
          </MotionBox>
        </MotionStack>
      </Container>
    </MotionBox>
  )
}

export default Sidebar
