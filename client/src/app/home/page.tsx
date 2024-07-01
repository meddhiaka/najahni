"use server"
import CardsCarousel from "@/components/CardsCarousel";
import { HeroHighlight, Highlight } from "@/components/Hero";
import { InfiniteMovingCards } from "@/components/MovingCards"
import Hero from "@/components/ui/Hero";
import { DataTableDemo } from "@/components/ui/HomeTableDemo";
import { prisma } from "@/lib/prisma";
import { $Enums } from "@prisma/client";
import React from "react";


async function getCourses() {
  const data = await prisma.cour.findMany()
  return data
}

export default async function Home() {
  const data = await getCourses()
  const coursGLSI = data.filter(e => e.section == "GLSI2")
  const coursCPI = data.filter(e => e.section == "CPI2")
  const coursSEIOT = data.filter(e => e.section == "SEIOT2")
  console.log(coursGLSI)
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="overflow-hidden py-10">
        {
          (coursGLSI.length > 0) && (
            <div className="py-10">
              <p className="my-10 max-w-7xl mx-auto text-6xl font-semibold text-blue-900">2éme année génie logiciel</p>
              <CardsCarousel color="blue" cour={coursGLSI} />
            </div>
          )
        }
        {
          (coursCPI.length > 0) && (
            <div className="py-10">
              <p className="my-10 max-w-7xl mx-auto text-6xl font-semibold text-red-900">2éme année génie logiciel</p>
              <CardsCarousel color="red" cour={coursCPI} />
            </div>
          )
        }

        {
          (coursSEIOT.length > 0) && (
            <div className="py-10">
              <p className="my-10 max-w-7xl mx-auto text-6xl font-semibold text-yellow-900">2éme année génie logiciel</p>
              <CardsCarousel color="yellow" cour={coursSEIOT} />
            </div>
          )
        }
        <hr />
      </div>
    </div>
  )
}