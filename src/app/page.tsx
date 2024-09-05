"use client";
import { Pagination, Group, Container, Text, Title, Rating, Textarea, Divider, Button } from "@mantine/core";
 
export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Title order={4} mt="sm">Your rating</Title>

      <Rating defaultValue={0} size={"lg"}/>

      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="sm" autosize minRows={3} maxRows={3}
      />

      <Button 
        mt="sm" variant="filled" color="orange">Submit Review
      </Button>

      <Divider my="sm" />

      <Group justify="center"> 
        <Title order={4}>Elon Musk</Title>
        <Rating value={5}  readOnly />
      </Group>
      
      <Text c="dimmed" ta="center">Best pizza in this world. I give you X score.</Text>
      <Divider my="sm" />

      <Group justify="center"> 
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} readOnly/>
      </Group>

      <Text c="dimmed" ta="center">My favourite part is pepperoni</Text>

      <Group justify="center" mt="sm">
        <Pagination mt="sm" total={20} color="orange" />
      </Group>
     

      <Text ta="center" my="sm" c="dimmed">
        Copyright © 2024 Chotima Mankit 66610748
      </Text>

    </Container>
  );
}
