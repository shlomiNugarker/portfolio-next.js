import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Link,
  Box,
  Container,
  Divider,
  Button,
} from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'next-i18next'
import Avatar from 'components/Avatar'

const rimuruVariant: Variants = {
  shake: {
    rotate: [0, 15, 0, -15, 0],
    transition: { delay: 1.2, duration: 0.5, repeat: 2, ease: 'easeInOut' },
  },
  jump: {
    y: [0, -25, 0],
    transition: { delay: 1.8, duration: 0.5, repeat: 2, ease: 'easeInOut' },
  },
}

const GetInTouch = () => {
  const { t } = useTranslation('common')
  const [ref, inView] = useInView()

  return (
    <Box
      as="footer"
      width="100%"
      maxW={{ base: '99%', lg: '60%', xl: '75%' }}
      py={16}
      bg="customPeach"
      textAlign="center"
      borderTopWidth={2}
      borderColor="customNavy"
    >
      <Container maxW={{ base: '99%', lg: '60%', xl: '75%' }}>
        <Stack spacing={10} alignItems="center">
          <Heading
            size="2xl"
            fontWeight="bold"
            letterSpacing="wide"
            color="customNavy"
          >
            {t('contact.title')}{' '}
            <Text
              as="span"
              fontSize="2xl"
              fontWeight="normal"
              color="customGreen"
            >
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

          <Divider borderColor="customGreen" w="50%" />

          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color="customNavy"
            px={6}
            maxW="3xl"
            textAlign="center"
          >
            {t('contact.description')}
          </Text>

          <Box mt={4}>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
              <Link
                href="mailto:shlomin1231@gmail.com"
                target="_blank"
                rel="noreferrer"
                color="customGreen"
              >
                shlomin1231@gmail.com
              </Link>
            </Text>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" mt={2}>
              <Link
                href="tel:+972529526762"
                target="_blank"
                rel="noreferrer"
                color="customGreen"
                dir="ltr"
                color="teal.500"
                _hover={{ bg: 'teal.600' }}
              >
                +972 52-952-6762
              </Link>
            </Text>
          </Box>

          <Box mt={4}>
            <Avatar />
          </Box>

          <Button
            as="a"
            href="mailto:shlomin1231@gmail.com"
            size="lg"
            bg="teal.500"
            _hover={{ bg: 'teal.600' }}
            px={8}
            py={6}
            fontSize="lg"
            fontWeight="bold"
            borderRadius="8px"
          >
            {t('contact.button')}
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default memo(GetInTouch)
