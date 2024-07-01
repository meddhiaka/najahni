"use client"
import { useState } from "react"
import { Button } from "./ui/button"
import LandingHomeCourse from "./LandingHomeCourse"
import { GrNext, GrPrevious } from "react-icons/gr"

export default function CardsCarousel({ color, cour }) {
    // if the state is 0 hide the prev
    const [k, setK] = useState<number>(0)
    const [cardPos, setCardPos] = useState<number>(0)

    function incrementK() {
        setK(k + 1)
        setCardPos(cardPos - 475)
        console.log(cardPos)
    }

    function decrementK() {
        setK(k - 1)
        setCardPos(cardPos + 475)
        console.log(cardPos)
    }
    return (
        <div className="max-w-7xl mx-auto relative">
            {
                (k > 0) && (
                    <>
                        <div className={`hidden sm:block h-full absolute left-[-215px] z-10 w-72 ${color} == "blue" ? "bg-animation-left" : ""`}></div>
                        <div onClick={() => decrementK()} className="mx-4 sm:mx-0 z-10 text-black absolute left-0 top-24 cursor-pointer">
                            <GrPrevious size={"2em"} />
                        </div>
                    </>
                )
            }
            <div
                className={`gap-x-1 flex flex-row transition ease-in-out`}
                style={{
                    transform: `translateX(${cardPos}px)`
                }}
            >
                {
                    cour.map(e => (
                        <LandingHomeCourse e={e} />
                    ))
                }
            </div>
            {
                (k < 3 && cour.length > 3)  && (
                    <>
                        <div onClick={incrementK} className="mx-4 sm:mx-0 z-20 text-black absolute right-0 top-24 cursor-pointer">
                            <GrNext size={"2em"} />
                        </div>
                        <div className="hidden  sm:block h-full absolute right-[-120px] top-0 z-10 w-72 bg-animation-right"></div>
                    </>
                )
            }

        </div>
    )
}