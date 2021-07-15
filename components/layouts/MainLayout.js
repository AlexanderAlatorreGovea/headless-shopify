import Header1 from '../Header/Header';
import Header2 from '../Header2/Header';
import Header3 from '../Header3/Header3';

export default function MainLayout (props) {
  return (
    <div className="fixed-nav transparent-nav">
    <Header3/>
      <main className="fixed-nav">{props.children}</main>
      
    </div>
  );
}
