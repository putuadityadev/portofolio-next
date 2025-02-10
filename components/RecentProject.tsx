'use client'
import React from 'react'
import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'
import Link from 'next/link'
const RecentProject = () => {
  return (
    <section className=" max-w-[1280px] h-fit mt-20 mb-40" id="projects">
      <h1 className="heading mb-10">
        A small selection of {' '}
        <span className="text-purple">recent project</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-8 lg:gap-y-24">
        {projects.map(({
          id,
          title,
          des,
          img,
          iconLists,
          link
        }) => (
            <div key={id} className="h-[32rem] flex items-center justify-center max-w-[594px]">
              <Link href={link}>
                <PinContainer title={link} href={link}>
                  <div className="relative flex items-center justify-center overflow-hidden w-80 h-80 md:w-[30rem] lg:w-[35rem]">
                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                      <img src="/portofolio-next/bg.png" alt="bg-img"/>
                    </div>
                    <img
                      src={img}
                      alt={title}
                      className="z-10 absolute bottom-0 object-cover"
                    />
                  </div>
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mt-5">
                    {title}
                  </h1>

                  <p className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2">
                    {des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {iconLists.map((icon, index) => (
                        <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style={{
                          transform: `translateX(-${5 * index * 2}px)`
                        }}>
                          <img 
                            src={icon}
                            alt={icon}
                            className="p-2"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9"/>
                    </div>
                  </div>
                </PinContainer>
              </Link>
            </div>
        ))}
      </div>
    </section>
  )
}

export default RecentProject