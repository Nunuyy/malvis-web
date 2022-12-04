import Button from '@/components/Buttons'
import { Container } from '@/components/Layouts'
import { Navbar } from '@/components/Navbar'
import { useEffect } from 'react'
import { Element, Link } from 'react-scroll'
import tw, { styled } from 'twin.macro'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Background = styled.div`
  ${tw`flex items-center w-full lg:h-screen bg-cover bg-center bg-bglaw bg-[#EFF6FF] bg-opacity-80 backdrop-blur-lg`}
`
const Content = styled.div`
  ${tw`flex flex-col-reverse items-center justify-between w-full space-y-10 lg:flex-row md:space-y-20 sm:space-y-20`}
`
const ContentText = styled.div`
  ${tw`px-5 md:px-5 md:w-5/6 lg:w-[40%] lg:px-0 md:pb-[2.25rem]`}
`
const ContentTextHead = styled.p`
  ${tw`pt-16 md:pt-32 lg:pt-0 md:-my-16 text-[#d9d9d9]`}
`
const ContentTextSub = styled.p`
  ${tw`text-left text-gray-300 md:text-justify lg:text-base`}
`
const ContentImage = styled.div`
  ${tw`relative items-center lg:w-[60%] w-full flex justify-center sm:h-[20rem] h-[15rem] md:h-[33rem]`}
`

export const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000
    })
  }, [])
  return (
    <>
      <Navbar />
      <Element name="home" className="element">
        <Background>
          <Container tag={'div'} tw="px-0 py-10 sm:py-0">
            <Content>
              <ContentImage>
                {/* <Image
                  src={'/assets/icons/malvis-logo.svg'}
                  className={'rounded-full'}
                  width={390}
                  height={390}
                  layout={'fixed'}
                /> */}
                {/* <Image
                  src={isDesktop ? '/assets/icons/malvis-logo.svg' : '/assets/images/malvis-logo.svg'}
                  className={isDesktop ? 'rounded-full' : ''}
                  width={isDesktop ? 390 : 0}
                  height={isDesktop ? 390 : 0}
                  layout={isDesktop ? 'fixed' : 'fixed'}
                  unoptimized={true}
                  tw="object-cover"
                /> */}
              </ContentImage>
              <ContentText>
                <ContentTextHead data-aos="fade" className="malvis title1">
                  Malvis
                </ContentTextHead>
                <ContentTextSub className="desc">
                  Malvis Attorneys at Law Law Office is a law firm which promises to deliver domestic and international
                  clients with the highest quality and personalized legal services.
                </ContentTextSub>
                <Link to="about" spy={true} smooth={true} offset={-50} duration={300}>
                  <Button
                    text="Learn More"
                    variant="malvis"
                    tw="mt-6 rounded-full px-8 hover:bg-opacity-0 hover:ring-white hover:ring-1 transition delay-100 duration-200 active:bg-white active:text-malvisblue hover:text-white focus:outline-none focus:ring-white focus:ring-1"
                  />
                </Link>
              </ContentText>
            </Content>
          </Container>
        </Background>
      </Element>
    </>
  )
}
