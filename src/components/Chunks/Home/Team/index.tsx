import Button from '@/components/Buttons'
import TeamCard from '@/components/Card/Team'
import { Container } from '@/components/Layouts'
import { useTeam } from '@hooks/useTeam'
import { Fragment, useEffect, useState } from 'react'
import { Element } from 'react-scroll'

export const Team: React.FC = () => {
  const [isClass, setClass] = useState<string>()
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1342) {
        setClass('grid-cols-3')
      } else if (window.innerWidth > 786) {
        setClass('grid-cols-2')
      } else if (window.innerWidth < 786) {
        setClass('grid-cols-1')
      } else if (window.innerWidth > 1024) {
        setClass('grid-cols-2')
      } else if (window.innerWidth < 1024) {
        setClass('grid-cols-1')
      } else {
        setClass('')
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { dataTeam, isLoadingTeam } = useTeam(`our-teams?populate=*`)

  return (
    <>
      <Element name="team" className="element">
        <Container tag={'div'} tw="px-5 md:px-14">
          <div tw="flex flex-col items-center justify-between w-full text-center">
            <h1 tw="mt-20 mb-16 text-3xl font-bold lg:text-4xl">
              Our Team<span tw="text-secondary">_</span>
            </h1>

            <div className={`grid gap-4 mb-24 ${isClass}`}>
              {!isLoadingTeam && (
                <>
                  {dataTeam?.data.map((data: any, i: number) => (
                    <Fragment key={i}>
                      <TeamCard
                        image={data?.attributes?.photo?.data?.attributes?.url}
                        name={data?.attributes?.name}
                        about={data?.attributes?.position}
                        link={data?.attributes?.lingkedInUrl}
                      />
                      {i == 2 && (
                        <div tw="place-items-center md:order-last lg:order-none p-4 hidden md:flex w-full h-[220px] cursor-default transition ease-in-out delay-100 focus:outline-none hover:scale-110 bg-blue-400 duration-200 rounded-xl">
                          <div className="p-4 text-xl font-medium text-left text-white">
                            <p tw="w-11/12">Accelerate good things with technology</p>
                            <Button
                              text="Meet entire team"
                              variant="secondary"
                              tw="rounded-md px-5 mt-12 font-medium text-base py-2 text-opacity-70"
                              external={true}
                              url="https://wa.link/4l62ek"
                            />
                          </div>
                        </div>
                      )}
                    </Fragment>
                  ))}
                </>
              )}

              <div tw="place-items-center p-4 flex md:hidden w-full h-[220px] cursor-default transition ease-in-out delay-100 focus:outline-none hover:scale-110 bg-blue-400 duration-200 rounded-xl">
                <div className="p-4 text-xl font-medium text-left text-white">
                  <p tw="w-11/12">Accelerate good things with technology</p>
                  <Button
                    text="Meet entire team"
                    variant="secondary"
                    tw="rounded-md px-5 mt-12 font-medium text-base py-2 text-opacity-70"
                    external={true}
                    url="https://wa.link/4l62ek"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Element>
    </>
  )
}
