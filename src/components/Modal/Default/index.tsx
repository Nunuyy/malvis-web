import Links from '@/components/Link'
import { Dialog, Transition } from '@headlessui/react'
import dataLinks from '@jsons/links.json'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'
import { X } from 'react-feather'

interface DefaultModal {
  open: boolean
  closeButton?: boolean
  onClose?: any
}
export const DefaultModal: React.FunctionComponent<DefaultModal & React.HTMLAttributes<HTMLOrSVGElement>> = ({
  open,
  closeButton,
  onClose
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(open)
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const offset = window.scrollY

    if (offset > 1) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])
  useEffect(() => {
    const getOpen = () => {
      setIsOpen(open)
    }
    getOpen()
    return () => {
      getOpen()
    }
  }, [open])

  const router = useRouter()
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" tw="fixed inset-0 z-50 overflow-y-auto" onClose={onClose}>
          <div tw="min-h-screen text-center bg-[#232323]">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay tw="fixed inset-0" />
            </Transition.Child>
            <span tw="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 -scale-y-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 -scale-y-95">
              <div className="z-50 inline-block w-full h-screen overflow-hidden align-middle">
                <header className={`absolute w-full ${scrolled ? 'py-3 lg:py-5' : ' py-5 lg:py-10'}`}>
                  <div tw="px-5 lg:mx-auto lg:w-11/12 lg:px-14 flex justify-end">
                    {closeButton && (
                      <button
                        type="button"
                        // tw="absolute top-[1.5rem] right-[1rem] sm:right-[2.50rem] md:right-[1.90rem] lg:right-[8rem] focus:outline-none outline-none z-50"
                        tw="focus:outline-none outline-none z-50 lg:pr-2"
                        onClick={() => {
                          setIsOpen(false)
                          onClose && onClose()
                        }}>
                        <X size={40} color="#ffffff" />
                      </button>
                    )}
                  </div>
                </header>
                <div tw="flex flex-col space-y-8 text-white text-3xl transform z-30" className="desc">
                  <div tw="flex flex-col space-y-8 text-white text-3xl justify-center items-center h-screen z-50">
                    {dataLinks.map((dataLinks: { to: string; title: string; offset: number }, i: number) => (
                      <Links
                        key={i}
                        to={dataLinks.to}
                        title={dataLinks.title}
                        onClick={() => {
                          setIsOpen(false)
                          onClose && onClose()
                        }}
                        offset={dataLinks.offset}></Links>
                    ))}
                    {/* <Link href="/desa-langonsari">
                      <span
                        className={`text-white text-3xl cursor-pointer ${router?.asPath?.includes('desa') && 'font-bold'}`}>
                        Desa Langonsari
                      </span>
                    </Link> */}
                    <Link href="/about">
                      <span
                        className={`text-white text-3xl cursor-pointer ${router?.asPath?.includes('about') && 'font-bold'}`}>
                        About
                      </span>
                    </Link>
                    <Link href="/practices">
                      <span
                        className={`text-white text-3xl cursor-pointer ${
                          router?.asPath?.includes('practices') && 'font-bold'
                        }`}>
                        Practices Area
                      </span>
                    </Link>
                    <Link href="/profile">
                      <span
                        className={`text-white text-3xl cursor-pointer ${
                          router?.asPath?.includes('profile') && 'font-bold'
                        }`}>
                        Profile
                      </span>
                    </Link>
                    <Link href="/ourattorneysmalvis">
                      <span
                        className={`text-white text-3xl cursor-pointer ${
                          router?.asPath?.includes('ourattorneysmalvis') && 'font-bold'
                        }`}>
                        Our Attorneys
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
