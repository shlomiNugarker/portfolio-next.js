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
import { fadeInUp, simpleOpacity, stagger, scaleUp } from 'config/animations'
import { SocialMedias } from 'config/sidebar'

const Sidebar = () => {
  const { colorMode } = useColorMode()
  const display = useBreakpointValue({ base: 'none', lg: 'block' })
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
            Welcome! I'm
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
            Passionate about building innovative, high-performance web
            applications tailored to business needs. With expertise in Node.js,
            React, Next.js, and PostgreSQL, I create powerful, scalable
            solutions that drive success. Whether you're launching a new project
            or optimizing an existing one, I'm here to turn your ideas into
            reality.
          </MotionText>
          <MotionButton
            size="lg"
            variant="solid"
            bg="teal.500"
            color="white"
            fontWeight="bold"
            fontSize="sm"
            width="180px"
            variants={simpleOpacity}
            as={'a'}
            href="mailto:shlomin1231@gmail.com"
            target="_blank"
            _hover={{ bg: 'teal.600' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Let's Collaborate!
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
