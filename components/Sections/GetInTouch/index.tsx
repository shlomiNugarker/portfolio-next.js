import { memo } from 'react'
import { Heading, Text, Stack, Link, Icon, Box } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { RiHeartPulseFill, RiCopyleftLine, RiGithubFill } from 'react-icons/ri'
const rimuruVariant: Variants = {
  shake: {
    rotate: [0, 15, 0, -15, 0],
    transition: {
      delay: 1.2,
      duration: 0.5,
      repeat: 2,
      ease: 'easeInOut',
    },
  },
  jump: {
    y: [0, -35, 0],
    transition: {
      delay: 1.8,
      duration: 0.5,
      repeat: 3,
      ease: 'easeInOut',
    },
  },
}

const GetInTouch = () => {
  const [ref, inView] = useInView()
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
      as="footer"
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Say hi!{' '}
        <Text as="span" fontSize="2xl" variant="emphasis">
          <motion.div
            style={{ display: 'inline-block' }}
            variants={rimuruVariant}
            ref={ref}
            animate={inView ? ['shake', 'jump'] : false}
          >
            (⁀ᗢ⁀)
          </motion.div>
        </Text>
      </Heading>
      <Text variant="description">
         While I tend to be more on the introverted side, I'm always open to meaningful discussions—especially about web development, technology, or complex application architecture. If you're looking to collaborate, have a project idea, or just want to chat about coding, feel free to reach out via social media or
        <Link
          href="mailto:shlomin1231@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          email
        </Link>
      </Text>
      <Text variant="contact">
        <Link
          href="mailto:shlomin1231@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          shlomin1231@gmail.com
        </Link>
        <br />
        <Link href="tel:+972529526762" target="_blank" rel="noreferrer">
          0529526762
        </Link>
      </Text>
    </Stack>
  )
}

export default memo(GetInTouch)
