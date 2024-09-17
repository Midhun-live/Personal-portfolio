import React from "react";
interface props {
  sendEmail: any;
}

const RightSide = ({ sendEmail }: props) => {
  const email = "midhunchakkaravarthy07@gmail.com";
  const subject = encodeURIComponent("Inquiry from your portfolio");
  const body = encodeURIComponent("I saw your portfolio and would like to discuss potential opportunities. Looking forward to connecting!");

  // Mailto link with subject and body
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-10 text-textLight">
      <a href={mailtoLink}>
        <p
          // onClick={sendEmail}
          className="text-sm rotate-90 w-72 tracking-wide text-textGreen"
        >
          Connect.with.ME(mi)dhun
        </p>
      </a>
      <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  );
};

export default RightSide;
