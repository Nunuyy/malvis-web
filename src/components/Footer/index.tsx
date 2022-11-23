import { Container } from '@/components/Layouts'
import tw, { styled } from 'twin.macro'
import { Link as ReactLink } from 'react-scroll'
import Link from 'next/link'
import Image from 'next/image'

const Background = styled.div`
  ${tw`w-full`}
  background: linear-gradient(90deg, rgba(1, 97, 231, 0.05) -3.51%, rgba(252, 12, 71, 0.05) 46%, rgba(246, 143, 17, 0.05) 75.16%, rgba(251, 2, 70, 0.05) 102.12%);
`

const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full py-8 md:pt-[6rem] md:pb-12 md:px-24 lg:px-64 text-center`}
`
export const Footer: React.FC = () => {
  return (
    <>
      <Background>
        <Container>
          <Content>
            <div tw="flex space-x-5 justify-center flex-wrap lg:justify-evenly w-full text-gray-400">
              <ReactLink
                activeClass="active"
                offset={-60}
                to="home"
                spy={true}
                smooth={true}
                duration={300}
                className="cursor-pointer hover:text-black">
                Home
              </ReactLink>
              <ReactLink
                activeClass="active"
                offset={-60}
                to="about"
                spy={true}
                smooth={true}
                duration={300}
                className="cursor-pointer hover:text-black">
                About
              </ReactLink>
              <ReactLink
                activeClass="active"
                offset={-60}
                to="service"
                spy={true}
                smooth={true}
                duration={300}
                className="cursor-pointer hover:text-black">
                Service
              </ReactLink>
              <ReactLink
                activeClass="active"
                offset={-60}
                to="product"
                spy={true}
                smooth={true}
                duration={300}
                className="cursor-pointer hover:text-black">
                Product
              </ReactLink>
              <ReactLink
                activeClass="active"
                offset={-60}
                to="casestudy"
                spy={true}
                smooth={true}
                duration={300}
                className="hidden">
                Case Study
              </ReactLink>
              <ReactLink
                activeClass="active"
                offset={-60}
                to="technology"
                spy={true}
                smooth={true}
                duration={300}
                className="cursor-pointer hover:text-black">
                Technology
              </ReactLink>
              <ReactLink
                activeClass="active"
                offset={-60}
                to="contactus"
                spy={true}
                smooth={true}
                duration={300}
                className="cursor-pointer hover:text-black">
                Contact Us
              </ReactLink>
            </div>
            <div tw="flex space-x-3 md:space-x-0 justify-evenly w-3/12 text-gray-500 my-8">
              <Link href="https://www.facebook.com/sawala.tech/">
                <a target="_blank">
                  <Image unoptimized={true} src={'/assets/icons/facebook.png'} height={20} width={20} layout="fixed" />
                </a>
              </Link>
              <Link href="https://www.instagram.com/sawala.tech/">
                <a target="_blank">
                  <Image unoptimized={true} src={'/assets/icons/instagram.png'} height={20} width={20} layout="fixed" />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/company/sawala/">
                <a target="_blank">
                  <Image unoptimized={true} src={'/assets/icons/linked.png'} height={20} width={20} layout="fixed" />
                </a>
              </Link>
            </div>
            <p tw="text-gray-400 px-5">© {new Date().getFullYear()} PT Sawala Inovasi Indonesia. All rights reserved.</p>
          </Content>
        </Container>
      </Background>
    </>
  )
}
