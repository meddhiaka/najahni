'use client'
import { Textarea } from "@/components/ui/textarea"
import { Dispatch, SetStateAction } from "react"

export function TextareaDemo({ placeholder, value, setValue }: { placeholder: string, value: string, setValue: Dispatch<SetStateAction<string>> }) {
    return <Textarea placeholder={placeholder} value={value} setValue={setValue} />
}
