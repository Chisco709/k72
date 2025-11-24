import { Mail, Phone, Facebook, Instagram, Youtube, ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-blue-950 text-white">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-24">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          
          {/* Branding / Información principal */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="relative inline-block">
                <h3 className="text-7xl font-bold leading-none tracking-tight md:text-8xl lg:text-9xl">
                  René
                  <br />
                  Chisco
                </h3>
                <div className="absolute -right-6 top-0 h-3 w-3 rounded-full bg-white animate-pulse" />
                <div className="absolute -left-4 bottom-8 h-2 w-2 rounded-full bg-white/50" />
              </div>
            </div>

            <p className="max-w-md text-lg leading-relaxed text-zinc-400 border-l-2 border-white/20 pl-6">
              Coaching & Oratoria — Programa tu mente, potencia tu vida y alcanza tu máximo potencial personal y profesional.
            </p>

            <div className="space-y-4 pt-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Estoy interesado!
              </h4>
              <div className="flex gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
                />
                <button className="rounded-lg bg-white px-6 py-3 text-blue-950 font-semibold hover:bg-zinc-100 transition-colors flex items-center gap-2">
                  Enviar
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Enlaces y contacto */}
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-3">

            {/* Servicios */}
            <div className="space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Servicios</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/servicios/coaching"
                    className="group flex items-center gap-2 text-lg text-zinc-300 transition-colors hover:text-white"
                  >
                    <span>Coaching</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="/servicios/conferencias"
                    className="group flex items-center gap-2 text-lg text-zinc-300 transition-colors hover:text-white"
                  >
                    <span>Conferencias y Talleres</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="/retos"
                    className="group flex items-center gap-2 text-lg text-zinc-300 transition-colors hover:text-white"
                  >
                    <span>Retos</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="/servicios"
                    className="group flex items-center gap-2 text-lg text-zinc-300 transition-colors hover:text-white"
                  >
                    <span>Ver todos los servicios</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Productos / Blog / Carrito */}
            <div className="space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Explorar</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/productos"
                    className="group flex items-center gap-2 text-lg text-zinc-300 transition-colors hover:text-white"
                  >
                    <span>Productos</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="group flex items-center gap-2 text-lg text-zinc-300 transition-colors hover:text-white"
                  >
                    <span>Blog</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="/carrito"
                    className="group flex items-center gap-2 text-lg text-zinc-300 transition-colors hover:text-white"
                  >
                    <span>Carrito</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="/retos"
                    className="group flex items-center gap-2 text-lg text-zinc-300 transition-colors hover:text-white"
                  >
                    <span>Retos</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div className="space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Contacto</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:rfernandochisco@gmail.com"
                    className="group flex items-start gap-3 text-base text-zinc-300 transition-colors hover:text-white"
                  >
                    <Mail className="mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="break-all">rfernandochisco@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+573117472236"
                    className="group flex items-start gap-3 text-base text-zinc-300 transition-colors hover:text-white"
                  >
                    <Phone className="mt-1 h-5 w-5 flex-shrink-0" />
                    <span>+57 311 747 22 36</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="mt-20 flex flex-col gap-8 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3">
            {[
              { icon: Facebook, label: "Facebook", url: "https://www.bing.com/ck/a?!&&p=7a18e3ef2916aa903c9e582ba92e1c6def849bcf69c299fc277a683472e480edJmltdHM9MTc2Mzk0MjQwMA&ptn=3&ver=2&hsh=4&fclid=15ee6d28-4624-6d02-0771-78c5478b6cd7&psq=renechisco+facebook&u=a1aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0NvYWNoLVJlbmUtQ2hpc2NvLTEwMjg2ODY3MTY4MzQ4Ni8" },
              { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/coachrenechisco/" },
              { icon: Youtube, label: "YouTube", url: "https://www.youtube.com/renechisco" },
            ].map(({ icon: Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 transition-all hover:border-white hover:bg-white"
                aria-label={label}
              >
                <Icon className="h-5 w-5 transition-colors group-hover:text-blue-950" />
              </a>
            ))}
          </div>

          <div className="text-sm text-zinc-500">
            PARA MAYOR INFORMACIÓN — E-mail: contacto@renechisco.com — Tel: +57 311 747 22 36
          </div>
        </div>
      </div>

      {/* Pie inferior */}
      <div className="border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-[1400px] px-4 py-6 md:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
            <p className="text-zinc-500">
              © 2017–2025 René Chisco - Coaching & Oratoria. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
