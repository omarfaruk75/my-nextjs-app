// "use client";

import Link from "next/link";
// import { useRouter } from "next/navigation";

const HomePage = () => {
  // const router = useRouter();
  // const handleNavigation = () => {
  //   router.push("/dashboard");
  // };
  return (
    <div className="text-center">
      <h2 className="text-4xl">This is Home Page</h2>
      {/* <Link href="/dashboard">
        <button className="btn btn-secondary border-spacing-2">
          Dashboard
        </button>
      </Link> */}

      {/* <button
        onClick={handleNavigation}
        className="btn btn-secondary border-spacing-2"
      >
        Dashboard
      </button> */}
    </div>
  );
};

export default HomePage;
