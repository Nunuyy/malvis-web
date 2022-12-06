import Image from 'next/image'
import { FC } from 'react'
import tw, { styled } from 'twin.macro'
import Button from '@/components/Buttons'

const ContentProduct = styled.div`
  ${tw`text-center md:px-2 place-content-between`}
`
const Title = styled.h1`
  ${tw`pt-8 text-3xl font-bold`}
`
const SubTitle = styled.p`
  ${tw`px-2 pb-10 text-base font-normal pt-7`}
`

interface ProductProps {
  image: string
  title: string
  subtitle: string
  link: string
}

const Product: FC<ProductProps> = ({ image, title, subtitle, link }) => (
  <>
    <ContentProduct>
      <Image unoptimized={true} src={image} layout="fixed" width={149} height={149} objectFit="contain" />
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Button
        text="Learn More"
        tw="border-[1px] border-gray-300 bg-white shadow-sm rounded-full px-7 py-2 text-primary font-medium text-base"
        external={true}
        url={link}
      />
    </ContentProduct>
  </>
)

export default Product
