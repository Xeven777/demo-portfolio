import BlurFade from "./magicui/blur-fade";

const MainHero = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto pt-16 mb-4">
        <section className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 mb-4">
          <BlurFade>
            <div className="min-h-[30rem] text-zinc-800 rounded-3xl p-10 flex flex-col gap-16 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-50 via-zinc-100 to-pink-50">
              <h1 className="md:text-5xl text-4xl font-semibold md:leading-tight tracking-tight">
                Hello, I'm{" "}
                <span className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-400 via-cyan-500 to-green-200 bg-clip-text text-transparent">
                  Anish
                </span>
                ,<br /> a Web Developer
              </h1>
              <p className="flex flex-1 md:pr-16 text-base font-medium text-zinc-700">
                Being dynamic and passionate web developer , producing sleek
                designs out of the box, I always wanna make products the best
                and most efficient.
                <br /> I try to make my work stand out from the crowd ;)
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-self-center">
                <a
                  target="__blank"
                  href="https://demoportfolio7.s3.ap-southeast-2.amazonaws.com/anishCV.pdf"
                  className="bg-zinc-800 hover:bg-zinc-700 hover:scale-105 transition-all active:scale-95 text-zinc-100 py-3 px-14 rounded-3xl text-center"
                >
                  Download CV
                </a>
                <div className="flex gap-6"></div>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            delay={0.2}
            inView
            className="relative min-w-[200px] min-h-[25rem] rounded-3xl"
          >
            <div className="relative min-w-[200px] h-full rounded-3xl bg-pink-200 bg-center overflow-hidden shadow">
              <img
                src="https://demoportfolio7.s3.ap-southeast-2.amazonaws.com/anishportrait.webp"
                className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                alt="Anish"
              />
            </div>
          </BlurFade>
        </section>
      </div>
    </>
  );
};

export default MainHero;
