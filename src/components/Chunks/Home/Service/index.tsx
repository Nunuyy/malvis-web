import Button from '@/components/Buttons'
import { Container } from '@/components/Layouts'
// import Image from 'next/image'
import { Element } from 'react-scroll'
import tw, { styled } from 'twin.macro'

const Background = styled.div`
  ${tw`bg-malvis-about`}
`
const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full space-y-3 lg:flex-row lg:space-y-0 lg:py-16 md:mb-0 mt-32 md:mt-0`}
`
const ContentLeft = styled.div`
  ${tw``}
`
const ContentLeftService = styled.div`
  ${tw`lg:w-full items-center justify-center md:text-center text-justify`}
`
// const ContentMobileRight = styled.div`
//   ${tw`flex justify-center py-10 md:justify-start lg:hidden lg:w-1/2`}
// `

export const Service: React.FC = () => {
  return (
    <>
      <Element name="service" className="element">
        <Background className="bg-no-repeat bg-center bg-cover">
          <Container tag={'div'} tw="p-5 md:p-14">
            <Content>
              <ContentLeft>
                <ContentLeftService tw="md:mt-96 lg:mb-12 mt-10">
                  <p tw="text-center font-bold md:text-4xl lg:my-5 hidden md:block text-white mb-2 md:mb-0">ABOUT US</p>
                  <p tw="text-white -translate-y-20 mb-2  md:mb-5 md:text-center sm:text-justify text-sm">
                    Local Counsel, Globally Connected Malvis Attorneys at Law Law Office founded in 2022 with a wide range of
                    its Founding Partners experiences, which are
                    <b>Zubet Rizal.S.H., Reza Satria Kinayungan.S.H, CTL., Gading Yonggar Ditya.S.H.</b> Supported with
                    strong analitycal of Lawyers, Paralegal, as well as Field Administration Staff who will be incharged as a
                    solid team to provide many legal consultation to give the best service for valuable clients.
                  </p>
                  <Button
                    text="Learn More"
                    variant="malvis-red"
                    tw="rounded-full px-8 place-content-center md:block hidden mx-auto"
                    external={true}
                    url="#"
                  />
                </ContentLeftService>
              </ContentLeft>
            </Content>
          </Container>
        </Background>
      </Element>
    </>
  )
}
