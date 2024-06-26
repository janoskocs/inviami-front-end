import { EventDetailsType } from '../../types/event';
import styles from './Birthday5.module.css';

interface Birthday5Props {
  event: EventDetailsType;
}

const Birthday5: React.FC<Birthday5Props> = ({ event }) => {
  return (
    <section
      className={`${styles['birthday-5-invitation']} ${styles['birthday-5-invitation--reveal']}`}
    >
      <div className={styles['birthday-5-invitation__width']}>
        <h1 className={styles['birthday-5-invitation__customer-name']}>
          {event.celebratedPerson.split(' ')[0]}
        </h1>
        <p
          className={`${styles['birthday-4-invitation__text']} ${styles['birthday-5-invitation__text--at-sign']}`}
        >
          @
        </p>
        <p className={styles['birthday-5-invitation__turning-paragraph']}>
          is turning
        </p>

        <p className={styles['birthday-5-invitation__text']}>
          {event.description}
        </p>

        <div
          className={styles['birthday-5-invitation__occasion-image-container']}
        >
          <img
            className={styles['birthday-5-invitation__occasion-icon']}
            src="/assets/images/birthday-5/glass-drinks.png"
            alt="glass drinks"
          />
          <h2 className={styles['birthday-5-invitation__occasion-title']}>
            {event.occasionTitle ? event.occasionTitle : 'Join us to celebrate'}
          </h2>
        </div>

        <div className={styles['birthday-5-invitation__time-container']}>
          <time
            className={`${styles['birthday-5-invitation__text']} ${styles['birthday-5-invitation__text--day']}`}
            dateTime={event.eventDateTime}
          >
            {event.eventDateTime}
          </time>

          <time
            className={`${styles['birthday-5-invitation__text']} ${styles['birthday-5-invitation__text--month-year']}`}
            dateTime={event.eventDateTime}
          >
            {event.eventDateTime}
            <br />
            {event.eventDateTime}
          </time>
        </div>

        <p className={styles['birthday-5-invitation__text']}>
          {event.location}
        </p>
      </div>
      <div className={styles['birthday-5-invitation__btn-wrapper']}>
        {event.schedule.length ? (
          <button
            type="button"
            className={styles['birthday-5-invitation__details-button']}
            onClick={() => {}}
          >
            Check the plan
          </button>
        ) : null}

        <button
          type="button"
          className={styles['birthday-5-invitation__rsvp-button']}
          onClick={() => {}}
        >
          RSVP
        </button>
      </div>
    </section>
  );
};

export default Birthday5;
