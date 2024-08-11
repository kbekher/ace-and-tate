import Intro from '../../components/Intro/Intro';
import Goods from '../../components/Goods/Goods';
import About from '../../components/About/About';
import Customers from '../../components/Customers/Customers';
import Stores from '../../components/Stores/Stores';


export const HomePage = () => (
  <div className="HomePage">
    <Intro />
    <Goods />
    <About />
    <Customers />
    <Stores />
  </div>
);
