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
  SiNodedotjs,
} from 'react-icons/si'
import { useTranslation } from 'next-i18next'
import styles from './styles.module.css'

const Detail = () => {
  const { t } = useTranslation('common')
  const emphasis = useColorModeValue('teal.500', 'cyan.200')

  const technologies = [
    { icon: SiJavascript, label: t('tech.js') },
    { icon: SiTypescript, label: t('tech.ts') },
    { icon: SiNodedotjs, label: t('tech.node') },
    { icon: SiReact, label: t('tech.react') },
    { icon: SiNodedotjs, label: t('tech.next') },
  ]

  return (
    <Stack
      as="section"
      textAlign="center"
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      padding={4}
      marginY={5}
      borderRadius="md"
      className={styles.skillModal}
      alignItems="center"
    >
      <Text variant="description" fontSize="lg" fontWeight="bold" mb={6}>
        {t('description')}
      </Text>

      <SimpleGrid
        columns={{ base: 1, md: 1 }}
        spacing={4}
        justifyItems="center"
      >
        <List
          display="flex"
          flexWrap="wrap"
          justifyItems={'center'}
          justifyContent="center"
          width="100%"
        >
          {technologies.map(({ icon, label }) => (
            <ListItem
              key={label}
              display="flex"
              alignItems="center"
              m={3}
              borderRadius="md"
            >
              <ListIcon as={icon} color={emphasis} fontSize="2em" mr={2} />
              {label}
            </ListItem>
          ))}
        </List>
      </SimpleGrid>

      <Text variant="description" fontWeight="bold" fontSize="lg" mt={6}>
        {t('call_to_action')}
      </Text>
    </Stack>
  )
}

export default memo(Detail)
