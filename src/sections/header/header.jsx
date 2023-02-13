import './header.css';
import header from '../../assets/Ai1.jpg';
import data from './data';

const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>
        <div className='header__profile'>
          <img src={header} alt='header' />
        </div>
        <h3>Vivy</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A cumque
          impedit sunt illum officia, quam corrupti labore facilis? Et atque
          sunt recusandae dolorum? Quia consequuntur harum pariatur officiis
          quas, architecto voluptas recusandae beatae asperiores facilis sequi
          inventore.
        </p>
        <div className='header__cta'>
          <a href='#contact' className='btn primary'>
            Let`s talk
          </a>
          <a href='#portfolio' className='btn light'>
            My Work
          </a>
        </div>
        <div className='header__socials'>
          {data.map(({ id, link, icon }) => (
            <a href={link} key={id} target='_blank' rel='noopener noreferrer'>
              {icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
