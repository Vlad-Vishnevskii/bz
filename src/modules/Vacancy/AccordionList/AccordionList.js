import React from 'react';
import { useTranslation } from 'react-i18next';
import { useBoolean } from '../../../hooks';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { VACANCY_LIST } from './AccordionList.constans';
import { ModalOrder } from '../../ModalOrder';

import styles from './styles.module.scss';

export const AccordionList = () => {
  const { t } = useTranslation();
  const [modalIsOpen, setIsOpen] = useBoolean(false);

  const openModal = () => {
    setIsOpen.on();
    window.scrollTo(0, 0);
  };

  return (
    <Accordion className={styles.accordionList} allowZeroExpanded>
      {VACANCY_LIST.map((item, index) => (
        <AccordionItem key={index} className={styles.accordionList_item}>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordionList_button}>
              {item.name}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={styles.accordionList_panel}>
            <p>{item.description}</p>
            <h3>{t('vacancy.duties')}</h3>
            <ul>
              {item.duties.map((duty, index) => (
                <li key={index}>{duty}</li>
              ))}
            </ul>
            <h3>{t('vacancy.requirements')}</h3>
            <ul>
              {item.requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
            <h3>{t('vacancy.conditions')}</h3>
            <ul>
              {item.conditions.map((condition, index) => (
                <li key={index}>{condition}</li>
              ))}
            </ul>
            <button
              type="button"
              onClick={openModal}
              className={styles.accordionList_orderBtn}
            >
              {t('vacancy.orderBtn')}
            </button>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
      <ModalOrder
        type={'vacancyForm'}
        modalIsOpen={modalIsOpen}
        closeModal={setIsOpen.off}
      />
    </Accordion>
  );
};
