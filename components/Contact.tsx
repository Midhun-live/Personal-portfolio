import React from "react";
interface props {
  sendEmail: any;
}

const Contact = ({ sendEmail }: props) => {
  const email = "midhunchakkaravarthy07@gmail.com";
  const subject = encodeURIComponent("Inquiry from your portfolio");
  const body = encodeURIComponent("I saw your portfolio and would like to discuss potential opportunities. Looking forward to connecting!");

  // Mailto link with subject and body
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4
  items-center justify-center"
    >
      <p
        className="font-titleFont text-lg text-textGreen font-semibold flex
        items-center tracking-wide"
      >
        04. What&apos;s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center  text-textDark">
        I am open to new opportunities and would be glad to hear back from you.
        Be it a question or just wanting to say hello, feel free to reach out to me and 
        I will do my very best to get back to you!
      </p>
      <a href={mailtoLink}>
        <button
          className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm
        text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300"
          // onClick={sendEmail}
        >
          Say Hello!
        </button>
      </a>
      <p></p>
      <p></p>
    </section>
  );
};

export default Contact;
