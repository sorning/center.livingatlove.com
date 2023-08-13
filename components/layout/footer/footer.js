import Link from 'next/link';

import GitHubIcon from '../../icons/github';
import WillingWoodsIcon from '@/components/icons/willingwoodsicon';
// import LogoIcon from 'components/icons/logo';
// import VercelIcon from 'components/icons/vercel';
// import { getMenu } from 'lib/shopify';
// import { Menu } from 'lib/shopify/types';

const { SITE_NAME } = process.env;

const footermenu = [
  { name: 'Shop', href: '#', current: true },
  { name: 'Neclace', href: '#', current: false },
  { name: 'Homeappliance', href: '#', current: false },
  { name: 'Help', href: '#', current: false },
  { name: 'Contact', href: '#', current: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  //   const menu = await getMenu('next-js-frontend-footer-menu');

  return (
    <footer className="border-t border-gray-700 bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 border-b border-gray-700 py-12 transition-colors duration-150 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-2">
            <a className="flex flex-initial items-center font-bold md:mr-24 flex-col justify-start" href="/">
              <span className="mr-2">
                <WillingWoodsIcon className="h-8" />
              </span>
              <span>{SITE_NAME}</span>
            </a>
          </div>
          {/* {menu.length ? (
            <nav className="col-span-1 lg:col-span-7">
              <ul className="grid md:grid-flow-col md:grid-cols-3 md:grid-rows-4">
                {menu.map((item: Menu) => (
                  <li key={item.title} className="py-3 md:py-0 md:pb-4">
                    <Link
                      href={item.path}
                      className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-300 dark:text-gray-100"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null} */}

          <div className='flex justify-between lg:col-span-10'>
            {
              <nav className="col-span-1 lg:col-span-4">
                <ul className="grid md:grid-flow-col md:grid-cols-3 md:grid-rows-5">
                  {footermenu.map((item) => (
                    <li key={item.name} className="py-3 md:py-0 md:pb-4">
                      <Link
                        href={item.href}
                        className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-300 dark:text-gray-100"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            }
            {
              <nav className="col-span-1 lg:col-span-4">
                <ul className="grid md:grid-flow-col md:grid-cols-3 md:grid-rows-4">
                  {footermenu.map((item) => (
                    <li key={item.name} className="py-3 md:py-0 md:pb-4">
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            }
          </div>

          <div className="col-span-1 text-black dark:text-white lg:col-span-2">
            <a aria-label="Github Repository" href="https://github.com/vercel/commerce">
              <WillingWoodsIcon className="h-6" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between space-y-4 pb-10 pt-6 text-sm md:flex-row">
          <p>
            &copy; {copyrightDate} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center text-sm text-white dark:text-black">
            <span className="text-black dark:text-white">Created by</span>
            <a
              rel="noopener noreferrer"
              href="https://vercel.com"
              aria-label="Vercel.com Link"
              target="_blank"
              className="text-black dark:text-white"
            >
              <GitHubIcon className="ml-3 inline-block h-6" />
              <GitHubIcon className="ml-3 inline-block h-6" />
              <GitHubIcon className="ml-3 inline-block h-6" />
              <GitHubIcon className="ml-3 inline-block h-6" />
              <GitHubIcon className="ml-3 inline-block h-6" />
              <GitHubIcon className="ml-3 inline-block h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}



