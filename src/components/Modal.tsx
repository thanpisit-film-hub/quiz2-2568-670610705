import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
} from "@mantine/core";

type AddExpenseModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (name: string, amount: number | string, category: string) => void;
};

export default function AddExpenseModal({
  opened,
  onClose,
  onAdd,
}: AddExpenseModalProps) {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string | number>(0);
  const [category, setCategory] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!name.trim() || !amount || !category?.trim()) return;
    onAdd(name, amount, category);
    setName("");
    setAmount("");
    setCategory(null);
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Add Task">
      <Stack>
        <TextInput
          label="Expense Name"
          description="Expense Name"
          error={!name.trim() && "Expense Name is  required"}
          placeholder="E.g.,Coca-Cola"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <NumberInput
          label="Amount"
          description="Amount"
          error={!amount && "Amount is  required"}
          placeholder="0"
          value={amount}
          onChange={setAmount}
        />
        <Select
          label="Category"
          description="Category"
          placeholder="Select Category"
          data={["Food", "Transport", "Entertainment"]}
          error={!category?.trim() && "Category is required"}
          value={category}
          onChange={setCategory}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Stack>
    </Modal>
  );
}
