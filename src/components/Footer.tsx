import BlurFade from "./magicui/blur-fade";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

const Footer = () => {
  const [state, handleSubmit] = useForm("xeojabyz");

  return (
    <section className="grid max-w-screen-lg grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 mb-16 mx-auto">
      <BlurFade inView delay={0.3}>
        <div className="min-h-[20rem] rounded-3xl bg-purple-200 bg-center overflow-hidden shadow flex items-start justify-center relative">
          <img
            src="https://images.pexels.com/photos/2350325/pexels-photo-2350325.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt=""
            className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
          />
          <h1 className="absolute z-10 text-zinc-100 lg:text-5xl text-4xl px-1 tracking-tight py-16 font-extrabold">
            Btw, I'm a <br />
            <a
              href="https://sl8.vercel.app/J1sYvFjJz5"
              target="__blank"
              className="text-green-500"
            >
              Music
              <br />
            </a>{" "}
            Producer too.
          </h1>
        </div>
      </BlurFade>
      <BlurFade inView delay={0.6}>
        <div className="min-h-[30rem] text-zinc-800 rounded-3xl p-10 flex flex-col gap-16 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-50 via-zinc-100 to-green-100">
          <h1 className="md:text-5xl text-4xl font-semibold md:leading-tight tracking-tight">
            Want to{" "}
            <span className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-400 via-cyan-500 to-green-200 bg-clip-text text-transparent">
              Work
            </span>
            <br />
            Together?
          </h1>
          <p className="flex flex-1 md:pr-16 text-lg font-medium text-zinc-700">
            Feel free to reach out for collaborations or just a friendly hello
            <br /> I'll try my best to get back to you!
          </p>
          {state.succeeded ? (
            <>
              <p>Message received!!</p>
            </>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex relative">
              <textarea
                title="message"
                className="rounded-2xl p-3 w-full"
                rows={3}
                placeholder="drop your message..."
                id="message"
                name="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <Button
                type="submit"
                className="absolute rounded-2xl bottom-0 right-0"
                disabled={state.submitting}
              >
                Send{" "}
                <span>
                  <Send size={16} />
                </span>
              </Button>
            </form>
          )}

          <div className="flex flex-col md:flex-row gap-6 items-center justify-self-center">
            <a
              href="mailto:anish7biswas@gmail.com"
              className="bg-zinc-800 hover:bg-zinc-700 hover:scale-105 transition-all active:scale-95 text-zinc-100 py-3 px-14 rounded-3xl w-full md:max-w-[200px] text-center"
            >
              Contact
            </a>
            <a
              href="https://wa.me/919163300481?text=Hi%20Anish%2C%20I%20saw%20your%20portfolio%20and%20I%20want%20to%20work%20with%20you."
              className="bg-green-600 hover:bg-green-500 hover:scale-105 transition-all active:scale-95 text-zinc-100 py-3 px-14 rounded-3xl w-full md:max-w-[200px] text-center"
            >
              Message
            </a>
          </div>
        </div>
      </BlurFade>
    </section>
  );
};

export default Footer;
