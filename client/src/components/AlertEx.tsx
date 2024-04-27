import { AlertCircle } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { AlertDialogDemo } from "./DialogEx"

export function AlertDestructive() {
    return (
        <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Email non vérifié.</AlertTitle>
            <AlertDescription>
                Veuillez vérifier votre e-mail en cliquant sur ce <button><u><AlertDialogDemo /></u></button>
            </AlertDescription>

        </Alert>
    )
}
