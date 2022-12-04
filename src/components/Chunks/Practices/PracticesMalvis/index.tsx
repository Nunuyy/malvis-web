/* eslint-disable prettier/prettier */
// import { useSolution } from '@hooks/useSolution'
// import { Fragment } from 'react'
import { Element } from 'react-scroll'
import tw, { styled } from 'twin.macro'
// import SolutionCard from '@/components/Card/Solution'
import { Container } from '@/components/Layouts'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full text-center`}
`
const ContentHead = styled.h1`
  ${tw`mt-20 mb-5 text-3xl font-bold text-malvis lg:text-4xl`}
`
const ContentSolutionWrapper = styled.div`
  ${tw`mx-auto`}
`
// const ContentSolution = styled.div`
//   ${tw`items-center justify-center text-center lg:w-full`}
// `

export const PracticesMalvis: React.FC = () => {
  // const { dataSolution, isLoadingSolution } = useSolution(`solutions?populate=*`)
  useEffect(() => {
    AOS.init({
      duration: 3000
    })
  }, [])
  return (
    <>
      <Element name="practices" className="element">
        <Container tag={'div'} tw="px-5 md:px-14">
          <Content data-aos="fade">
            <ContentHead>PRACTICES AREA</ContentHead>
            <ContentSolutionWrapper>
              <p tw="text-[#2b2b2b] font-bold mb-5 text-center">Litigation and Dispute Resolution</p>
              <p tw="text-dark mb-5 text-justify md:text-center">
                We provide advocacy services for civil, criminal and commercial disputes as well as other litigation matters
                before Indonesian courts. Our services include both civil and criminal proceedings. We our client assist in
                legal disputes pertaining to, among others, contractual and shareholders disputes, Corruption, general
                commercial litigation, commercial arbitration, land disputes, Family law (inheritance, Divorce, pre-nuptial
                agreement, ) and bankruptcy/insolvency. We assist in formulating dispute strategies, assembling and analyzing
                facts and evidences, and court proceedings.
              </p>
              {/* <Button
                text="Learn More"
                variant="malvis-red"
                tw="mt-6 rounded-full px-8 place-content-center"
                external={true}
                url="#"
              /> */}
              {/* {!isLoadingSolution && (
              <>
                {dataSolution?.data.map((data: any, i: number) => (
                  <Fragment key={i}> */}
              {/* <SolutionCard */}
              {/* // image={data?.attributes?.icon?.data?.attributes?.url}
            // title={data?.attributes?.title}
            // subtitle={data?.attributes.description} */}
              {/* /> */}
              {/* </Fragment>
                ))}
              </>
            )} */}
              {/* <ContentSolution tw="lg:mt-0">
              <p tw="text-white font-bold text-3xl lg:text-4xl my-5 text-center">About Us</p>
              <p tw="text-white mb-5 text-center">
                Local Counsel, Globally Connected Malvis Attorneys at Law Law Office founded in 2022 with a wide range of
                its Founding Partners experiences, which are{' '}
                <b>Zubet Rizal.S.H., Reza Satria Kinayungan.S.H, CTL., Gading Yonggar Ditya.S.H.</b> Supported with strong
                analitycal of Lawyers, Paralegal, as well as Field Administration Staff who will be incharged as a solid
                team to provide many legal consultation to give the best service for valuable clients.
              </p>
              <Button
                text="Learn More"
                variant="malvis"
                tw="mt-6 rounded-full px-8 place-content-center"
                external={true}
                url="https://wa.link/4l62ek"
              />
            </ContentSolution> */}
            </ContentSolutionWrapper>
          </Content>
        </Container>
      </Element>
    </>
  )
}
