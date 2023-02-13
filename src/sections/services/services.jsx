import './services.css';
import data from './data';
import Card from '../../component/card/card';

const Services = () => {
  return (
    <section id='services'>
      <h2>My SERVICES</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <div className='container services__container'>
        {data.map(({ id, title, desc, icon }) => (
          <Card key={id} className='service light'>
            <div className='service__icon'>{icon}</div>
            <div className='service__detailes'>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
