import { Group, Badge, ActionIcon, Text } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

type ExpenseProps = {
  name: string;
  amount: number | string;
  category: string;
  onDelete: () => void;
};

export default function ItemCard({name, amount, category, onDelete}:ExpenseProps) {
  // หากต้องการเปลี่ยนแปลง type ชนิด string เป็น number สามารถใช้วิธีการดังโค้ดตัวอย่างด้านล่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return (
    <Group>
      <Text>{name}</Text>
      <Text>{amount}</Text>
      <Badge color="blue">{category}</Badge>
      <ActionIcon
          variant="filled"
          color="red"
          onClick={onDelete}
          size="lg"
        >
          <IconTrash  size={20}></IconTrash>
        </ActionIcon>
    </Group>
  );
}
