"use client"

import * as React from "react"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function InputOTPControlled({
    OTPValue,
    setOTPValue
}: {
    OTPValue: string,
    setOTPValue: React.Dispatch<React.SetStateAction<string>>
}) {
  const [value, setValue] = React.useState("")

  return (
    <div className="space-y-2">
      <InputOTP
        maxLength={6}
        value={OTPValue}
        onChange={(value) => setOTPValue(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  )
}
