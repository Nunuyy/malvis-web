import { Container } from '@/components/Layouts'
import { Navbar } from '@/components/Navbar'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Element } from 'react-scroll'
import tw, { styled } from 'twin.macro'

import dataLinks from '@jsons/links.json'
import Links from '@/components/Link'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Background = styled.div`
  ${tw`flex items-center w-full lg:h-screen  bg-center bg-cover bg-center bg-bglaw bg-[#EFF6FF] bg-opacity-80 backdrop-blur-lg`}
`
const Content = styled.div`
  ${tw`flex flex-col-reverse items-center justify-between w-full space-y-10 lg:flex-row md:space-y-20 sm:space-y-20`}
`
const ContentText = styled.div`
  ${tw`px-5 md:px-5 md:w-5/6 lg:w-[56%]  lg:px-0 md:pb-[2.25rem]`}
`
const ContentTextHead = styled.p`
  ${tw`h-auto pt-16  md:pt-32  lg:pb-8 lg:pt-0 text-[#d9d9d9]`}
`
const Desc = styled.p`
  ${tw`text-2xl font-semibold text-malvis`}
`
// const ContentTextSub = styled.p`
//   ${tw`text-justify text-gray-300 md:text-left lg:pr-16 lg:text-xl`}
// `
const ContentImage = styled.div`
  ${tw`relative items-center lg:w-[50%] w-full flex justify-center sm:h-[20rem] h-[15rem] md:h-[33rem]`}
`
const ContentTextSub = styled.p`
  ${tw`text-justify text-gray-300 lg:text-base`}
`
interface HeroMalvis {
  open: boolean
  closeButton?: boolean
  onClose?: any
}

export const HeroMalvis: React.FunctionComponent<HeroMalvis & React.HTMLAttributes<HTMLOrSVGElement>> = ({
  open,
  onClose
}) => {
  const [isDesktop, setIsDesktop] = useState(false)
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsDesktop(true)
      } else {
        setIsDesktop(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
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
      <Navbar />
      <Element name="hero" className="element">
        <Background>
          <Container tag={'div'} tw="px-0 py-10 sm:py-0">
            <Content>
              <ContentImage data-aos="fade">
                {/* <Image
                  src={'/assets/icons/malvis-logo.svg'}
                  className={'rounded-full'}
                  width={390}
                  height={390}
                  layout={'fixed'}
                /> */}
                <Image
                  src={isDesktop ? '/assets/icons/malvis-logo.svg' : '/assets/images/malvis-logo.svg'}
                  className={isDesktop ? 'rounded-full' : 'rounded-full'}
                  width={isDesktop ? 250 : 0}
                  height={isDesktop ? 250 : 0}
                  layout={isDesktop ? 'fixed' : 'fixed'}
                  unoptimized={true}
                  tw="object-cover"
                />
              </ContentImage>
              <ContentText>
                <ContentTextHead className="malvis title">About Us</ContentTextHead>
                <ContentTextSub className="desc">
                  Malvis Attorneys at Law Law Office is a law firm which promises to deliver domestic and international
                  clients with the highest quality and personalized legal services.
                </ContentTextSub>
                {/* <ContentTextSub>
                  Malvis Attorneys at Law Law Office is a law firm which promises to deliver domestic and international
                  clients with the highest quality and personalized legal services.
                </ContentTextSub> */}
                <Desc>
                  Back to &nbsp;
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
                </Desc>
              </ContentText>
            </Content>
          </Container>
        </Background>
      </Element>
    </>
  )
}
