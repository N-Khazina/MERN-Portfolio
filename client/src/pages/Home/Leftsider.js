import React from "react";

function Leftsider() {
  return (
    <div className="fixed bottom-0 left-0 px-8 sm:static ">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col gap-10 sm:flex-row">
          <a href="https://www.instagram.com/chef_khazina/">
            <i class="text-tertiary text-xl ri-instagram-fill"></i>
          </a>
          <a href="https://www.tiktok.com/@chef_khazina?lang=en">
          <i class="text-tertiary text-xl ri-tiktok-fill"></i>
          </a>
          <a href="https://www.instagram.com/chef_khazina/">
          <i class="text-tertiary text-xl ri-linkedin-box-fill"></i>
          </a>
          <a href="https://github.com/N-Khazina">
          <i class="text-tertiary text-xl ri-github-fill"></i>
          </a>
          <a href="https://www.instagram.com/chef_khazina/">
          <i class="text-tertiary text-xl ri-mail-fill"></i>
          </a>
        </div>
        <div className="w-[1px] h-52 sm:hidden bg-[#125f63]"></div>
      </div>
    </div>
  );
}

export default Leftsider;
