import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [toggle]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh] py-[30px]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="lg:text-[21px] text-[16px] flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <p className="font-medium font-mova uppercase tracking-[3px] text-eerieBlack">
            {`</>`}
          </p>

          <p className="font-medium font-mova uppercase tracking-[3px] text-eerieBlack">
            Algoritmi4
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row lg:gap-14 mt-2 gap-6">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe lg:text-[21px] text-[16px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          <div
            className={`p-7 bg-flashWhite opacity-[0.98] absolute 
              top-0 w-full h-screen z-10 duration-200 ${toggle ? "left-0" : "left-[100%]"}`}>
            <div className="flex justify-end mt-2">
              <img
                src={close}
                alt="close"
                className="w-[22px] h-[22px] object-contain cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />
            </div>
            <ul
              className="list-none flex flex-col gap-[20px] 
              items-center justify-end mt-[10rem]">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? 'text-french' : 'text-eerieBlack'
                  } text-[40px] font-bold font-arenq 
                    uppercase tracking-[1px] cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={menu}
            alt="menu"
            className="w-[34px] h-[34px] object-contain cursor-pointer"
            onClick={() => setToggle((state) => !state)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
