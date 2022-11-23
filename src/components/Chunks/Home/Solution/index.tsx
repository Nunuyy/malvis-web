import { useSolution } from '@hooks/useSolution'
import { Fragment } from 'react'
import { Element } from 'react-scroll'
import tw, { styled } from 'twin.macro'
import SolutionCard from '@/components/Card/Solution'
import { Container } from '@/components/Layouts'

const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full text-center`}
`
const ContentHead = styled.h1`
  ${tw`mt-20 mb-16 text-3xl font-bold lg:text-4xl`}
`
const ContentSolutionWrapper = styled.div`
  ${tw`grid grid-cols-1 gap-2 mx-auto gap-y-4 md:gap-4 md:grid-cols-2 lg:grid-cols-3 mb-14`}
`

export const Solution: React.FC = () => {
  const { dataSolution, isLoadingSolution } = useSolution(`solutions?populate=*`)

  return (
    <>
      <Element name="solution" className="element">
        <Container tag={'div'} tw="px-5 md:px-14">
          <Content>
            <ContentHead>
              Solutions<span tw="text-secondary">_</span>
            </ContentHead>
            <ContentSolutionWrapper>
              {!isLoadingSolution && (
                <>
                  {dataSolution?.data.map((data: any, i: number) => (
                    <Fragment key={i}>
                      <SolutionCard
                        image={data?.attributes?.icon?.data?.attributes?.url}
                        title={data?.attributes?.title}
                        subtitle={data?.attributes.description}
                      />
                    </Fragment>
                  ))}
                </>
              )}
            </ContentSolutionWrapper>
          </Content>
        </Container>
      </Element>
    </>
  )
}
