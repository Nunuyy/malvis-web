import { Element } from 'react-scroll'
import { Fragment } from 'react'
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
const ContentProductWrapper = styled.div`
  ${tw`flex flex-col space-y-24 md:space-y-0 lg:space-x-24 md:space-x-10 md:flex-row`}
`

export const Product: React.FC = () => {
  return (
    <>
      <Element name="product" className="element">
        <Background>
          <Container tag={'div'} tw="p-5 md:p-14">
            <Content>
              <ContentHead>Products_</ContentHead>
              <ContentProductWrapper>
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
              </ContentProductWrapper>
            </Content>
          </Container>
        </Background>
      </Element>
    </>
  )
}
