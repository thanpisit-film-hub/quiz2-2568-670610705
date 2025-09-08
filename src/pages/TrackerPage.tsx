import { useState } from "react";
import { Group ,Button, Stack, Title, Divider, Container , Card} from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import AddModal from "../components/Modal";

type Expense = {
  id: string;
  name: string;
  amount: number | string;
  category: string;
};

export default function ExpenseTracker() {
  const [opened, setOpened] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const categories = ["Food", "Transport", "Entertainment"];
  const addModal = (
    name: string,
    amount: number | string,
    category: string
  ) => {
    const newItem: Expense = {
      id: uuidv4(),
      name,
      amount,
      category,
    };
  };

  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Expense Tracker
      </Title>
      <Button onClick={() => setOpened(true)}>Add Expense Item</Button>
      {/* Type additional AddExpenseModal here. */}
      <AddModal
        opened={opened}
        onClose={() => setOpened(false)}
        onAdd={addModal}
      />
      <Stack w="100%">
          
      </Stack>

      <Divider my="md" />
      {/* Type additional total cost here. */}

      <Title order={4}>Total cost: {} Baht</Title>
      <Stack my="sm">{/* Type additional text here. */}</Stack>

      <Divider my="md" />
      {/* Type additional card here. */}
      <Stack>{/* Type additional expense card list here. */}</Stack>
    </Container>
  );
}
