
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
  
  const LoadingFallback = memo(({
    height = { base: '150px', md: '200px' },
    width = '100%',
    lines = 3,
  }: LoadingFallbackProps) => {
    const bgColor = useColorModeValue('white', 'gray.800')
    const borderColor = useColorModeValue('gray.100', 'gray.700')
  
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
            startColor={useColorModeValue('gray.50', 'gray.700')}
            endColor={useColorModeValue('gray.200', 'gray.600')}
          />
          
          <SkeletonText
            noOfLines={lines}
            spacing={4}
            startColor={useColorModeValue('gray.50', 'gray.700')}
            endColor={useColorModeValue('gray.200', 'gray.600')}
          />
        </VStack>
      </Box>
    )
  })
  
  LoadingFallback.displayName = 'LoadingFallback'
  
  export default LoadingFallback