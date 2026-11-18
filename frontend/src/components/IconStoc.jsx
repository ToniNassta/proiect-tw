import styles from "./IconStoc.module.css";

function IconStoc({ size = 10 }) {
  return (
    <svg
      className={styles["icon-stoc"]}
      width={size}
      height={size}
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="currentColor" />
    </svg>
  );
}

export default IconStoc;
