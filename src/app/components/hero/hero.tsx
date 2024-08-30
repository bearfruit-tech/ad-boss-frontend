import React from 'react';
import { Container, Title, Text, Button, Stack, Box } from '@mantine/core';

export default function Hero() {
  return (
    <Box bg="gray.0" py={{ base: 'xl', sm: '2xl' }} style={{
        height: 'calc(100vh - 80px)',
    }}>
      <Container size="lg" style={{
        height: '100%',
      }}>
        <Stack align="center">
          <Title
            order={1}
            size="h1"
            fw={900}
            ta="center"
            c="dark.8"
            style={{fontSize: '4rem', fontWeight: 900, color: 'green !important'}}
          >
            Empowering Brands
          </Title>
          <Text
            size="lg"
            c="gray.7"
            maw={600}
            ta="center"
          >
            Developing brands that challenge the status quo through innovative and creative strategies, 
            forging a powerful and distinct brand presence in the market.
          </Text>
          <Button
            size="lg"
            radius="md"
            mt="xl"
          >
            Get Started
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}