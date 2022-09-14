import Button from '@/components/Buttons'
import { Container } from '@/components/Layouts'
import Image from 'next/image'
import { Element } from 'react-scroll'
import tw, { styled } from 'twin.macro'

const Background = styled.div`
  ${tw`bg-gray-50`}
`
const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full py-10 space-y-3 lg:flex-row lg:space-y-0 lg:py-16`}
`
const ContentLeft = styled.div`
  ${tw``}
`
const ContentLeftService = styled.div`
  ${tw`lg:w-2/3`}
`
const ContentRight = styled.div`
  ${tw`justify-center hidden lg:flex lg:w-1/2`}
`
const ContentMobileRight = styled.div`
  ${tw`flex justify-center py-10 md:justify-start lg:hidden lg:w-1/2`}
`
const PartnerWrapper = styled.div`
  ${tw`sm:w-max lg:w-8/12 mt-[2.125rem]`}
  @media (max-width: 1210px) and (min-width: 1024px) {
    ${tw`w-9/12`}
  }
`
export const Service: React.FC = () => {
  return (
    <>
      <Element name="service" className="element">
        <Background>
          <Container tag={'div'} tw="p-5 md:p-14">
            <Content>
              <ContentLeft>
                <ContentLeftService tw="lg:mb-20">
                  <p tw="text-secondary font-bold uppercase">Service</p>
                  <p tw="text-primary font-bold text-3xl lg:text-4xl my-5">End-to-end Software Development</p>
                  <p tw="text-gray-500 mb-5">
                    Kami mengembangan sistem informasi berbasis website dari perencanaan hingga siap digunakan:
                  </p>
                  <ul tw="list-disc ml-5 text-primary">
                    <li>
                      <span tw="text-gray-500"> UI/UX design</span>
                    </li>
                    <li>
                      <span tw="text-gray-500"> Application Programming Interface (API)</span>
                    </li>
                    <li>
                      <span tw="text-gray-500"> Front-end development</span>
                    </li>
                    <li>
                      <span tw="text-gray-500"> Deployment, CI/CD & cloud management</span>
                    </li>
                    <li>
                      <span tw="text-gray-500"> Perencanaan & dokumentasi teknis</span>
                    </li>
                  </ul>
                  <Button
                    text="Learn More"
                    variant="primary"
                    tw="mt-6 rounded-full px-8"
                    external={true}
                    url="https://wa.link/4l62ek"
                  />
                </ContentLeftService>
                <div>
                  <ContentMobileRight>
                    <div>
                      <div tw="grid grid-cols-2 grid-rows-5 gap-6">
                        <div tw="row-span-2 row-start-2">
                          <Image
                            unoptimized={true}
                            src={'/assets/images/service-photo-1.png'}
                            width={150}
                            height={150}
                            layout="fixed"
                            tw="rounded-md"
                          />
                        </div>
                        <div tw="row-span-2 row-start-1">
                          <Image
                            unoptimized={true}
                            src={'/assets/images/service-photo-3.png'}
                            width={150}
                            height={150}
                            layout="fixed"
                            tw="rounded-md"
                          />
                        </div>
                        <div tw="row-span-2 row-start-4">
                          <Image
                            unoptimized={true}
                            src={'/assets/images/service-photo-2.png'}
                            width={150}
                            height={150}
                            layout="fixed"
                            tw="rounded-md"
                          />
                        </div>
                        <div tw="row-span-2 row-start-3">
                          <Image
                            unoptimized={true}
                            src={'/assets/images/service-photo-4.png'}
                            width={150}
                            height={150}
                            layout="fixed"
                            tw="rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </ContentMobileRight>
                  <ContentLeftService>
                    <p tw="text-secondary font-bold uppercase">Service</p>
                    <p tw="text-primary font-bold text-3xl lg:text-4xl my-5">Cloud Reseller</p>
                    <p tw="text-gray-500 mb-5">Kami adalah mitra penjualan untuk layanan cloud:</p>
                    <ul tw="list-disc ml-5 text-primary">
                      <li>
                        <span tw="text-gray-500"> LivePerson (AI-powered conversational cloud)</span>
                      </li>
                      <li>
                        <span tw="text-gray-500"> Amazon Web Service (AWS)</span>
                      </li>
                      <li>
                        <span tw="text-gray-500"> Google Workspace/Suite</span>
                      </li>
                      <li>
                        <span tw="text-gray-500"> DigitalOcean</span>
                      </li>
                    </ul>
                  </ContentLeftService>
                  <PartnerWrapper>
                    <div tw="md:hidden grid grid-cols-4 grid-rows-3 gap-x-4 place-items-start">
                      <div tw="row-span-2">
                        <Image
                          unoptimized={true}
                          src={'/assets/images/service-1.png'}
                          width={75}
                          height={80}
                          layout="fixed"
                        />
                      </div>
                      <div tw="col-span-2">
                        <Image
                          unoptimized={true}
                          src={'/assets/images/service-5.png'}
                          width={165}
                          height={35}
                          layout="fixed"
                        />
                      </div>
                      <div tw="">
                        <Image
                          unoptimized={true}
                          src={'/assets/images/service-2.png'}
                          width={65}
                          height={35}
                          layout="fixed"
                        />
                      </div>
                      <div tw="col-span-3">
                        <Image
                          unoptimized={true}
                          src={'/assets/images/service-4.png'}
                          width={235}
                          height={35}
                          layout="fixed"
                        />
                      </div>
                      <div tw="">
                        <Image
                          unoptimized={true}
                          src={'/assets/images/service-6.png'}
                          width={75}
                          height={35}
                          layout="fixed"
                        />
                      </div>
                      <div tw="">
                        <Image
                          unoptimized={true}
                          src={'/assets/images/service-3.png'}
                          width={85}
                          height={35}
                          layout="fixed"
                        />
                      </div>
                    </div>
                    <div tw="hidden md:grid grid-cols-5 grid-rows-2 lg:gap-x-24 place-items-start">
                      <div tw="row-span-2">
                        <Image
                          unoptimized={true}
                          src={'/assets/images/service-1.png'}
                          width={106}
                          height={110}
                          layout="fixed"
                        />
                      </div>
                      <div tw="col-span-2">
                        <Image
                          unoptimized={true}
                          src={'/assets/images/service-5.png'}
                          width={220}
                          height={50}
                          layout="fixed"
                        />
                      </div>
                      <div>
                        <Image
                          unoptimized={true}
                          src={'/assets/images/service-2.png'}
                          width={105}
                          height={50}
                          layout="fixed"
                        />
                      </div>
                      <div tw="">
                        <Image
                          unoptimized={true}
                          src={'/assets/images/service-6.png'}
                          width={102}
                          height={50}
                          layout="fixed"
                        />
                      </div>
                      <div tw="">
                        <Image
                          unoptimized={true}
                          src={'/assets/images/service-3.png'}
                          width={107}
                          height={50}
                          layout="fixed"
                        />
                      </div>
                      <div tw="col-span-2">
                        <Image
                          unoptimized={true}
                          src={'/assets/images/service-4.png'}
                          width={332}
                          height={50}
                          layout="fixed"
                        />
                      </div>
                    </div>
                  </PartnerWrapper>
                </div>
                <Button
                  text="Learn More"
                  variant="primary"
                  tw="mt-6 rounded-full px-8"
                  external={true}
                  url="https://wa.link/4l62ek"
                />
              </ContentLeft>
              <ContentRight>
                <div>
                  <div tw="grid grid-cols-2 grid-rows-5 gap-6">
                    <div tw="row-span-2 row-start-2">
                      <Image
                        unoptimized={true}
                        src={'/assets/images/service-photo-1.png'}
                        width={210}
                        height={210}
                        layout="fixed"
                        tw="rounded-md"
                      />
                    </div>
                    <div tw="row-span-2 row-start-1">
                      <Image
                        unoptimized={true}
                        src={'/assets/images/service-photo-3.png'}
                        width={210}
                        height={210}
                        layout="fixed"
                        tw="rounded-md"
                      />
                    </div>
                    <div tw="row-span-2 row-start-4">
                      <Image
                        unoptimized={true}
                        src={'/assets/images/service-photo-2.png'}
                        width={210}
                        height={210}
                        layout="fixed"
                        tw="rounded-md"
                      />
                    </div>
                    <div tw="row-span-2 row-start-3">
                      <Image
                        unoptimized={true}
                        src={'/assets/images/service-photo-4.png'}
                        width={210}
                        height={210}
                        layout="fixed"
                        tw="rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </ContentRight>
            </Content>
          </Container>
        </Background>
      </Element>
    </>
  )
}
