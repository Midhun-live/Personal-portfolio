import React from "react";
interface props {
  sendEmail: any;
}

const RightSide = ({ sendEmail }: props) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-10 text-textLight">
      <a href="mailto:midhunchakkaravarthy07@gmail.com?subject=Vanakkam, Let's get Connected">
        <p
          onClick={sendEmail}
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
