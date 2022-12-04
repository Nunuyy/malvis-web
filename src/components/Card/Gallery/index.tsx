import Image from 'next/image'
import { FC } from 'react'
import tw, { styled } from 'twin.macro'
import Button from '@/components/Buttons'

const ContentGallery = styled.div`
  ${tw`text-center md:px-2 place-content-between`}
`

interface GalleryProps {
  image: string
}

const Gallery: FC<GalleryProps> = ({ image }) => (
  <>
    <ContentGallery>
      <Image unoptimized={true} src={image} layout="fixed" width={149} height={149} objectFit="contain" />

      <Button
        text="Learn More"
        tw="border-[1px] border-gray-300 bg-white shadow-sm rounded-full px-7 py-2 text-primary font-medium text-base"
        external={true}
      />
    </ContentGallery>
  </>
)

export default Gallery
