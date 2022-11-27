import { Link, scroller } from 'react-scroll'
import { styled } from 'twin.macro'
const NavLinks = styled(Link)`
  color: white;
  &.active {
    font-weight: 700;
    border-bottom: 4px solid #b81c26;
  }
`
import { FC } from 'react'
import { useRouter } from 'next/router'
interface LinkProps {
  to: string
  title: string
  onClick: any
  offset: number
}

const Links: FC<LinkProps> = ({ to, title, onClick, offset }) => {
  const router = useRouter()
  const scrollTarget = (target: string) => scroller.scrollTo(target, { smooth: true, duration: 300, offset: offset })
  const scrollToPage = async (target: any) => {
    if (router.asPath !== '/') {
      await router.push('/')
    }
    scrollTarget(target)
  }
  return (
    <>
      <NavLinks
        activeClass="active"
        offset={offset}
        to={to}
        spy={true}
        smooth={true}
        duration={300}
        onClick={() => {
          scrollToPage(to)
          onClick && onClick()
        }}
        className="cursor-pointer">
        {title}
      </NavLinks>
    </>
  )
}

export default Links
