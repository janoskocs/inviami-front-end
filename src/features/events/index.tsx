import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { lazyImport } from '@/utils/lazyImport';
import Spinner from '@/components/Spinner';
import NotFound from './pages/NotFound';

const componentMap = {
  template1: lazyImport('./components/Template1'),
  template2: lazyImport('./components/Template2'),
  // Add other templates here
};

const EventTemplateLoader = () => {
  const { templateId } = useParams();
  const TemplateComponent = componentMap[templateId];

  if (!TemplateComponent) {
    return <NotFound />;
  }
  return (
    <Suspense fallback={<Spinner />}>
      <TemplateComponent />
    </Suspense>
  );
};

export default EventTemplateLoader;
