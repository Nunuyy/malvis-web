import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro'

const ContentFounder = styled.div`
  ${tw`place-items-center items-center pl-5 my-auto flex w-full h-[170px] md:h-[220px] cursor-default transition ease-in-out delay-100 focus:outline-none hover:scale-110 hover:bg-primary hover:bg-opacity-10 duration-200 bg-gray-50 rounded-xl`}
`
const Title = styled.div`
  ${tw`flex-1 pr-2 text-xl font-bold text-left text-gray-900 capitalize pl-7`}
`
const SubTitle = styled.div`
  ${tw`pb-5 text-base font-medium text-gray-500 md:pb-7`}
`

interface FounderProps {
  image: string
  name: string
  about: string
  desc: string
  link: string
}

const Founder: FC<FounderProps> = ({ image, name, about, desc, link }) => {
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
    <ContentFounder>
      <Image
        unoptimized={true}
        src={image}
        layout="fixed"
        width={isDesktop ? 140 : 100}
        height={isDesktop ? 140 : 100}
        objectFit="contain"
      />
      <Title>
        {name}
        <SubTitle>
          {about} <br /> {desc}
        </SubTitle>

        <a href={link} target="_blank">
          <Image
            tw="cursor-pointer"
            unoptimized={true}
            src="/assets/icons/linkedin.png"
            layout="fixed"
            width={30}
            height={30}
          />
        </a>
      </Title>
    </ContentFounder>
  )
}

export default Founder
