import Feed from "@/components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <small className='head_sub_text text-center'>Discover & Share </small>
    <small className='head_text green_gradient text-center'> AI-Powered Prompts</small>
    <p className='desc text-center'>
      Prompt-Hub is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>

    <Feed />
  </section>
);

export default Home;
