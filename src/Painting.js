import {
  Avatar,
  Button,
  Divider,
  Grid,
  Image,
  Spoiler,
  Stack,
  Text,
} from "@mantine/core";
import { IconHeart, IconHomeHeart } from "@tabler/icons";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import AddToCartSection from "./AddToCartSection";

function Painting() {
  const params = useParams();
  const comments = ["1er commentaire", "2nd comentaire", "3rd commentaire"];
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };
  return (
    <>
      <Grid>
        <Grid.Col span={8}>
          <Image
            height={750}
            src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            alt="Panda"
          />
          <Divider my="sm" />
          <Stack spacing="xl">
            <Grid>
              <Grid.Col span={2}>
                <Avatar
                  radius="xl"
                  size="xl"
                  color="red"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                />
              </Grid.Col>
              <Grid.Col span={7}>
                <Grid>
                  <Grid.Col span={6}>
                    <Text>Nom De l'artiste</Text>
                    <Text>Région de l'artiste</Text>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Button>
                      <IconHeart />
                      Suivre Cet Artiste
                    </Button>
                  </Grid.Col>
                </Grid>
                <Text fz="xs">Artiste KAZoART depuis 2018</Text>
                <Text fz="xs">16 œuvres vendues</Text>
                <Text fz="xs">51 œuvres</Text>
              </Grid.Col>
            </Grid>
            <Spoiler maxHeight={70} showLabel="Show more" hideLabel="Hide">
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged.What is Lorem Ipsum? Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged.What is Lorem Ipsum? Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged.
            </Spoiler>
          </Stack>
        </Grid.Col>
        <Grid.Col span={4}>
          <AddToCartSection />
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={7}></Grid.Col>

        <Grid.Col span={5}>
          <Stack></Stack>
        </Grid.Col>
      </Grid>

      <div style={{ margin: "20px" }}>
        <Text fz="lg">Commentaires</Text>
        <Button onClick={toggleComments}>
          {showComments
            ? "Masquer les commentaires"
            : "Afficher les commentaires"}
        </Button>

        {showComments && (
          <div>
            {comments.map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default Painting;
