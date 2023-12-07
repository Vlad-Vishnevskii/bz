import React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import styles from './styles.module.scss';

export const Casino = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.casino}>
      <div className={styles.casino_header}>
        <p className={styles.casino_label}>Проект</p>
        <h1 className={styles.casino_title}>Проект онлайн-казино</h1>
        <p className={styles.casino_description}>
          Перед нашей командой была поставлена задача разработать платформу
          онлайн-казино, которая выдерживала бы высокий трафик и соответствовала
          всем международным стандартам онлайн-гемблинга. В результате работы мы
          получили программное обеспечение, которое включает в себя следующие
          модули:
        </p>
      </div>
      <div className={styles.casino_container}>
        <div className={cn(styles.casino_section, styles.casino_section_1)}>
          <img
            src="/images/casino/screen-1.png"
            alt="Управление казино-контентом"
          />
          <div className={styles.casino_textBlock}>
            <h3>Управление казино-контентом</h3>
            <p>
              Модуль управления казино-контентом один из самых важных в данной
              платформе. В нём реализована возможность интеграции различных игр,
              в частности слотов, покера рулетки и многих других. Модуль
              обеспечивает надежную работу системы, а также управление ставками
              и выигрышами. Операторы казино могут настраивать правила игры и
              предлагать различные бонусы и акции для привлечения новых и
              удержания активных клиентов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
