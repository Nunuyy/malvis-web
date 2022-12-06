import { Container } from '@/components/Layouts'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import tw, { styled } from 'twin.macro'

const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full pt-5 lg:pt-16 lg:pb-[5.625rem] text-left lg:text-center`}
`
const ContentHead = styled.h1`
  ${tw`text-3xl font-bold lg:text-4xl mb-7`}
`
const ContentGalery = styled.div`
  ${tw`flex flex-col -space-y-2 md:space-y-0 w-full mt-2 lg:mt-[3.75rem] md:grid md:grid-cols-2 lg:text-left`}
`
const ContentGaleryItems = styled.div`
  ${tw`w-full p-4`}
`
const DescriptionWrapper = styled.div`
  ${tw`my-4 md:h-[9rem] lg:h-[8rem] lg:my-2 flex justify-items-center`}
  @media (max-width: 1160px) and (min-width: 1024px) {
    ${tw`h-[10rem]`}
  }
  @media (max-width: 904px) and (min-width: 768px) {
    ${tw`h-[12rem]`}
  }
`

export const Founder: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isIpad, setIsIpad] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsDesktop(true)
      } else if (window.innerWidth > 760) {
        setIsIpad(true)
        setIsDesktop(false)
      } else {
        setIsIpad(false)
        setIsDesktop(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <Container tag={'div'} tw="px-0 sm:p-5 md:p-10">
        <Content>
          <ContentHead>
            Founders<span tw="text-secondary">_</span>
          </ContentHead>
          <ContentGalery>
            <ContentGaleryItems>
              <div tw="border-2 border-primary rounded-md shadow flex flex-col p-5 text-gray-500">
                <div tw="flex flex-col space-y-4 lg:space-y-0 sm:flex-row">
                  <div>
                    <Image
                      unoptimized={true}
                      src={'/assets/images/founder-1.png'}
                      width={isDesktop ? 145 : isIpad ? 100 : 145}
                      height={isDesktop ? 145 : isIpad ? 100 : 145}
                      layout={'fixed'}
                    />
                  </div>
                  <div tw="flex flex-col sm:justify-center sm:ml-4">
                    <p tw="text-[#3B82F6] font-semibold md:text-base text-xl sm:mb-2">Ahmad Nugraha, S.T, M.M</p>
                    <p tw="md:text-base lg:font-medium">Pendiri & Komisaris</p>
                  </div>
                </div>
                <DescriptionWrapper>
                  <p tw="lg:w-[88%]">
                    Lebih dari 16 tahun pengalaman profesional di bidang Teknologi Informasi dan Komunikasi (TIK). Memiliki
                    passion di bidang bisnis digital dan socio-technopreneurship. Berpengalaman global bekerja di berbagai
                    perusahaan multinasional.
                  </p>
                </DescriptionWrapper>
                <div tw="flex items-center mt-2">
                  <Image unoptimized={true} src={'/assets/icons/linkedin.png'} layout="fixed" width={30} height={30} />
                  <Link href="http://linkedin.com/in/ahmadnr">
                    <a target="_blank">
                      <p tw="ml-3 hover:cursor-pointer">linkedin.com/in/ahmadnr</p>
                    </a>
                  </Link>
                </div>
              </div>
            </ContentGaleryItems>
            <ContentGaleryItems>
              <div tw="border-2 border-primary rounded-md shadow flex flex-col p-5 text-gray-500">
                <div tw="flex flex-col space-y-4 lg:space-y-0 sm:flex-row">
                  <div>
                    <Image
                      unoptimized={true}
                      src={'/assets/images/founder-2.png'}
                      width={isDesktop ? 145 : isIpad ? 100 : 145}
                      height={isDesktop ? 145 : isIpad ? 100 : 145}
                      layout={'fixed'}
                    />
                  </div>
                  <div tw="flex flex-col sm:justify-center sm:ml-4">
                    <p tw="text-[#3B82F6] font-semibold md:text-base text-xl sm:mb-2">Sutisna S.Kom</p>
                    <p tw="md:text-base lg:font-medium">Pendiri & Direktur Utama</p>
                  </div>
                </div>
                <DescriptionWrapper>
                  <p tw="lg:w-[88%]">
                    Pengalaman profesional di bidang Teknologi Informasi dan Komunikasi (TIK) lebih dari 10 tahun. Terpilih
                    sebagai YSEALI Academic Fellows 2016 untuk kuliah singkat di University of Connecticut di Amerika
                    Serikat.
                  </p>
                </DescriptionWrapper>
                <div tw="flex items-center mt-2">
                  <Image unoptimized={true} src={'/assets/icons/linkedin.png'} layout="fixed" width={30} height={30} />
                  <Link href="http://linkedin.com/in/sutisna">
                    <a target="_blank">
                      <p tw="ml-3 hover:cursor-pointer">linkedin.com/in/sutisna</p>
                    </a>
                  </Link>
                </div>
              </div>
            </ContentGaleryItems>
          </ContentGalery>
        </Content>
      </Container>
    </>
  )
}
