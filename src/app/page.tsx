import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const navigationItems = [
    {
      name: "Menu",
      href: "/menu",
    },

    {
      name: "Favorities",
      href: "/favorites",
    },
    {
      name: "Random meals",
      href: "/random-meals",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="grid w-5/12 grid-cols-2 gap-6 mx-auto">
        {navigationItems &&
          navigationItems.map((item: any) => (
            <Link
              key={item.name}
              href={`/${item.href}`}
              className="p-4 text-center text-black bg-gray-200 rounded-md hover:bg-50"
            >
              <button key={item.name}>{item.name}</button>
            </Link>
          ))}
      </div>
    </main>
  );
}
