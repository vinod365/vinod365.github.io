import styles from "./style.module.css";

interface SectionHeaderProps {
  name: string;
}


export default function SectionHeader({ name }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <p className={styles.heading}>{name}</p>
    </div>
  );
}
