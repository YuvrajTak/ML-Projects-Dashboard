"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { sidebarLinks } from "@/constants";

const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();



  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className='flex w-full flex-1 flex-col gap-6 px-6 m-2'>
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;


          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link flex items-center gap-4 py-3 px-4 cursor-pointer transition-all duration-200 ease-in-out ${
          isActive ? 'bg-primary-500 font-bold' : 'hover:bg-gray-600'}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />

              <p className='text-light-1 max-lg:hidden'>{link.label}</p>
            </Link>
          );
        })}
      </div>

    
    </section>
  );
};

export default LeftSidebar;
