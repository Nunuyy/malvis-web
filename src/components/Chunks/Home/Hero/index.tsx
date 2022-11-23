import Button from '@/components/Buttons'
import { Container } from '@/components/Layouts'
import { Navbar } from '@/components/Navbar'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Element, Link } from 'react-scroll'
import tw, { styled } from 'twin.macro'

const Background = styled.div`
  ${tw`flex items-center w-full lg:h-screen bg-cover bg-hero-background bg-[#EFF6FF] bg-opacity-80 backdrop-blur-lg`}
`
const Content = styled.div`
  ${tw`flex flex-col-reverse items-center justify-between w-full space-y-10 md:space-y-20 sm:space-y-20 lg:flex-row`}
`
const ContentText = styled.div`
  ${tw`px-5 md:w-5/6 lg:w-[56%] md:px-5 lg:px-0 md:pb-[2.25rem]`}
`
const ContentTextHead = styled.p`
  ${tw`h-auto pb-5 text-2xl font-bold pt-7 lg:pb-8 lg:mb-2 md:text-3xl lg:text-5xl`}
  background: linear-gradient(90deg,#0161E7 -3.51%, #FC0C47 46%, #F68F11 75.16%, #FB0246 102.12%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const ContentTextSub = styled.p`
  ${tw`text-gray-500 lg:pr-16 lg:text-xl `}
`
const ContentImage = styled.div`
  ${tw`relative items-center lg:w-[44%] w-full flex justify-center sm:h-[20rem] h-[15rem] md:h-[33rem]`}
`

export const Hero: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false)

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
      <Element name="home" className="element">
        <Background>
          <Container tag={'div'} tw="px-0 py-10 sm:py-0">
            <Content>
              <ContentText>
                <ContentTextHead>Accelerate good things with technology</ContentTextHead>
                <ContentTextSub>
                  PT Sawala Inovasi Indonesia (SAWALA Technology) adalah perusahaan pengembang software. Dengan keahlian
                  utama mengembangkan sistem informasi berbasis teknologi web dan cloud.
                </ContentTextSub>
                <Link to="about" spy={true} smooth={true} offset={-50} duration={300}>
                  <Button text="Learn More" variant="primary" tw="mt-6 rounded-full px-8" />
                </Link>
              </ContentText>
              <ContentImage>
                <Image
                  src={isDesktop ? '/assets/images/hero-image.png' : '/assets/images/image-4.png'}
                  className={isDesktop ? 'rounded-full' : ''}
                  width={isDesktop ? 390 : 0}
                  height={isDesktop ? 390 : 0}
                  layout={isDesktop ? 'fixed' : 'fill'}
                  unoptimized={true}
                  tw="object-cover"
                />
              </ContentImage>
            </Content>
          </Container>
        </Background>
      </Element>
    </>
  )
}
