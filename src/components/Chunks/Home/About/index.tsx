import { Container } from '@/components/Layouts'
import tw, { styled } from 'twin.macro'
import { useAbout } from '@hooks/useAbout'
import { Element } from 'react-scroll'

const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full px-5 py-10 text-center lg:px-24`}
`

const ContentHead = styled.h1`
  ${tw`text-3xl font-bold lg:text-4xl mb-7`}
`

const Contentsub = styled.p`
  ${tw`text-gray-500 lg:text-lg xl:text-xl`}
`

export const About: React.FC = () => {
  const { dataAbout, isLoadingAbout } = useAbout(`about?populate=*`)

  return (
    <>
      <Element name="about" className="element">
        <Container tag={'div'} tw="px-0 sm:p-5 md:p-10">
          <Content>
            <ContentHead>
              About<span tw="text-secondary">_</span>
            </ContentHead>
            <Contentsub>{!isLoadingAbout && dataAbout?.data?.attributes?.AboutText}</Contentsub>
          </Content>
        </Container>
      </Element>
    </>
  )
}
