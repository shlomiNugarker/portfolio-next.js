import {
  SimpleGrid,
  SimpleGridProps,
  GridItem,
  GridItemProps,
  Box,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ResponsiveGridProps extends Omit<SimpleGridProps, 'autoFlow'> {
  children: ReactNode
  itemMinWidth?: string | number
  useAutoFlow?: boolean
  centerItems?: boolean
}

interface GridCardProps extends GridItemProps {
  children: ReactNode
}

/**
 * ResponsiveGrid component for creating responsive grid layouts
 * Uses Chakra UI's SimpleGrid with enhancements for common use cases
 */
export const ResponsiveGrid = ({
  children,
  columns,
  spacing = { base: 4, md: 6 },
  itemMinWidth = '280px',
  useAutoFlow = false,
  centerItems = false,
  ...props
}: ResponsiveGridProps) => {
  // If auto flow is enabled, use gridTemplateColumns instead of columns prop
  const gridProps = useAutoFlow
    ? {
        gridTemplateColumns: `repeat(auto-fill, minmax(${itemMinWidth}, 1fr))`,
      }
    : { columns }

  return (
    <SimpleGrid
      display="grid"
      // gridTemplateColumns={{
      //   base: 'repeat(1, 1fr)',
      //   sm: 'repeat(2, 1fr)',
      //   md: 'repeat(3, 1fr)',
      //   lg: 'repeat(4, 1fr)',
      // }}
      gap={{ base: 4, md: 6 }}
      spacing={spacing}
      width="100%"
      {...gridProps}
      justifyItems={centerItems ? 'center' : 'stretch'}
      alignItems={centerItems ? 'center' : 'stretch'}
      {...props}
    >
      {children}
    </SimpleGrid>
  )
}

/**
 * GridCard component for grid item cards
 * Provides consistent styling for grid items
 */
export const GridCard = ({ children, ...props }: GridCardProps) => {
  return (
    <GridItem
      width="100%"
      borderRadius="lg"
      overflow="hidden"
      transition="all 0.3s ease-in-out"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'md',
      }}
      {...props}
    >
      <Box height="100%" width="100%">
        {children}
      </Box>
    </GridItem>
  )
}

export default {
  Grid: ResponsiveGrid,
  Card: GridCard,
}
