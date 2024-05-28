import Nav from '@/components/Nav';
import { templates } from '@/data/templates';
import NoTemplates from './components/NoTemplates';
import TemplatesList from './components/TemplatesList';

const Templates = () => {
  return (
    <>
      <Nav />
      <section className="container p-4 md:mx-auto">
        <h1 className="text-center font-bold text-primary text-xl mb-4">
          Templates
        </h1>

        {templates.length === 0 && <NoTemplates />}
        {templates.length > 0 && <TemplatesList />}
      </section>
    </>
  );
};

export default Templates;
