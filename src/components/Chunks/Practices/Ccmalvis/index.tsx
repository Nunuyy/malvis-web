import { Container } from '@/components/Layouts'
import { Element } from 'react-scroll'
import tw, { styled } from 'twin.macro'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full p-4 mt-8 sm:mt-0 lg:flex-row lg:px-0 lg:py-16`}
`

const ContentRight = styled.div`
  ${tw`flex-col py-5 space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 lg:flex lg:flex-row justify-evenly`}
`
const ContentRightHead = styled.h1`
  ${tw`mb-6 text-2xl font-bold text-dark`}
`
const ContentRightSub = styled.div`
  ${tw`text-gray-500`}
`
const ContentRightLeft = styled.div`
  ${tw`relative flex flex-col justify-start lg:w-2/5 bg-[#F7FAFC] py-[3.125rem] px-6`}
  div:before {
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    border-radius:8px; 
    padding-left:10px;
    padding-bottom:10px;
    background:linear-gradient(90deg, #B81C26 -3.51%, #313C55 46%, #313C55 75.16%, #232323 102.12%); 
    -webkit-mask: 
       linear-gradient(#fff 0 0) content-box, 
       linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out; 
    mask-composite: exclude; 
`
const ContentRightRight = styled.div`
  ${tw`relative flex flex-col justify-start lg:w-2/5 bg-[#F7FAFC] py-[3.125rem] px-6`}
  div:before {
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    border-radius:8px; 
    padding-right:10px;
    padding-top:10px;
    background:linear-gradient(90deg, #B81C26 -3.51%, #313C55 46%, #313C55 75.16%, #232323 102.12%); 
    -webkit-mask: 
       linear-gradient(#fff 0 0) content-box, 
       linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out; 
    mask-composite: exclude; 
`
const Ul = styled.ul`
  ${tw`list-outside ml-4 list-disc my-5 text-[#313C55]`}
`

export const Ccmalvis: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000
    })
  }, [])

  return (
    <>
      <Element name="ccmalvis" className="element">
        <Container tag={'div'} tw="px-0 pt-5 sm:pt-0 sm:p-5 md:px-14">
          <Content>
            <ContentRight>
              <ContentRightLeft data-aos="fade">
                <ContentRightHead>Corporate & Commercial</ContentRightHead>
                <ContentRightSub>
                  We offer a wide range of corporate and commercial legal services, which comprise of, but not limited to:
                  <br />
                  <Ul>
                    <li>
                      <span tw="text-gray-500">Mergers & Acquisitions;</span>{' '}
                    </li>
                    <li>
                      <span tw="text-gray-500">IT / Telecommunications / E-commerce;</span>
                    </li>
                    <li>
                      <span tw="text-gray-500">Labor and employment;</span>
                    </li>
                    <li>
                      <span tw="text-gray-500">Plantation /Palm Oil / Forestry;</span>
                    </li>
                    <li>
                      <span tw="text-gray-500">Insurance;</span>
                    </li>
                    <li>
                      <span tw="text-gray-500">Energy and Mining;</span>
                    </li>
                    <li>
                      <span tw="text-gray-500">Entertainment;</span>
                    </li>
                    <li>
                      <span tw="text-gray-500">Real Estate / Hotels and Tourism; and</span>
                    </li>
                  </Ul>
                </ContentRightSub>
              </ContentRightLeft>
              <ContentRightRight data-aos="fade">
                <ContentRightHead>We also advise on:</ContentRightHead>
                <ContentRightSub>
                  <Ul>
                    <div tw="mb-3">
                      <li>
                        <span tw="text-gray-500">Legal Due Diligence</span>
                      </li>
                      <li>
                        <span tw="text-gray-500">Mergers and Acquisitions;</span>
                      </li>
                      <li>
                        <span tw="text-gray-500">Foreign direct or indirect investments; and</span>
                      </li>
                    </div>
                    Compliance and regulatory matters.
                  </Ul>
                </ContentRightSub>
              </ContentRightRight>
              <ContentRightLeft data-aos="fade">
                <ContentRightHead>Energy and Oil & Gas</ContentRightHead>
                <ContentRightSub>
                  We help private and public sector in the oil, gas and renewable energy industry achieve efficient and
                  innovative solutions to their legal, regulatory and structural challenges. Our team provide hands on legal
                  support to oil, gas, and liquid natural gas (LNG) hands on, both behind the scenes, in board rooms as well
                  as on site, including monitoring and advising on the daily operations of national and international oil and
                  gas companies.
                  <br />
                  TAX
                  <Ul>
                    <li>
                      <span tw="text-gray-500">Tax Litigation</span>{' '}
                    </li>
                    <li>
                      <span tw="text-gray-500">Tax Review</span>
                    </li>
                    <li>
                      <span tw="text-gray-500">Tax Due Dilligence </span>
                    </li>
                    <li>
                      <span tw="text-gray-500">Tax Reconciliation </span>
                    </li>
                  </Ul>
                </ContentRightSub>
              </ContentRightLeft>
            </ContentRight>
          </Content>
        </Container>
      </Element>
    </>
  )
}
