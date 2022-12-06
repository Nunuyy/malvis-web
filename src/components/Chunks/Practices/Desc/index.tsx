import { Container } from '@/components/Layouts'
// import Button from '@components/Buttons'
// import { useClient } from '@hooks/useClient'
import { Element } from 'react-scroll'
import tw, { styled } from 'twin.macro'
// import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Background = styled.div`
  ${tw``}
`
const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full text-center`}
`

const Contentsub = styled.p`
  ${tw`text-dark mb-0 my-14 md:mt-0 text-justify md:text-center`}
`
// const ContentGalery = styled.div`
//   ${tw`lg:w-10/12 sm:px-5 mt-[3.75rem] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:grid-rows-3 gap-4`}
// `
// const ContentGaleryItems = styled.div`
//   ${tw`h-[5rem] lg:h-[7rem] w-full border rounded shadow flex justify-center items-center p-5 cursor-pointer hover:bg-blue-300`}
// `

export const Desc: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000
    })
  }, [])
  // const { dataClient, isLoadingClient } = useClient(`featured-client?populate=Component.image`)
  return (
    <>
      <Element name="client" className="element">
        <Background>
          <Container>
            <Content data-aos="fade">
              <Contentsub>
                The government's reconciliation can be widely large and strong sanctions for inaccurate tax reporting we are
                experienced in the tax process from the process of corrections, appeal, tax-fed lawsuit, and Indonesian
                national police handling in tax crimes. Therefore, managing the risk of your tax exposure is very important,
                either in terms of you are looking for peace of mind for your own company or before buying . This risk can be
                managed by reviewing your financial statements, accounting records and your tax reports to ensure any tax
                inaccuracies or exposure can be identified and actions taken at the right time.
              </Contentsub>
              {/* <ContentGalery>
                {!isLoadingClient && (
                  <>
                    {dataClient?.data?.attributes?.Component?.map((data: any, i: number) => (
                      <ContentGaleryItems key={i}>
                        <Image
                          unoptimized={true}
                          src={data?.image?.data?.attributes?.url}
                          layout="fixed"
                          width={140}
                          height={65}
                          objectFit="contain"
                        />
                      </ContentGaleryItems>
                    ))}
                  </>
                )}
              </ContentGalery> */}
              {/* <Button text="More Client" tw="hidden rounded-full px-12 mt-10"></Button> */}
            </Content>
          </Container>
        </Background>
      </Element>
    </>
  )
}
