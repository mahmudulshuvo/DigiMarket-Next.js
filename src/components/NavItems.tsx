"use client"
import { PRODUCT_CATEGORIES } from "@/config"
import { useEffect, useState } from "react"
import NavItem from "./NavItem"

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<null | Number>(null)
    const isAnyOpen = activeIndex !== null

    /* Close all nav items when clicking outside of NavItem */
    useEffect(() => {
        const handleClick = () => {
            if (isAnyOpen) {
                setActiveIndex(null)
            }
        }
        document.addEventListener("click", handleClick)
        return () => {
            document.removeEventListener("click", handleClick)
        }
    })

    return (
        <div className="flex gap-4 h-full">
            {PRODUCT_CATEGORIES.map((category, index) => {
                const handleOpen = () => {
                    if (activeIndex === index) {
                        setActiveIndex(null)
                    } else {
                        setActiveIndex(index)
                    }
                    console.log("handleOpen", activeIndex, index)
                }
                const isOpen = activeIndex === index
                return (
                    <NavItem
                        isOpen={isOpen}
                        handleOpen={handleOpen}
                        catergory={category}
                        isAnyOpen={isAnyOpen}
                        key={category.label}
                    />
                )
            })}
        </div>
    )
}

export default NavItems
