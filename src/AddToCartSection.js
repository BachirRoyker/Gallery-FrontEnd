import {
  Badge,
  Chip,
  Divider,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { IconHeart, IconHelp } from "@tabler/icons";
import React from "react";
import { Button } from "react-bootstrap";

function AddToCartSection() {
  const elements = [
    { libelle: "Technique", valeur: "Technique mixte" },
    { libelle: "Tirage ", valeur: "Oeuvre  Unique" },
    { libelle: "Support", valeur: "Bois" },
    { libelle: "Dimensions", valeur: "80 H x 60 L x 1 P cm" },
    { libelle: "Encadrement", valeur: "Oui/Non" },
  ];
  const rows = elements.map((element) => (
    <tr key={element.libelle}>
      <td>{element.libelle}</td>
      <td>{element.valeur}</td>
    </tr>
  ));
  return (
    <>
      <Stack spacing="xs">
        <Text fz="lg">Nom de la Toile</Text>
        <Text fz="lg">Nom de l'artiste</Text>
        <SimpleGrid cols={3}>
          <Badge>Badge 1</Badge>
          <Badge>Badge 2</Badge>
          <Badge>Badge 3</Badge>
        </SimpleGrid>
        <Space />
        <Text fz="xs">Catégorie : Peinture</Text>
        <Text fz="xs">Unicité : Unique</Text>
        <Text fz="xs">Dimension : 80 H x 60 L x 1 P cm</Text>
        <Text color="blue" fw={700} fz="xl">
          Price: $ 200
        </Text>
        <Button>Add to Cart</Button>
        <Divider />
        <Text>
          <IconHelp />
          Besoin d'aide ? +33 (0)1 86 95 70 64
        </Text>
        <Divider />
        <Text>
          <IconHeart />
          Ajouter à ma wishlist
        </Text>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        <Paper>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </Paper>
      </Stack>
    </>
  );
}
export default AddToCartSection;
