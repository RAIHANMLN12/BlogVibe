const HeroSection = () => {
  return (
    <div className="flex flex-col phone:w-screen phone:items-center phone:pt-10 tablet:w-screen tablet:pt-10 w-3/5 justify-center items-center px-12 space-y-5">
      <h1 className="phone:text-[16px] phone:text-center tablet:text-center text-[24px] font-medium">
        Unleash Your Voice, Share Your Story - Welcome to BlogVibe!
      </h1>
      <p className="text-justify phone:text-[14px] text-[20px] font-light">
        Embark on a journey of self-expression and connection. BlogVibe is your
        canvas for creativity, where every keystroke brings your thoughts to
        life. Join our community, spark conversations, and let your words
        resonate. Your story matters, and BlogVista is the platform that
        amplifies it. Start writing your narrative today
      </p>
    </div>
  );
};

export default HeroSection;
