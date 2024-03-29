import Footer from './Footer';

const Resume = () => {
  return (
    <div
      id="resume"
      className="container mx-auto px-14 py-10 min-h-screen flex flex-col items-center md:px-36"
    >
      <h1 className="text-4xl font-bold text-primary py-7 md:text-7xl lg:text-5xl">
        Resume
      </h1>
      <article className="md:text-3xl lg:text-xl">
        This is my resume, you can easily find my contacts and if you want you
        can download it{' '}
        <button className="transition-transform hover:scale-105">
          <a
            className="underline underline-offset-2"
            href="https://drive.google.com/file/d/10d42klt3fvhxQT1M0u7eNDFKt1Z9ouX-/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </button>
        .
      </article>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 0,
          paddingTop: '141.4286%',
          paddingBottom: 0,
          boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
          marginTop: '1.6em',
          marginBottom: '0.9em',
          overflow: 'hidden',
          borderRadius: '8px',
          willChange: 'transform',
        }}
      >
        <iframe
          loading="lazy"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            border: 'none',
            padding: 0,
            margin: 0,
          }}
          src="https://www.canva.com/design/DAFu9429mAE/view?embed"
          allowFullScreen="allowfullscreen"
          allow="fullscreen"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
