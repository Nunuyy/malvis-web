/* eslint-disable prettier/prettier */
import { Container } from '@/components/Layouts'
// import Image from 'next/image'
import { Element } from 'react-scroll'
import tw, { styled } from 'twin.macro'

const Background = styled.div`
  ${tw`bg-[#d9d9d9]`}
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

export const AboutMalvis: React.FC = () => {
  return (
    <>
      <Element name="aboutmalvis" className="element">
        <Background className="bg-no-repeat bg-center bg-cover">
          <Container tag={'div'} tw="p-5 md:p-14">
            <Content>
              <ContentLeft>
                <ContentLeftService>
                  <p tw="text-center text-malvisblue font-bold md:text-4xl lg:my-5  mb-2 md:mb-0">ABOUT US</p>
                  <p tw="text-[#232323] -translate-y-20 mb-2  md:mb-5 md:text-center sm:text-justify text-sm">
                    Local Counsel, Globally Connected Malvis Attorneys at Law Law Office founded in 2022 with a wide range of
                    its Founding Partners experiences, which are &nbsp;
                    <b>Zubet Rizal.S.H., Reza Satria Kinayungan.S.H, CTL., Gading Yonggar Ditya.S.H.</b> Supported with
                    strong analitycal of Lawyers, Paralegal, as well as Field Administration Staff who will be incharged as a
                    solid team to provide many legal consultation to give the best service for valuable clients.
                  </p>
                </ContentLeftService>
              </ContentLeft>
            </Content>
          </Container>
        </Background>
      </Element>
    </>
  )
}
