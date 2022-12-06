import tw, { styled } from 'twin.macro'
import Image from 'next/image'
import React, { Fragment } from 'react'
//import React, {  useRef } from 'react'
import Slider, { Settings } from 'react-slick'
import { Container } from '@/components/Layouts'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// import dataGallery from '@jsons/gallery.json'
// import GalleryCard from '@/components/Card/Gallery'

const WrapperSlider = styled.div`
  ${tw`flex items-center place-content-center w-full gap-0`}
  .slick-slider {
    overflow: hidden;
  }
`

export const GalleryMalvis: React.FC = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  const setting: Settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    swipeToSlide: true,
    rows: 1,
    autoplay: true,
    speed: 3000,
    verticalSwiping: true,
    autoplaySpeed: 5000,
    centerMode: true
  }
  // const sliderRef = useRef<any>(null)
  // const gotoNext = () => {
  //   sliderRef.current.slickNext()
  // }
  // const gotoPrev = () => {
  //   sliderRef.current.slickPrev()
  // }
  return (
    <Container tag={'div'} tw="grid grid-cols-1  md:grid-cols-3 grid-rows-1">
      <Fragment>
        <div>
          <WrapperSlider data-aos="fade">
            <Slider {...setting}>
              {/* ref={sliderRef} */}
              {[...Array(1)].map(() => (
                <div key={Math.random()}>
                  <div>
                    <Image
                      unoptimized={true}
                      src={'/assets/images/1.jpg'}
                      layout="fixed"
                      width={200}
                      height={300}
                      objectFit="contain"
                      className="bg-[#d9d9d9]"
                    />
                  </div>
                  <div>
                    <Image
                      unoptimized={true}
                      src={'/assets/images/3.jpg'}
                      layout="fixed"
                      width={200}
                      height={300}
                      objectFit="contain"
                      className="bg-[#d9d9d9]"
                    />
                  </div>
                </div>
              ))}
              {[...Array(1)].map(() => (
                <div key={Math.random()}>
                  <div>
                    <Image
                      unoptimized={true}
                      src={'/assets/images/5.jpg'}
                      layout="fixed"
                      width={200}
                      height={300}
                      objectFit="contain"
                      className="bg-[#d9d9d9]"
                    />
                  </div>
                  <div>
                    <Image
                      unoptimized={true}
                      src={'/assets/images/2.jpg'}
                      layout="fixed"
                      width={200}
                      height={300}
                      objectFit="contain"
                      className="bg-[#d9d9d9]"
                    />
                  </div>
                </div>
              ))}
              {[...Array(1)].map(() => (
                <div key={Math.random()}>
                  <div>
                    <Image
                      unoptimized={true}
                      src={'/assets/images/4.jpg'}
                      layout="fixed"
                      width={200}
                      height={300}
                      objectFit="contain"
                      className="bg-[#d9d9d9]"
                    />
                  </div>
                  <div>
                    <Image
                      unoptimized={true}
                      src={'/assets/images/6.jpg'}
                      layout="fixed"
                      width={200}
                      height={300}
                      objectFit="contain"
                      className="bg-[#d9d9d9]"
                    />
                  </div>
                </div>
              ))}
              {[...Array(1)].map(() => (
                <div key={Math.random()}>
                  <div>
                    <Image
                      unoptimized={true}
                      src={'/assets/images/9.jpg'}
                      layout="fixed"
                      width={200}
                      height={300}
                      objectFit="contain"
                      className="bg-[#d9d9d9]"
                    />
                  </div>
                  <div>
                    <Image
                      unoptimized={true}
                      src={'/assets/images/10.jpg'}
                      layout="fixed"
                      width={200}
                      height={300}
                      objectFit="contain"
                      className="bg-[#d9d9d9]"
                    />
                  </div>
                </div>
              ))}
              {[...Array(1)].map(() => (
                <div key={Math.random()}>
                  <div>
                    <Image
                      unoptimized={true}
                      src={'/assets/images/9.jpg'}
                      layout="fixed"
                      width={200}
                      height={300}
                      objectFit="contain"
                      className="bg-[#d9d9d9]"
                    />
                  </div>
                  <div>
                    <Image
                      unoptimized={true}
                      src={'/assets/images/12.jpg'}
                      layout="fixed"
                      width={200}
                      height={300}
                      objectFit="contain"
                      className="bg-[#d9d9d9]"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </WrapperSlider>
          {/* <div tw="w-full flex space-x-3 items-center place-content-center">
            <div className="flex w-20 col-span-4 gap-4 mt-3">
              <button className="button" onClick={() => gotoPrev()}>
                <Image
                  src="/assets/images/arrow-down-circle.svg"
                  alt=""
                  className="object-contain w-full cursor-pointer"
                  width={170}
                  height={170}
                />
              </button>
              <button className="button" onClick={() => gotoNext()}>
                <Image
                  src="/assets/images/arrow-up-circle.svg"
                  alt=""
                  className="object-contain w-full cursor-pointer"
                  width={170}
                  height={170}
                />
              </button>
            </div>
          </div> */}
        </div>
        <div tw="md:my-32">
          <div tw="md:my-auto grid sm:py-8 py-8 md:py-0 place-content-center items-center" data-aos="fade">
            <p tw="text-center text-malvisblue font-bold md:text-4xl text-xl mb-2  md:mb-4  ">ABOUT US</p>
            <p tw="text-[#232323] -translate-y-20 mb-2  md:mb-5 text-justify text-sm">
              Local Counsel, Globally Connected Malvis Attorneys at Law Law Office founded in 2022 with a wide range of its
              Founding Partners experiences, which are &nbsp;
              <b>Zubet Rizal.S.H., Reza Satria Kinayungan.S.H, CTL., Gading Yonggar Ditya.S.H.</b> Supported with strong
              analitycal of Lawyers, Paralegal, as well as Field Administration Staff who will be incharged as a solid team
              to provide many legal consultation to give the best service for valuable clients.
            </p>
          </div>
        </div>
      </Fragment>
      <Fragment>
        <div>
          <WrapperSlider data-aos="fade">
            <Slider {...setting}>
              {/* ref={sliderRef} */}
              {[...Array(1)].map(() => (
                <div>
                  <div>
                    <Image
                      unoptimized={true}
                      src={'/assets/images/7.jpg'}
                      layout="fixed"
                      width={200}
                      height={198}
                      objectFit="contain"
                      className="bg-[#d9d9d9]"
                    />
                  </div>
                  <div>
                    <Image
                      unoptimized={true}
                      src={'/assets/images/8.jpg'}
                      layout="fixed"
                      width={200}
                      height={198}
                      objectFit="contain"
                      className="bg-[#d9d9d9]"
                    />
                  </div>
                  <div>
                    <Image
                      unoptimized={true}
                      src={'/assets/images/11.jpg'}
                      layout="fixed"
                      width={200}
                      height={198}
                      objectFit="contain"
                      className="bg-[#d9d9d9]"
                    />
                  </div>
                </div>
              ))}
              {[...Array(1)].map(() => (
                <div>
                  <div>
                    <Image
                      unoptimized={true}
                      src={'/assets/images/8.jpg'}
                      layout="fixed"
                      width={200}
                      height={198}
                      objectFit="contain"
                      className="bg-[#d9d9d9]"
                    />
                  </div>
                  <div>
                    <Image
                      unoptimized={true}
                      src={'/assets/images/7.jpg'}
                      layout="fixed"
                      width={200}
                      height={198}
                      objectFit="contain"
                      className="bg-[#d9d9d9]"
                    />
                  </div>
                  <div>
                    <Image
                      unoptimized={true}
                      src={'/assets/images/11.jpg'}
                      layout="fixed"
                      width={200}
                      height={198}
                      objectFit="contain"
                      className="bg-[#d9d9d9]"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </WrapperSlider>
          {/* <div tw="w-full flex space-x-3 items-center place-content-center">
            <div className="flex w-20 col-span-4 gap-4 mt-3">
              <button className="button" onClick={() => gotoPrev()}>
                <Image
                  src="/assets/images/arrow-down-circle.svg"
                  alt=""
                  className="object-contain w-full cursor-pointer"
                  width={170}
                  height={170}
                />
              </button>
              <button className="button" onClick={() => gotoNext()}>
                <Image
                  src="/assets/images/arrow-up-circle.svg"
                  alt=""
                  className="object-contain w-full cursor-pointer"
                  width={170}
                  height={170}
                />
              </button>
            </div>
          </div> */}
        </div>
      </Fragment>
    </Container>
  )
}
