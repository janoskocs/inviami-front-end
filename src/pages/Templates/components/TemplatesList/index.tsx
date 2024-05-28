import { templates } from '@/data/templates';

const TemplatesList = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {templates.map((template) => (
        <article
          role="article"
          key={template.id}
          className="bg-white shadow-md p-4 rounded-md"
        >
          <img
            src={template.image}
            alt={template.name}
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="font-bold text-lg mt-2">{template.name}</h2>
          <p className="text-sm text-gray-500">{template.description}</p>
          <div className="mt-2">
            <p className="text-lg font-bold">
              {template.sale ? `$${template.salePrice}` : `$${template.price}`}
            </p>
            <a
              href={template.url}
              target="_blank"
              rel="noreferrer"
              className="block text-center bg-primary text-white py-2 rounded-md mt-2"
            >
              Buy Now
            </a>
            <a
              href={template.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="block text-center bg-secondary text-white py-2 rounded-md mt-2"
            >
              View Demo
            </a>
          </div>
        </article>
      ))}
    </section>
  );
};

export default TemplatesList;
