import { Carousel } from "@mantine/carousel";
import { Card, Divider, Group, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import React from "react";
function PaintingsByTechnique() {
  return (
    <>
      <Divider
        my="xl"
        label={
          <Text fz="xl" fw={500}>
            Acrylic painting
          </Text>
        }
      />
      <Carousel
        withIndicators
        height={550}
        slideSize="33.333333%"
        slideGap="md"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        loop
        align="start"
        slidesToScroll={3}
      >
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Acrylic painting 1
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Acrylic painting 2
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Acrylic painting 3
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Acrylic painting 4
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Acrylic painting 5
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Acrylic painting 6
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
      </Carousel>
      <Divider
        my="xl"
        label={
          <Text fz="xl" fw={500}>
            Water Color
          </Text>
        }
      />
      <Carousel
        withIndicators
        height={550}
        slideSize="33.333333%"
        slideGap="md"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        loop
        align="start"
        slidesToScroll={3}
      >
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Water Color 1
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Water Color 2
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Water Color 3
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Water Color 4
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Water Color 5
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Water Color 6
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
      </Carousel>
      <Divider
        my="xl"
        label={
          <Text fz="xl" fw={500}>
            Oil painting
          </Text>
        }
      />
      <Carousel
        withIndicators
        height={550}
        slideSize="33.333333%"
        slideGap="md"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        loop
        align="start"
        slidesToScroll={3}
      >
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Oil painting 2
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Oil painting 3
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Oil painting 4
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Oil painting 5
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Oil painting 6
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
      </Carousel>
      <Divider
        my="xl"
        label={
          <Text fz="xl" fw={500}>
            Technique mixte
          </Text>
        }
      />
      <Carousel
        withIndicators
        height={550}
        slideSize="33.333333%"
        slideGap="md"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        loop
        align="start"
        slidesToScroll={3}
      >
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Technique mixte 1
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Technique mixte 2
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Technique mixte 3
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Technique mixte 4
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Technique mixte 5
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            component={Link}
            variant="link"
            to="/paintings/1"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="The Scream"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <>
                <Text fz="lg" fw={500}>
                  Technique mixte 6
                </Text>
              </>
            </Group>
            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </Carousel.Slide>
      </Carousel>
    </>
  );
}
export default PaintingsByTechnique;
