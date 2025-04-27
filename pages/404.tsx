import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Stack,
  Container,
  useColorModeValue
} from '@chakra-ui/react';

const NotFound: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <>
      <Head>
        <title>{t('404.title')}</title>
        <meta name="description" content={t('404.description') as string} />
      </Head>
      <Box 
        as="main" 
        minH="100vh" 
        display="flex" 
        alignItems="center" 
        justifyContent="center"
        bg={bgColor}
        color={textColor}
      >
        <Container maxW="container.md" textAlign="center">
          <Stack spacing={6}>
            <Heading as="h1" size="4xl" fontWeight="bold">
              {t('404.heading')}
            </Heading>
            <Heading as="h2" size="xl">
              {t('404.subheading')}
            </Heading>
            <Text fontSize="lg">
              {t('404.description')}
            </Text>
            <Flex justifyContent="center" gap={4} mt={4}>
              <Button 
                onClick={() => router.back()}
                variant="outline"
                size="md"
              >
                {t('404.go_back')}
              </Button>
           
              <Button 
                as={Link} 
                href="/" 
                colorScheme="blue" 
                size="md"
              >
                {t('404.go_home')}
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale?: string }) => {
  // קבע ברירת מחדל 'en' אם locale הוא undefined
  const safeLocale = locale || 'en';
  
  return {
    props: {
      ...(await serverSideTranslations(safeLocale, ['common'])),
    },
  };
};

export default NotFound; 