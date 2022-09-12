import Image from 'next/image'
import tw, { styled } from 'twin.macro'
import { useEffect, useState } from 'react'
import { Container } from '@/components/Layouts'
import { DefaultModal } from '@/components/Modal/Default'

const A = styled.a`
  ${tw`flex px-4 my-3 text-base font-normal tracking-wider text-[#011154]`}
`

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdown, setDropdown] = useState(false)
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

  return (
    <>
      <header
        className={`fixed top-0 z-30 w-full ${
          scrolled
            ? 'bg-white py-3 lg:py-5 shadow-md transition-all duration-700'
            : 'transition-all duration-500 py-5 lg:py-10'
        }`}>
        <Container tag="nav" tw="flex items-center justify-between">
          <div tw="relative w-[155px] h-auto flex justify-start p-5">
            <Image unoptimized={true} src={'/assets/images/logo-sawala-tech(new).svg'} layout={'fill'} />
          </div>
          <div tw="w-11/12">
            <ul tw="relative w-auto h-auto flex items-center p-2 ">
              <li tw="relative">
                <div tw="flex justify-center items-center">
                  <a
                    tw="text-[#011154] text-base font-body cursor-pointer px-2 flex items-center border-l-[0.5px] border-black order-1"
                    onClick={() => setDropdown(!dropdown)}>
                    <div tw="relative w-[166px] h-auto flex justify-start p-3">
                      <Image unoptimized={true} src={'/assets/images/tech-nav.svg'} layout={'fill'} />
                    </div>
                  </a>
                </div>
                {dropdown && (
                  <ul tw="absolute w-[181px] mt-4 bg-white border-b border-white rounded-md shadow-md">
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
              </li>
            </ul>
          </div>
          <div tw="relative w-auto h-auto flex justify-end p-4">
            <Image
              unoptimized={true}
              src={'/assets/icons/navbar.svg'}
              onClick={() => setOpen(true)}
              className="cursor-pointer"
              layout="fill"
            />
          </div>
        </Container>
      </header>
      <DefaultModal open={open} closeButton={true} onClose={() => setOpen(false)}></DefaultModal>
    </>
  )
}
