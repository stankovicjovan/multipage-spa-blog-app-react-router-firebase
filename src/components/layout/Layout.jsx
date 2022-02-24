import classes from './Layout.module.css';
import MainNav from './MainNav';

const Layout = props => {
  return (
    <>
      <MainNav />
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
