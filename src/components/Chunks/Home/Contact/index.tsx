import Button from '@/components/Buttons'
import { Container } from '@/components/Layouts'
import tw, { styled } from 'twin.macro'
import { Element } from 'react-scroll'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Background = styled.div`
  ${tw`w-full border-b-8`}
  background-image:url(/assets/images/bg-team.png);
  background-size: cover;
  border-image-slice: 1;
  border-image-source: linear-gradient(90deg, #b81c26 -3.11%, #313c55 66%, #232323 75.16%, #232323 102.12%);
`
const Content = styled.div`
  ${tw`items-center justify-between w-full   text-center`}
`

const ContentHead = styled.h1`
  ${tw`text-2xl font-bold pt-20 text-dark md:text-4xl`}
`

export const Contact: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1223) {
        setIsDesktop(true)
      } else {
        setIsDesktop(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <Element name="contactus" className="element">
        <Background>
          <Container>
            <Content>
              <ContentHead>Our Team</ContentHead>
              <Button text="Contact Us" variant="malvis" tw="font-semibold mt-6 rounded-full px-6" external={true} url="#" />
              <Image
                unoptimized={true}
                src={'/assets/images/ourteam.png'}
                layout="fixed"
                width={isDesktop ? 1140 : 350}
                height={isDesktop ? 340 : 200}
                objectFit="contain"
                className="translate-y-8"
              />
            </Content>
          </Container>
        </Background>
      </Element>
    </>
  )
}
