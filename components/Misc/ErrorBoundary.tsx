import React, { Component, ErrorInfo, ReactNode } from 'react'
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

const ErrorFallback = ({ onReset }: { onReset: () => void }) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Container maxW="4xl" py={10}>
      <Box
        p={6}
        bg={bgColor}
        borderRadius="lg"
        border="1px"
        borderColor={borderColor}
      >
        <VStack spacing={4} align="flex-start">
          <Heading size="md">Something went wrong 😕</Heading>
          <Text>
            Don&apos;t worry! You can try refreshing the page or clicking the
            button below.
          </Text>
          <Button onClick={onReset} colorScheme="blue" size="sm">
            Try Again
          </Button>
        </VStack>
      </Box>
    </Container>
  )
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by error boundary:', error)
    console.error('Error info:', errorInfo)
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null })
    window.location.reload()
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorFallback onReset={this.handleReset} />
    }

    return this.props.children
  }
}

export default ErrorBoundary
