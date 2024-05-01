import classes from "./portfolio.module.css";

export async function Portfolio() {
  return (
    <div className={classes.main}>
      <h1>What can I do for you?</h1>
      <div>Web Development</div>
      <div>UX Research and Web Design</div>
      <div>Copy Writing</div>
    </div>
  );
}
