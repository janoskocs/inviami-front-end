import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '@/components/Spinner';
import NotFound from './pages/NotFound';
import { GET_EVENT_URL } from '@/api';

//Add new event component to the componentMap object
import { componentMap } from './data/eventComponentList';
import { EventComponentType } from './types/event';

const EventTemplateLoader = () => {
  const { eventLink } = useParams();
  const [templateId, setTemplateId] = useState<string | null>(null);
  const [eventDetails, setEventDetails] = useState<string>('test');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getEventDetails = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `${GET_EVENT_URL}/${eventLink ? eventLink : 'default'}`
      );
      setEventDetails(data);
      setTemplateId(data.invitationTemplate);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getEventDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventLink]);

  if (isLoading) {
    return <Spinner />;
  }

  // console.log(eventDetails);
  const TemplateComponent =
    templateId !== null
      ? (componentMap[templateId] as EventComponentType)
      : null;

  if (!TemplateComponent) {
    return <NotFound />;
  }
  return (
    <Suspense fallback={<Spinner />}>
      <TemplateComponent event={eventDetails} />
    </Suspense>
  );
};

export default EventTemplateLoader;
