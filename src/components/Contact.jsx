/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { contacts } from '../constants';

const ContactCard = ({ index, name, icon, link }) => {
  return (
    <motion.a
      variants={slideIn('left', 'tween', index * 0.3, 0.5)}
      className="flex items-center gap-3"
      href={link}>
      <img src={icon} alt={name} className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]" />
      <p className="text-[16px] sm:text-[20px] font-medium underline">{name}</p>
    </motion.a>
  )
}

const Contact = () => {
  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <div className="flex flex-col gap-2 mt-6">
          {
            contacts.map((el) => (
              <ContactCard key={el.id} index={el.id} name={el.name} icon={el.icon} link={el.link} />
            ))
          }
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
