import { memo } from 'react'
import {
  Stack,
  Flex,
  Box,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
} from 'react-icons/si'
import { useTranslation } from 'next-i18next'
import styles from './styles.module.css'
import { StyledText } from 'components/Core/Typography'
import {
  AnimatedBox,
  AnimatedContainer,
  slideInRight,
  fadeInUp,
} from 'components/Core/Animated'
import useThemeStyles from 'hooks/theme/useThemeStyles'

/**
 * About Detail component displays information about skills and technologies
 */
const Detail = () => {
  const { t } = useTranslation('common')
  const { getPrimaryColor, getSecondaryColor } = useThemeStyles()

  const technologies = [
    { icon: SiJavascript, label: t('tech.js') },
    { icon: SiTypescript, label: t('tech.ts') },
    { icon: SiNodedotjs, label: t('tech.node') },
    { icon: SiReact, label: t('tech.react') },
    { icon: SiNextdotjs, label: t('tech.next') },
  ]

  // Create dynamic backgrounds
  const bgGradient = useColorModeValue(
    'linear(to-br, rgba(255,255,255,0.01), rgba(230,240,255,0.05))',
    'linear(to-br, rgba(0,10,20,0.3), rgba(10,20,30,0.1))'
  )
  
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const techBg = useColorModeValue('whiteAlpha.700', 'blackAlpha.400')

  return (
    <Box
      as={Stack}
      textAlign="center"
      width={{ base: '100%', lg: '70%' }}
      paddingX={{ base: 4, md: 8 }}
      paddingY={{ base: 6, md: 10 }}
      marginY={5}
      borderRadius="xl"
      className={`${styles.skillModal} ${styles.glassCard}`}
      alignItems="center"
      bg={bgGradient}
      boxShadow="lg"
      borderWidth="1px"
      borderColor={borderColor}
      position="relative"
      overflow="hidden"
      spacing={6}
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="-20px"
        right="-20px"
        width="150px"
        height="150px"
        borderRadius="full"
        bgGradient={`radial(${getPrimaryColor()}, transparent)`}
        opacity="0.15"
        zIndex="0"
      />
      
      <Box
        position="absolute"
        bottom="-30px"
        left="-30px"
        width="180px"
        height="180px"
        borderRadius="full"
        bgGradient={`radial(${getSecondaryColor()}, transparent)`}
        opacity="0.1"
        zIndex="0"
      />

      <AnimatedBox
        width="full"
        animationVariant={fadeInUp}
        delay={0.2}
        zIndex="1"
      >
        <StyledText 
          variant="gradient" 
          fontSize={{ base: 'xl', md: '2xl' }} 
          fontWeight="bold" 
          mb={2}
          letterSpacing="wide"
          textShadow="0 0 20px rgba(0,100,255,0.1)"
        >
          {t('description')}
        </StyledText>
      </AnimatedBox>

      <Divider width="30%" borderColor={getPrimaryColor()} opacity="0.3" />

      <AnimatedContainer width="full" zIndex="1">
        <Flex flexWrap="wrap" justifyContent="center" width="100%">
          {technologies.map(({ icon, label }, index) => (
            <AnimatedBox
              key={label}
              animationVariant={slideInRight}
              delay={0.1 * (index + 1)}
              className={styles.techItem}
              m={{ base: 2, md: 3 }}
              borderRadius="lg"
              boxShadow="md"
              p={{ base: 3, md: 4 }}
              bg={techBg}
              borderWidth="1px"
              borderColor={borderColor}
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: 'xl',
                borderColor: getPrimaryColor(),
              }}
            >
              <Flex direction="column" align="center">
                <Box
                  className={styles.techIcon}
                  mb={2}
                  color={
                    index % 2 === 0 ? getPrimaryColor() : getSecondaryColor()
                  }
                >
                  <Box
                    as={icon}
                    fontSize={{ base: '2em', md: '2.5em' }}
                    mb={2}
                  />
                </Box>
                <StyledText fontWeight="medium">{label}</StyledText>
              </Flex>
            </AnimatedBox>
          ))}
        </Flex>
      </AnimatedContainer>

      <Divider width="30%" borderColor={getPrimaryColor()} opacity="0.3" />

      <AnimatedBox
        width="full"
        animationVariant={fadeInUp}
        delay={0.3}
        zIndex="1"
        mt={2}
      >
        <StyledText
          variant="gradient" 
          fontWeight="bold" 
          fontSize={{ base: 'lg', md: 'xl' }}
          letterSpacing="wide"
        >
          {t('call_to_action')}
        </StyledText>
      </AnimatedBox>
    </Box>
  )
}

export default memo(Detail)
