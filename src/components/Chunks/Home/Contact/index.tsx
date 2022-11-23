import Button from '@/components/Buttons'
import { Container } from '@/components/Layouts'
import tw, { styled } from 'twin.macro'
import { Element } from 'react-scroll'

const Background = styled.div`
  ${tw`w-full border-b-8`}
  background-image:url(/assets/images/cta.png);
  background-size: cover;
  border-image-slice: 1;
  border-image-source: linear-gradient(90deg, #0161e7 -3.51%, #fc0c47 46%, #f68f11 75.16%, #fb0246 102.12%);
`
const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full py-[5.125rem]  text-center`}
`

const ContentHead = styled.h1`
  ${tw`text-2xl font-bold text-white md:text-4xl mb-7`}
`

export const Contact: React.FC = () => {
  return (
    <>
      <Element name="contactus" className="element">
        <Background>
          <Container>
            <Content>
              <ContentHead>Let's accelerate good things, together.</ContentHead>
              <Button
                text="Contact Us"
                variant="secondary"
                tw="font-semibold mt-6 rounded-full px-6"
                external={true}
                url="https://wa.link/4l62ek"
              />
            </Content>
          </Container>
        </Background>
      </Element>
    </>
  )
}
