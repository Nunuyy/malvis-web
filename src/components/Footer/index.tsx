import { Container } from '@/components/Layouts'
import tw, { styled } from 'twin.macro'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useEffect } from 'react'
import dataLinks from '@jsons/links.json'
import Links from '@/components/Link'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Background = styled.div`
  ${tw`w-full`}
  background: #232323
`

const Content = styled.div`
  ${tw`flex flex-col items-center gap-y-4 justify-between w-full py-8 md:pt-[6rem] md:pb-12 md:px-24 lg:px-64 text-center`}
`

interface Footer {
  open: boolean
  closeButton?: boolean
  onClose?: any
}

export const Footer: React.FunctionComponent<Footer & React.HTMLAttributes<HTMLOrSVGElement>> = ({ open, onClose }) => {
  useEffect(() => {
    AOS.init({
      duration: 3000
    })
    const getOpen = () => {}
    getOpen()
    return () => {
      getOpen()
    }
  }, [open])

  const router = useRouter()

  return (
    <>
      <Background>
        <Container>
          <Content data-aos="fade">
            <Image
              src={'/assets/icons/malvis-logo.svg'}
              className={'rounded-full'}
              width={200}
              height={200}
              layout={'fixed'}
              unoptimized={true}
              tw="object-contain"
            />

            <div tw="flex space-x-3 md:space-x-0 justify-evenly w-3/12 text-gray-500 my-8">
              <Link href="#">
                <a target="_blank">
                  <Image unoptimized={true} src={'/assets/icons/facebook.png'} height={20} width={20} layout="fixed" />
                </a>
              </Link>
              <Link href="#">
                <a target="_blank">
                  <Image unoptimized={true} src={'/assets/icons/instagram.png'} height={20} width={20} layout="fixed" />
                </a>
              </Link>
              <Link href="#">
                <a target="_blank">
                  <Image unoptimized={true} src={'/assets/icons/linked.png'} height={20} width={20} layout="fixed" />
                </a>
              </Link>
            </div>
            <div tw="flex space-x-5 justify-center flex-wrap lg:justify-evenly w-full text-gray-400">
              {dataLinks.map((dataLinks: { to: string; title: string; offset: number }, i: number) => (
                <Links
                  key={i}
                  to={dataLinks.to}
                  title={dataLinks.title}
                  onClick={() => {
                    onClose && onClose()
                  }}
                  offset={dataLinks.offset}></Links>
              ))}
              <Link href="/about">
                <span className={`text-white cursor-pointer ${router?.asPath?.includes('about') && 'font-bold'}`}>
                  About
                </span>
              </Link>
              <Link href="/practices">
                <span className={`text-white cursor-pointer ${router?.asPath?.includes('practices') && 'font-bold'}`}>
                  Practices Area
                </span>
              </Link>
              <Link href="/profile">
                <span className={`text-white cursor-pointer ${router?.asPath?.includes('profile') && 'font-bold'}`}>
                  Profile
                </span>
              </Link>
              <Link href="/ourattorneysmalvis">
                <span
                  className={`text-white cursor-pointer ${router?.asPath?.includes('ourattorneysmalvis') && 'font-bold'}`}>
                  Our Attorneys
                </span>
              </Link>
            </div>
            <p tw="text-gray-400 px-5">© {new Date().getFullYear()} Malvis Human & Legal. All rights reserved.</p>
          </Content>
        </Container>
      </Background>
    </>
  )
}
