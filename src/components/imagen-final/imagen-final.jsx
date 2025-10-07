import { Button } from "../ui/button"

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/reneimage.jpg"
          alt="Hero background"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen items-center justify-center px-6 py-20">
        <div className="max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            ¿Listo para vivir una vida extraordinaria?
          </h1>
          <p className="mb-8 text-lg text-white md:text-xl lg:text-2xl">
            Ahora es tu momento. Conéctate con nosotros para saber más.
          </p>
          <Button
            size="lg"
            className="rounded-full bg-white px-12 py-6 text-base font-medium text-black hover:bg-white/90"
          >
            Comenzar
          </Button>
        </div>
      </div>
    </main>
  )
}
