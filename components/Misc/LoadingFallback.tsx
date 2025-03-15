import {
  Box,
  Skeleton,
  SkeletonText,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { memo } from 'react'

interface LoadingFallbackProps {
  height?: string | { base: string; md: string }
  width?: string | { base: string; md: string }
  lines?: number
}

/**
 * LoadingFallback component for displaying skeletons while content loads.
 *
 * @param height - The height for the skeleton element.
 * @param width - The width of the container.
 * @param lines - Number of lines for the SkeletonText.
 */
const LoadingFallback = memo(
  ({
    height = { base: '150px', md: '200px' },
    width = '100%',
    lines = 3,
  }: LoadingFallbackProps) => {
    // Consolidate repeated color values to optimize hooks usage
    const bgColor = useColorModeValue('white', 'gray.800')
    const borderColor = useColorModeValue('gray.100', 'gray.700')
    const startColor = useColorModeValue('gray.50', 'gray.700')
    const endColor = useColorModeValue('gray.200', 'gray.600')

    return (
      <Box
        width={width}
        padding={4}
        borderRadius="lg"
        bg={bgColor}
        borderWidth="1px"
        borderColor={borderColor}
      >
        <VStack align="stretch" spacing={4}>
          <Skeleton
            height={height}
            borderRadius="md"
            startColor={startColor}
            endColor={endColor}
          />
          <SkeletonText
            noOfLines={lines}
            spacing={4}
            startColor={startColor}
            endColor={endColor}
          />
        </VStack>
      </Box>
    )
  }
)

LoadingFallback.displayName = 'LoadingFallback'

export default LoadingFallback