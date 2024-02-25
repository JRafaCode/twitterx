import { AuthButtonServer } from "@/app/components/auth-button-server";

export default function Login () {
    return(
        <section className="mx-auto border-l border-r border-white/50 min-h-screen">
            <h1 className="text-xl font-bold mb-4">Inicia sesiòn en TwitterX</h1>
        <AuthButtonServer />
        </section>
    )
} 