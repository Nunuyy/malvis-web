import { IconPhone, IconMail, IconGLobe } from '@/components/Icon'
import { Container } from '@components/Layouts'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import tw, { styled } from 'twin.macro'
const Heading = styled.h1`
  ${tw`h-full pb-2 text-2xl font-bold text-gray-600 lg:text-5xl`}
  background: linear-gradient(90deg, #0161E7 -3.51%, #FC0C47 46%, #F68F11 75.16%, #FB0246 102.12%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-text-stroke: 0.5px black;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 720px) {
    -webkit-text-stroke: 1.5px black;
  }
`

const Main = styled.div`
  ${tw`relative flex items-center w-full overflow-hidden bg-no-repeat bg-cover md:h-screen pt-7 md:py-4 bg-hero-desa lg:py-36`}
  @media (max-width:640px) {
    background-image: none;
  }
`

export const HeroDesa: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1223) {
        setIsDesktop(true)
      } else {
        setIsDesktop(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <div tw="md:hidden">
        <div tw="relative w-[100%] h-[330px] -mb-10">
          <Image src={'/assets/images/desa-mobile.png'} layout="fill" objectPosition="right" objectFit="contain" />
        </div>
      </div>
      <Main>
        <Container>
          <div tw="flex flex-col space-y-5 w-full md:w-1/2">
            <div tw="flex flex-row space-x-3 justify-start md:justify-start items-center md:items-start md:flex-col md:space-y-5 md:space-x-0 ">
              <Image
                src={'/assets/images/logodesa.png'}
                layout={'fixed'}
                width={isDesktop ? 86 : 50}
                height={isDesktop ? 71 : 40}
              />
              <Heading>Desa Langonsari</Heading>
            </div>
            <p tw="text-justify text-gray-700">
              Jl. Cibiuk No. 67a, Kecamatan Pameungpeuk Kabupaten Bandung, <br tw="hidden md:inline" />
              Provinsi Jawa Barat, Kode Pos 40376
            </p>
            <div tw="flex space-y-3 flex-col md:flex-row md:space-x-3 md:space-y-0 ">
              <a href="tel:02287800000" tw="flex space-x-1 md:space-x-2 items-center">
                <IconPhone />
                <p tw="text-gray-700 md:text-lg">02287800000</p>
              </a>
              <a href="mailto:info@langonsari.id" tw="flex space-x-1 md:space-x-2 items-center">
                <IconMail />
                <p tw="text-gray-700 md:text-lg">info@langonsari.id</p>
              </a>
              <a href="https://langonsari.id" target="_blank" rel="noreferrer" tw="flex space-x-1 md:space-x-2 items-center">
                <IconGLobe />
                <p tw="text-gray-700 md:text-lg">www.langonsari.id</p>
              </a>
            </div>
          </div>
          <div tw="absolute top-20 -right-20 hidden md:block">
            <div tw="relative w-[681px] h-[408px]">
              <Image src={'/assets/images/desa.png'} layout="fill" />
            </div>
          </div>
        </Container>
      </Main>
    </>
  )
}
