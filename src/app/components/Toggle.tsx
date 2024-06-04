import classes from './Toggle.module.css';

export default function Toggle() {
  return (
    <label className={classes.switch}>
      <input type="checkbox" />
      <span className={classes.slider}></span>
    </label>
  );
}