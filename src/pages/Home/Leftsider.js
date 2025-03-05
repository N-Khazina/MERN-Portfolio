import React from "react";

function Leftsider() {
  return (
    <div className="fixed bottom-0 left-0 px-8">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col gap-5">
          <i class="text-tertiary text-xl ri-instagram-fill"></i>
          <i class="text-tertiary text-xl ri-tiktok-fill"></i>
          <i class="text-tertiary text-xl ri-linkedin-box-fill"></i>
          <i class="text-tertiary text-xl ri-github-fill"></i>
          <i class="text-tertiary text-xl ri-mail-fill"></i>
        </div>
        <div className="w-[1px] h-52 bg-[#125f63]"></div>
      </div>
    </div>
  );
}

export default Leftsider;
