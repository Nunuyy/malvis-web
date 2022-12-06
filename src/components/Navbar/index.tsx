import Image from 'next/image'
// import tw, { styled } from 'twin.macro'
import { useEffect, useState } from 'react'
import { Container } from '@/components/Layouts'
import { DefaultModal } from '@/components/Modal/Default'

// const A = styled.a`
//   ${tw`flex px-5 my-3 text-base font-normal tracking-wider text-[#011154]`}
// `

import { FC } from 'react'
import { useRouter } from 'next/router'
interface LinkProps {
  withScrolled?: boolean
}

export const Navbar: FC<LinkProps> = ({ withScrolled = true }) => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  // const [dropdown, setDropdown] = useState(false)

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
  const router = useRouter()
  return (
    <>
      <header
        className={`fixed top-0 z-30 w-full ${
          withScrolled
            ? scrolled
              ? 'bg-white backdrop-filter backdrop-blur-lg text-malvis bg-opacity-80 py-3 lg:py-0 shadow-md transition-all duration-700'
              : 'transition-all duration-500 py-5 lg:py-2 text-white'
            : 'bg-white backdrop-filter backdrop-blur-lg bg-opacity-80 py-3 lg:py-2 shadow-md transition-all duration-700'
        }`}>
        <Container tag="nav" tw="flex items-center justify-between">
          <div tw="relative w-[155px] h-auto justify-start p-5 cursor-pointer hidden md:flex">
            <h1 onClick={() => router?.push('/')} className="malvis nav-title">
              MALVIS
            </h1>
          </div>
          <div tw="relative w-[155px] h-auto justify-start cursor-pointer md:hidden flex">
            <Image
              unoptimized={true}
              src={'/assets/icons/malvis-logo.svg'}
              width={100}
              height={100}
              onClick={() => router?.push('/')}
            />
          </div>
          {/* <div tw="w-11/12">
            <ul tw="relative w-auto h-auto flex items-center p-2 ">
              <li tw="relative">
                <div tw="flex justify-center items-center">
                  <a
                    tw="text-[#011154] text-base font-body cursor-pointer px-2 flex items-center border-l-[0.5px] border-black order-1"
                    onClick={() => setDropdown(!dropdown)}>
                    <div tw="relative w-[138px] h-auto flex justify-start p-3">
                      <Image unoptimized={true} src={'/assets/images/tech.svg'} layout={'fill'} />
                    </div>
                    <div tw="relative w-[11px] h-auto flex p-1 px-4">
                      <Image
                        unoptimized={true}
                        src={dropdown ? '/assets/images/chevron-rotate.svg' : '/assets/images/chevron.svg'}
                        layout={'fill'}
                      />
                    </div>
                  </a>
                </div>
                <div
                  className={`${
                    dropdown
                      ? 'absolute mt-4 bg-white border-b border-white rounded-md shadow-md transition-all duration-200'
                      : ''
                  }`}>
                  {dropdown && (
                    <ul tw=" w-[181px]">
                      <li>
                        <A href="https://sawala.or.id/" target="_blank">
                          FOUNDATION
                        </A>
                      </li>
                      <li>
                        <A href="https://sawala.space/" target="_blank">
                          SPACE
                        </A>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
            </ul>
          </div> */}
          <div tw="relative w-auto h-auto flex justify-end p-4">
            <Image
              unoptimized={true}
              src={withScrolled ? (scrolled ? '/assets/icons/nav1.svg' : '/assets/icons/nav.svg') : '/assets/icons/nav.svg'}
              onClick={() => setOpen(true)}
              className="cursor-pointer"
              width={50}
              height={40}
            />
          </div>
        </Container>
      </header>
      <DefaultModal open={open} closeButton={true} onClose={() => setOpen(false)}></DefaultModal>
    </>
  )
}
