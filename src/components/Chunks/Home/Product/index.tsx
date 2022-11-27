// import { useProduct } from '@hooks/useProduct'
import { useEffect, useState } from 'react'
import { Element } from 'react-scroll'
import tw, { styled } from 'twin.macro'
import { Container } from '@/components/Layouts'
// import ProductCard from '@/components/Card/Product'

const Background = styled.div`
  ${tw`bg-dark`}
`
const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full py-10 space-y-3 lg:flex-row lg:space-y-0 lg:py-16`}
`

const ContentHead = styled.h1`
  ${tw`mb-10 text-3xl font-bold mt-7 lg:text-4xl text-white`}
`

export const Product: React.FC = () => {
  const [isClass, setClass] = useState<string>()
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 686) {
        setClass('grid-cols-3 gap-x-8 text-justify')
      } else {
        setClass('grid-rows-2 space-y-8 text-justify')
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // const { dataProduct, isLoadingProduct } = useProduct(`products?populate=*`)

  return (
    <>
      <Element name="product" className="element">
        <Background>
          <Container tag={'div'} tw="p-5 md:p-14">
            <Content>
              <div tw="lg:mb-20">
                <ContentHead>CORPORATE & COMMERCIAL</ContentHead>
                <div className={`grid ${isClass}`}>
                  <div>
                    <p tw=" text-white mb-5">
                      We offer a wide range of corporate and commercial legal services, which comprise of, but not limited
                      to:
                    </p>
                  </div>
                  <div tw="text-white">We also advise on:</div>
                  <div tw="text-white">Energy and Oil & Gas</div>
                  <div>
                    <ul tw="list-disc ml-5 text-[#313C55]">
                      <li>
                        <span tw="text-white"> Mergers & Acquisitions; </span>
                      </li>
                      <li>
                        <span tw="text-white">IT / Telecommunications / E-commerce;</span>
                      </li>
                      <li>
                        <span tw="text-white">Labor and employment;</span>
                      </li>
                      <li>
                        <span tw="text-white">Plantation /Palm Oil / Forestry;</span>
                      </li>
                      <li>
                        <span tw="text-white">Insurance;</span>
                      </li>
                      <li>
                        <span tw="text-white">Energy and Mining;</span>
                      </li>
                      <li>
                        <span tw="text-white">Entertainment;</span>
                      </li>
                      <li>
                        <span tw="text-white">Real Estate / Hotels and Tourism; and</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div tw="mb-4">
                      <ul tw="list-disc ml-5 text-[#313C55]">
                        <li>
                          <span tw="text-white"> Legal Due Diligence </span>
                        </li>
                        <li>
                          <span tw="text-white">Mergers and Acquisitions;</span>
                        </li>
                        <li>
                          <span tw="text-white">Foreign direct or indirect investments; and</span>
                        </li>
                      </ul>
                    </div>
                    <span tw="text-white">Compliance and regulatory matters.</span>
                  </div>
                  <div>
                    <ul tw="list-disc ml-5 text-[#313C55]">
                      <li>
                        <span tw="text-white"> Mergers & Acquisitions; </span>
                      </li>
                      <li>
                        <span tw="text-white">IT / Telecommunications / E-commerce;</span>
                      </li>
                      <li>
                        <span tw="text-white">Labor and employment;</span>
                      </li>
                      <li>
                        <span tw="text-white">Plantation /Palm Oil / Forestry;</span>
                      </li>
                      <li>
                        <span tw="text-white">Insurance;</span>
                      </li>
                      <li>
                        <span tw="text-white">Energy and Mining;</span>
                      </li>
                      <li>
                        <span tw="text-white">Entertainment;</span>
                      </li>
                      <li>
                        <span tw="text-white">Real Estate / Hotels and Tourism; and</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* /* {!isLoadingProduct && (
                  <>
                    {dataProduct?.data.map((data: any, i: number) => (
                      <Fragment key={i}>
                        <ProductCard
                          image={data?.attributes?.images?.data?.attributes?.url}
                          title={data?.attributes?.title}
                          subtitle={data?.attributes?.description}
                          link={data?.attributes?.url}
                        />
                      </Fragment>
                    ))}
                  </>
                )} */}
            </Content>
          </Container>
        </Background>
      </Element>
    </>
  )
}
