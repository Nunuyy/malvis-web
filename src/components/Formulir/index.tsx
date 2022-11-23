import Button from '@/components/Buttons'
import { Container } from '@/components/Layouts'
import { Element } from 'react-scroll'
import tw, { styled } from 'twin.macro'
import Image from 'next/image'

const Background = styled.div`
  ${tw`bg-right-bottom bg-no-repeat bg-primary bg-formulir-background`}
  @media (max-width: 1100px) {
    background-size: 50%;
  }
  @media (max-width: 1024px) {
    background-size: 50%;
  }
  @media (max-width: 768px) {
    background-size: 60%;
  }
  @media (max-width: 640px) {
    background-size: 350px;
  }
`
const Content = styled.div`
  ${tw`flex flex-col items-start justify-between lg:w-[55%] md:pt-0 pt-10 pb-72 md:pb-36 lg:pt-0 md:pb-[4.5rem] text-white`}
`
const ContentHead = styled.h1`
  ${tw`mt-4 mb-5 text-3xl font-bold`}
`
const ContentSub = styled.p`
  ${tw`mb-4 md:w-6/12 lg:w-10/12 md:mb-8`}
  @media (max-width: 1024px) and (min-width: 768px) {
    ${tw`w-full mb-24`}
  }
`

export const Formulir: React.FC = () => {
  return (
    <>
      <Element name="product" className="element">
        <Background>
          <Container tag={'div'} tw="p-5 md:p-14">
            <Content>
              <Image unoptimized={true} src={'/assets/images/logo_formulir.svg'} width={130} height={30} layout="fixed" />
              <ContentHead>Formulir online serba bisa.</ContentHead>
              <ContentSub>
                Buat formulir pendaftaran, terima pembayaran dan otomatisasi banyak hal. <br /> <br />
                Formulir.id adalah Software as a Service (SaaS) berbasis cloud untuk membuat formulir online. Cocok digunakan
                untuk pendaftaran, penjualan kelas online dan produk lainnya. Dilengkapi berbagai fitur otomatisasi seperti
                invoice, integrasi dengan payment gateway dan aplikasi webinar dll.
              </ContentSub>
              <Button
                text="Contact Us"
                variant="secondary"
                tw="mt-6 rounded-full px-8"
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
