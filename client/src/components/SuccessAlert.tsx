import { RocketIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <Alert>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Attention !</AlertTitle>
      <AlertDescription>
        Connectez-vous avec votre nouveau compte.
      </AlertDescription>
    </Alert>
  )
}
