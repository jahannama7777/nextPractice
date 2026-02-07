import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default async function Page() {

  return (
    // ...
    <div className="flex flex-col items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* <h1 className="mb-10 text-neutral-700">
        <Link href={"/productPage"}> Go to product page</Link>
      </h1> */}
      {/* Add Hero Images Here */}
      {/* <div>
        <Image
          src="/hero-desktop.png"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className="hidden sm:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div> */}
    </div>
    //...
  );
}
