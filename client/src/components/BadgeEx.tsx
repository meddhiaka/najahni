import { Badge } from "@/components/ui/badge"
type StringTypo = string | null | undefined

export function BadgeDemo({ userRole }: { userRole: StringTypo }) {
  let role: string = ""
  let style: string = ""
  if (userRole === "STUDENT") {
    role = "Étudiant"
    style = ""
  } else if (userRole === "TEACHER") {
    role = "Prof"
  } else if (userRole === "ADMIN") {
    role = "Admin"
  } else {
    role = "..."
  }

  return <Badge><p className="">{role}</p></Badge>
}
