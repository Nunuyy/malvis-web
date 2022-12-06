import Image from 'next/image'
import { FC } from 'react'
interface ClientProps {
  image: string
}

const Client: FC<ClientProps> = ({ image }) => (
  <>
    <Image unoptimized={true} src={image} layout="fixed" width={140} height={65} objectFit="contain" />
  </>
)

export default Client
