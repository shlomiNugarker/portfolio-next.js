import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextDotJs,
  SiNodeDotJs,
} from 'react-icons/si'

const Detail = () => {
  const emphasis: string = useColorModeValue('teal.500', 'cyan.200')

  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{ fontVariantCaps: 'small-caps' }}
      >
        Unlock Your Digital Potential
      </Heading>
      <Text variant="description">
        I craft high-performance, scalable, and visually stunning web
        applications that drive business growth. Whether you're a startup or an
        established company, I create tailored digital solutions that elevate
        your brand and engage your customers.
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
            Modern JavaScript (ES6+)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            TypeScript for Scalable Applications
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNodeDotJs} color={emphasis} fontSize="2em" />
            Robust Backend with Node.js
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            Dynamic UI with React
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextDotJs} color={emphasis} fontSize="2em" />
            SEO-Optimized Web Apps with Next.js
          </ListItem>
        </List>
      </SimpleGrid>
      <Text variant="description" fontWeight="bold" fontSize="lg">
        Let's build something exceptional together. Contact me today to discuss
        your project.
      </Text>
    </Stack>
  )
}

export default memo(Detail)
