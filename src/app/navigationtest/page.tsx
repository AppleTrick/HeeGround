"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTest = () => {
  // CLIENT SIDE NAVIGATION
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const q = searchParams.get("q");

  // console.log(pathname);
  // console.log(q)

  const handleClick = () => {
    console.log("clicked");
    // router.push("/");
    // router.replace("/");
    // router.refresh();
    // router.back();
    router.forward();
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Clik here
      </Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTest;
