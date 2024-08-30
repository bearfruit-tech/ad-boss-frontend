'use client';

import React from 'react';
import { Container, Title, Text, Button, Stack, Box, Grid, Paper, Center } from '@mantine/core';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    return (
        <Box bg="gray.0" py={{ base: 'xl', sm: '2xl' }} style={{
            height: 'calc(100vh - 80px)',
            marginTop: '4rem',
        }}>

            <Grid>
                <Grid.Col span={4}>
                    <Paper shadow="lg" p="xl" m={16} style={
                        {
                            backgroundImage: `linear-gradient(-70deg, #e4bb90 0%, #3f3f58 100%)`,
                            color: 'white',
                            fontWeight: 'bold',
                            margin: '16px',
                            cursor: 'pointer',
                        }
                    }>
                        <Center m={16}>ADVERTISING SOLUTIONS</Center>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Paper shadow="lg" p="xl" m={16} style={
                        {
                            backgroundImage: `linear-gradient(-70deg, #e4bb90 0%, #3f3f58 100%)`,
                            color: 'white',
                            fontWeight: 'bold',
                            margin: '16px',
                            cursor: 'pointer',
                        }
                    }>
                        <Center m={16}>MEDIA PLANNING</Center>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={4}><Paper shadow="lg" p="xl" m={16} style={
                        {
                            backgroundImage: `linear-gradient(-70deg, #e4bb90 0%, #3f3f58 100%)`,
                            color: 'white',
                            fontWeight: 'bold',
                            margin: '16px',
                            cursor: 'pointer',
                        }
                    }>
                    <Center m={16}>MARKET RESEARCH</Center>
                </Paper></Grid.Col>
                <Grid.Col span={4}><Paper shadow="lg" p="xl" m={16} style={
                        {
                            backgroundImage: `linear-gradient(-70deg, #e4bb90 0%, #3f3f58 100%)`,
                            color: 'white',
                            fontWeight: 'bold',
                            margin: '16px',
                            cursor: 'pointer',
                        }
                    }>
                    <Center m={16}>BRAND MANAGEMENT</Center>
                </Paper></Grid.Col>
                <Grid.Col span={4}><Paper shadow="lg" p="xl" m={16} style={
                        {
                            backgroundImage: `linear-gradient(-70deg, #e4bb90 0%, #3f3f58 100%)`,
                            color: 'white',
                            fontWeight: 'bold',
                            margin: '16px',
                            cursor: 'pointer',
                        }
                    }>
                    <Center m={16}>DIGITAL MARKETING</Center>
                </Paper></Grid.Col>
                <Grid.Col span={4}><Paper shadow="lg" p="xl" m={16} style={
                        {
                            backgroundImage: `linear-gradient(-70deg, #e4bb90 0%, #3f3f58 100%)`,
                            color: 'white',
                            fontWeight: 'bold',
                            margin: '16px',
                            cursor: 'pointer',
                        }
                    }>
                    <Center m={16}>BUSINESS AND MARKETING STRATEGY</Center>
                </Paper></Grid.Col>
            </Grid>
        </Box>
    );
}