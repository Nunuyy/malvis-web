import Image from 'next/image'
import { FC } from 'react'
import tw, { styled } from 'twin.macro'

const ContentSolution = styled.div`
  ${tw`items-center justify-center max-w-[381px] max-h[246px] cursor-default transition ease-in-out delay-100 focus:outline-none hover:scale-110 hover:bg-primary hover:bg-opacity-10 duration-200 bg-gray-50 rounded-xl py-11`}
`

const Title = styled.div`
  ${tw`pt-3 text-xl font-bold text-gray-900 capitalize md:px-1`}
`

const SubTitle = styled.div`
  ${tw`px-2 mx-10 text-base font-normal text-gray-500 md:p-2 lg:px-2`}
`
interface SolutionProps {
  image: string
  title: string
  subtitle: string
}

const Solution: FC<SolutionProps> = ({ image, title, subtitle }) => (
  <ContentSolution>
    <Image unoptimized={true} src={image} layout="fixed" width={50} height={50} objectFit="contain" />
    <Title>{title}</Title>
    <SubTitle>{subtitle}</SubTitle>
  </ContentSolution>
)

export default Solution
