import styles from "./style.module.css";

interface ChipProps {
  name: string;
}

export default function Chips({ name }: ChipProps) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{name}</p>
    </div>
  );
}
