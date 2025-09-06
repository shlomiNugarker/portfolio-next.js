import { memo } from 'react'
import {
  Box,
  Button,
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { ActionButton } from '../types'
import { fadeInUp } from 'config/animations'
import useThemeStyles from 'hooks/theme/useThemeStyles'

const MotionBox = motion(Box)

interface ProjectModalFooterProps {
  onClose: () => void
  buttons: ActionButton[]
  borderColor: string
}

/**
 * Modern footer with enhanced action buttons and better UX
 */
const ProjectModalFooter = memo(
  ({ onClose, buttons, borderColor }: ProjectModalFooterProps) => {
    const { t } = useTranslation('common')
    const { getMutedTextColor } = useThemeStyles()

    const footerBg = useColorModeValue('gray.50', 'gray.900')
    const gradientBg = useColorModeValue(
      'linear(to-r, blue.50, purple.50)',
      'linear(to-r, blue.900, purple.900)'
    )

    return (
      <Box
        width="100%"
        bg={footerBg}
        borderTopWidth="1px"
        borderTopColor={borderColor}
        position="relative"
        overflow="hidden"
      >
        {/* Background Gradient */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient={gradientBg}
          opacity={0.2}
        />

        <Box position="relative" zIndex={1} p={4}>
          <MotionBox initial="initial" animate="animate" variants={fadeInUp}>
            <VStack spacing={4} align="stretch">
              {/* Quick Info */}
              <Box textAlign="center">
                <Text
                  fontSize="sm"
                  color={getMutedTextColor()}
                  fontWeight="500"
                >
                  {t('projects.modal_footer_text') ||
                    'Explore the project through demo, code, or video'}
                </Text>
              </Box>

              <Divider borderColor={borderColor} />

              {/* Action Buttons */}
              <HStack
                justify="space-between"
                align="center"
                spacing={4}
                flexWrap={{ base: 'wrap', md: 'nowrap' }}
              >
                {/* Close Button */}
                <Button
                  leftIcon={<FaTimes />}
                  onClick={onClose}
                  variant="ghost"
                  size="lg"
                  borderRadius="full"
                  px={6}
                  _hover={{
                    bg: useColorModeValue('gray.200', 'gray.700'),
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.2s"
                  order={{ base: 2, md: 1 }}
                  w={{ base: '100%', md: 'auto' }}
                >
                  {t('close') || 'Close'}
                </Button>

                {/* Action Buttons */}
                <HStack
                  spacing={3}
                  justify="flex-end"
                  order={{ base: 1, md: 2 }}
                  w={{ base: '100%', md: 'auto' }}
                  flexWrap={{ base: 'wrap', sm: 'nowrap' }}
                >
                  {buttons.map((button, index) => (
                    <Button
                      key={`${button.label}-${index}`}
                      as={button.onClick ? undefined : 'a'}
                      href={button.onClick ? undefined : button.url}
                      target={button.isExternal ? '_blank' : undefined}
                      rel={button.isExternal ? 'noreferrer' : undefined}
                      onClick={button.onClick}
                      leftIcon={button.icon}
                      colorScheme={button.colorScheme}
                      variant={button.variant || 'solid'}
                      size="lg"
                      borderRadius="full"
                      px={6}
                      py={3}
                      fontWeight="600"
                      boxShadow="lg"
                      _hover={{
                        transform: 'translateY(-3px)',
                        boxShadow: 'xl',
                      }}
                      _active={{
                        transform: 'translateY(-1px)',
                      }}
                      transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                      flex={{ base: 1, sm: 'none' }}
                      minW={{ base: 'auto', sm: '140px' }}
                    >
                      {button.label}
                    </Button>
                  ))}
                </HStack>
              </HStack>
            </VStack>
          </MotionBox>
        </Box>
      </Box>
    )
  }
)

ProjectModalFooter.displayName = 'ProjectModalFooter'

export default ProjectModalFooter
