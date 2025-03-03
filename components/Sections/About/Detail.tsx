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
  ]
  const technologies2 = [
    { icon: SiReact, label: t('tech.react') },
    { icon: SiNodedotjs, label: t('tech.next') },
  ]

  return (
    <Stack
      textAlign={'center'}
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
      className={styles.skillModal}
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{ fontVariantCaps: 'small-caps' }}
      >
        {t('heading')}
      </Heading>

      <Text variant="description">{t('description')}</Text>

      <SimpleGrid
        columns={2}
        spacing={4}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
      >
        <List
          spacing={5}
          width={'100%'}
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'center'}
          flexWrap={'wrap'}
        >
          {[...technologies, ...technologies2].map(({ icon, label }) => (
            <ListItem
              key={label}
              fontSize="small"
              display="flex"
              alignItems="center"
              maxWidth="30%"
              marginX={2}
              marginY={1}
            >
              <ListIcon as={icon} color={emphasis} fontSize="2em" />
              {label}
            </ListItem>
          ))}
        </List>
      </SimpleGrid>

      <Text variant="description" fontWeight="bold" fontSize="lg">
        {t('call_to_action')}
      </Text>
    </Stack>
  )
}

export default memo(Detail)
