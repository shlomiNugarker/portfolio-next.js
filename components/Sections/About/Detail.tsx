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
import { useTranslation } from 'next-i18next'

const Detail = () => {
  const { t } = useTranslation('common') // 🔹 תמיכה בתרגום
  const emphasis = useColorModeValue('teal.500', 'cyan.200')

  // 🔹 רשימה של טכנולוגיות כדי למנוע חזרות בקוד
  const technologies = [
    { icon: SiJavascript, label: t('tech.js') },
    { icon: SiTypescript, label: t('tech.ts') },
    { icon: SiNodeDotJs, label: t('tech.node') },
  ]
  const technologies2 = [
    { icon: SiReact, label: t('tech.react') },
    { icon: SiNextDotJs, label: t('tech.next') },
  ]

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
        {t('heading')}
      </Heading>

      <Text variant="description">{t('description')}</Text>

      <SimpleGrid columns={2} spacing={4}>
        {/* 🔹 חיסכון בחזרות ע"י שימוש במפת טכנולוגיות */}
        <List spacing={3}>
          {technologies.map(({ icon, label }) => (
            <ListItem
              key={label}
              fontSize="small"
              display="flex"
              alignItems="center"
            >
              <ListIcon as={icon} color={emphasis} fontSize="2em" />
              {label}
            </ListItem>
          ))}
        </List>

        <List spacing={3}>
          {technologies2.map(({ icon, label }) => (
            <ListItem
              key={label}
              fontSize="small"
              display="flex"
              alignItems="center"
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
