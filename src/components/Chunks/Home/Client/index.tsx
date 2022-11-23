import { Container } from '@/components/Layouts'
import Button from '@components/Buttons'
import { useClient } from '@hooks/useClient'
import { Element } from 'react-scroll'
import tw, { styled } from 'twin.macro'
import Image from 'next/image'

const Background = styled.div`
  ${tw`bg-gray-50`}
`
const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full pt-16 pb-16 lg:pb-[5.625rem] text-center`}
`
const ContentHead = styled.h1`
  ${tw`text-3xl font-bold lg:text-4xl mb-7`}
`
const Contentsub = styled.div`
  ${tw`text-gray-500 md:px-44 lg:px-44`}
`
const ContentGalery = styled.div`
  ${tw`lg:w-10/12 sm:px-5 mt-[3.75rem] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:grid-rows-3 gap-4`}
`
const ContentGaleryItems = styled.div`
  ${tw`h-[5rem] lg:h-[7rem] w-full border rounded shadow flex justify-center items-center p-5 cursor-pointer hover:bg-blue-300`}
`

export const Client: React.FC = () => {
  const { dataClient, isLoadingClient } = useClient(`featured-client?populate=Component.image`)
  return (
    <>
      <Element name="client" className="element">
        <Background>
          <Container>
            <Content>
              <ContentHead>
                Featured Clients<span tw="text-secondary">_</span>
              </ContentHead>
              <Contentsub>
                Kami telah dipercaya perusahaan nasional dan internasional untuk mengembangkan, mengelola dan memelihara
                software/sistem informasi mereka.
              </Contentsub>
              <ContentGalery>
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
              </ContentGalery>
              <Button text="More Client" tw="hidden rounded-full px-12 mt-10"></Button>
            </Content>
          </Container>
        </Background>
      </Element>
    </>
  )
}
