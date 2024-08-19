import styles from './Button.module.css';

const Button= (props)=> {

    const {icon,text}=props;

  return (
    <button className={styles.primary_btn}>
        {icon}
        {text}
    </button>
  );
}

export default Button