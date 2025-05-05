import FullScreenMenu from "@/components/FullScreenMenu";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden text-gray-900">
      <div>
        <aside className="absolute left-0 top-0 z-9999 flex h-screen w-[18rem] flex-col overflow-y-hidden border-r border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark lg:static lg:translate-x-0 -translate-x-full">
          <div className="flex items-center justify-between gap-2 px-6 py-10">
            <Link
              href="/admin"
              className="w-full h-full bg-black p-2 rounded-[0.5rem]"
            >
              <Image
                src="/logo.webp"
                alt="Logo"
                width={200}
                height={200}
                className="w-full h-full cursor-pointer"
              />
            </Link>
          </div>
          <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
            <nav className="mt-1 px-4 lg:px-6">
              <div>
                <h3 className="mb-5 text-sm font-medium text-dark-4 dark:text-dark-6">
                  Main Menu
                </h3>
                <ul className="mb-6 flex flex-col gap-2">
                  <li>
                    <Link href="/admin">
                      <div className="flex items-center gap-2 text-dark-4 dark:text-dark-6 hover:text-dark-5 dark:hover:text-dark-5">
                        <span className="text-lg">🏠</span>
                        <span>Dashboard</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/cuentas">
                      <div className="flex items-center gap-2 text-dark-4 dark:text-dark-6 hover:text-dark-5 dark:hover:text-dark-5">
                        <span className="text-lg">📝</span>
                        <span>Cuentas</span>
                      </div>
                    </Link>
                  </li>{" "}
                  <li>
                    <Link href="/admin/logs">
                      <div className="flex items-center gap-2 text-dark-4 dark:text-dark-6 hover:text-dark-5 dark:hover:text-dark-5">
                        <span className="text-lg">📝</span>
                        <span>Logs</span>
                      </div>
                    </Link>
                  </li>{" "}
                </ul>
              </div>
            </nav>
          </div>
        </aside>
      </div>
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <header className="sticky top-0 z-999 flex w-full border-b border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark">
          <div className="flex flex-grow items-center justify-between px-4 py-5 shadow-2 md:px-5 2xl:px-10">
            <div className="flex items-center gap-4 justify-between w-full">
              <div>
                <h1 className="mb-0.5 text-heading-5 font-bold text-[2rem]">
                  Admin Dashboard
                </h1>
                <p className="font-medium">CMMG Admin Panel</p>
              </div>
              <FullScreenMenu />
            </div>
          </div>
        </header>
        <main className="bg-gray-100">
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 min-h-screen">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
