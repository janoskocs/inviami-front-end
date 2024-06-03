import { EventDetailsType } from '../../types/event';

interface Birthday2Props {
  event: EventDetailsType;
}

const Birthday2: React.FC<Birthday2Props> = ({ event }) => {
  return (
    <div>
      <h1>{event.occasionTitle}</h1>
      <p>{event.description}</p>
      {/* Other event details */}
    </div>
  );
};

export default Birthday2;
