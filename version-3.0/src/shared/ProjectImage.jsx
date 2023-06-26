const ProjectImage = ({ imgUrl, alt }) => {
  return (
    <img
      className="w-full text-white transition ease-in-out delay-75 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
      src={imgUrl}
      alt={alt}
    />
  );
};

export default ProjectImage;
