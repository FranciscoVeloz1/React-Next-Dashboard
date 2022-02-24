import styles from "@styles/common/Input.module.scss";

const Input = ({ o }) => {
  return (
    <div className={styles.InputContainer}>
      <input
        type={o.type}
        name={o.name}
        className={`${styles.input} form-control ${o.styles}`}
        id={o.id}
        value={o.value}
        onChange={o.onChange}
        placeholder="ph"
        required
      />

      <label className={`${styles.label} ${o.labelStyle}`} htmlFor={o.id}>
        {o.text}
      </label>
    </div>
  );
};

export default Input;
