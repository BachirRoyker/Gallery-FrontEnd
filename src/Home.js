import {
  AspectRatio,
  BackgroundImage,
  Card,
  Center,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Stack spacing="xl">
        <Title order={1}>Bienvenu sur E-Gallery</Title>
        <AspectRatio ratio={1920 / 1268} sx={{ maxWidth: 300 }} mx="auto">
          <BackgroundImage
            src="https://images8.alphacoders.com/613/thumb-1920-613205.jpg"
            radius="xs"
          >
            <Center p="md">
              <Text color="#fff">
                BackgroundImage component can be used to add any content on
                image. It is useful for hero headers and other similar sections
              </Text>
            </Center>
          </BackgroundImage>
        </AspectRatio>
        <Grid>
          <Grid.Col span={4}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  height={350}
                  src="https://wallpapercave.com/wp/wp3059937.jpg"
                  alt="The Scream"
                />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text
                  component={Link}
                  variant="link"
                  to="/paintings"
                  weight={500}
                >
                  Paintings
                </Text>
              </Group>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src="https://www.wallpapersdsc.net/wp-content/uploads/2017/04/Statue-4K.jpg"
                  alt="Norway"
                  height={350}
                />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Sculptures</Text>
              </Group>

              <Text size="sm" color="dimmed">
                les sculptures
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  alt="Norway"
                  height={350}
                />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Photos</Text>
              </Group>

              <Text size="sm" color="dimmed">
                les photos
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={6}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src="https://www.ihbartmedia.com/wp-content/uploads/2022/05/Webp.net-resizeimage.jpg"
                  alt="Norway"
                  height={350}
                />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Pôle Audio Visuel</Text>
              </Group>

              <Text size="sm" color="dimmed">
                Text sur ce que je peut faire dans l'audio visuel
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={6}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src="https://lartisanplus.com/wp-content/uploads/2019/10/Artisan-Plus-Mat%C3%A9riel-Artiste-Ao%C3%BBt-2019-1-864x577.jpg"
                  height={350}
                  alt="Norway"
                />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Le Shop</Text>
              </Group>

              <Text size="sm" color="dimmed">
                Text sur ce que propose notre boutique
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>
    </>
  );
}
export default Home;
