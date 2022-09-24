import { Element } from 'react-scroll'
import { Fragment } from 'react'
import { useState, useEffect } from 'react'
import tw, { styled } from 'twin.macro'
import { Container } from '@/components/Layouts'
import dataProduct from '@jsons/product.json'
import ProductCard from '@/components/Card/Product'

const Background = styled.div`
  ${tw`bg-primary`}
`
const Content = styled.div`
  ${tw`flex flex-col items-center mb-10 text-white bg-no-repeat`}
`
const ContentHead = styled.h1`
  ${tw`mb-20 text-3xl font-bold mt-7 lg:text-4xl`}
`

export const Product: React.FC = () => {
  const [isClass, setClass] = useState<string>()
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 686) {
        setClass('grid-cols-2')
      } else {
        setClass('grid-rows-2 space-y-8')
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <Element name="product" className="element">
        <Background>
          <Container tag={'div'} tw="p-5 md:p-14">
            <Content>
              <ContentHead>Products_</ContentHead>
              <div className={`grid ${isClass}`}>
                {dataProduct.map((data: any, i: number) => (
                  <Fragment key={i}>
                    <ProductCard
                      key={i}
                      image={data?.icon}
                      title={data?.title}
                      subtitle={data?.subtitle}
                      link={data?.link}
                    />
                  </Fragment>
                ))}
              </div>
            </Content>
          </Container>
        </Background>
      </Element>
    </>
  )
}
