import styles from './Label.module.css';

const labels = {
  created: 'активные',
  completed: 'завершенное',
};
const Label = ({ type }) => {
  const classList = [
    styles.label,
    type === 'created' ? styles.labelCreated : styles.labelCompleted,
  ].join(' ');

  return <div className={classList}>{labels[type]}</div>;
};

export default Label;
