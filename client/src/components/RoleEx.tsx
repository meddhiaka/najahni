"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const roles = [
    {
        value: "etudiant",
        label: "Étudiant",
    },
    {
        value: "professeur",
        label: "Professeur",
    }
]

interface ComboBoxProps {
    value: string
    open: boolean
    setValue: React.Dispatch<React.SetStateAction<string>>
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function ComboboxDemo({ open, value, setOpen, setValue }: ComboBoxProps) {
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? roles.find((role) => role.value === value)?.label
                        : "Sélectionner le rôle..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandGroup>
                        {roles.map((role) => (
                            <CommandItem
                                key={role.value}
                                value={role.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    console.log(value)
                                    setOpen(false)
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === role.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {role.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}