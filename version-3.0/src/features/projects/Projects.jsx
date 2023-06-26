import Card from './Card';

export const Projects = () => {
  return (
    <div
      id="projects"
      className="container mx-auto px-14 flex flex-col items-center"
    >
      <h1 className="text-4xl font-bold text-primary py-7 md:text-7xl md:mb-7 lg:text-5xl">
        Projects
      </h1>
      <Card />
    </div>
  );
};
