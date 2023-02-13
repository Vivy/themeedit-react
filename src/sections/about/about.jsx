import './about.css';
import aboutIMG from '../../assets/Ai2.jpg';
import CV from '../../assets/cv.pdf';
import { HiDownload } from 'react-icons/hi';
import data from './data';
import Card from '../../component/card/card';

const About = () => {
  return (
    <section id='about'>
      <div className='container about__container'>
        <div className='about__left'>
          <div className='about__portrait'>
            <img src={aboutIMG} alt='About IMG' />
          </div>
        </div>
        <div className='about__right'>
          <h2>About Me</h2>
          <div className='about__cards'>
            {data.map(({ id, icon, desc, title }) => (
              <Card key={id} className='about__card'>
                <span className='about__card-icon'>{icon}</span>
                <h5>{title}</h5>
                <small>{desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            commodi quo, aliquid laborum nostrum facere odit ut quaerat
            obcaecati pariatur sunt iure harum exercitationem.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            sed maiores rerum. Consequatur eum cumque impedit deleniti ratione
            reiciendis consequuntur alias distinctio, error officia? Nihil iure
            tempore, eveniet reprehenderit consectetur a dignissimos architecto
            dolorem incidunt illum aliquam.
          </p>
          <a href={CV} download className='btn primary'>
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
