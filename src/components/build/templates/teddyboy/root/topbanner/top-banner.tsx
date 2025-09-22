import { useEffect, useState } from "react"
import {  XIcon } from "lucide-react"
import { Button } from "@/components/v1/button/button"



const saleEndDate = new Date(
  Date.now() + 9 * 60 * 60 * 1000 + 45 * 60 * 1000 + 24 * 1000
) 

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = saleEndDate.getTime() - now.getTime()

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible || timeLeft.isExpired) return null

  return (
    <div className="dark bg-black  text-foreground px-4 py-1">
      <div className="flex gap-2 md:items-center">
        <div className="flex grow gap-3 md:items-center">
          <div className="flex grow  md:justify-center gap-3 flex-row items-center">
            <div className="space-y-0.5">
                <p className="text-white font-light text-xs/6">
                Get 25% OFF this Summer Sale! Limited time only.
                </p>
            </div>
            <div className="md:flex gap-3 hidden  items-center max-md:flex-wrap">
              <div className="  text-xs   flex items-center rounded-md tabular-nums">
                {timeLeft.days > 0 && (
                  <span className="flex h-8 items-center justify-center px-1 py-1">
                    {timeLeft.days}
                    <span className="text-muted-foreground">d</span>
                  </span>
                )}
                <span className="flex h-8 items-center justify-center px-1 py-1">
                  {timeLeft.hours.toString().padStart(2, "0")}
                  <span className="text-muted-foreground">h</span>
                </span>
                <span className="flex h-8 items-center justify-center px-1 py-1">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                  <span className="text-muted-foreground">m</span>
                </span>
                <span className="flex h-8 items-center justify-center px-1 py-1">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                  <span className="text-muted-foreground">s</span>
                </span>
              </div>
   
            </div>
          </div>
        </div>
        <Button
         
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
        >
          <XIcon
            size={16}
            className="opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  )
}
