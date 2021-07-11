import Header1 from '../Header/Header';
import Header2 from '../Header2/Header';
import Header3 from '../Header3/Header3';

export default function MainLayout (props) {
  return (
    <>
    <Header3/>
      <main>{props.children}</main>
      <header>footer</header>
    </>
  );
}
