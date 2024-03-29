import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

// in feature branch inchalah
function getFallbackWord(str: string): string {
    let words = str.split(" ")
    let x = words[0].charAt(0).toUpperCase()
    let o = words[words.length - 1].charAt(0).toUpperCase
    return x + o
}

export function AvatarDemo() {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="XO" />
            <AvatarFallback>XO</AvatarFallback>
        </Avatar>
    )
}
