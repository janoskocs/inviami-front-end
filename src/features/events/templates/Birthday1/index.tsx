import { EventDetailsType } from '../../types/event';

interface Birthday1Props {
  event: EventDetailsType;
}

const Birthday1: React.FC<Birthday1Props> = ({ event }) => {
  console.log(event);
  return (
    <div>
      <h1>{event.occasionTitle}</h1>
      <p>{event.description}</p>
    </div>
  );
};
export default Birthday1;
