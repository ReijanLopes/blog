import Menu from "@/components/Menu";
import Salutation from "@/components/Salutation";
import TypingAnimation from "@/components/TypingAnimation";

export default function Blog() {
  return (
    <main className="bg-white">
      <Menu />

      <div className="relative max-h-[60vh] isolate px-6 pt-10 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <Salutation className="mt-96" animation="opacity-100 -translate-y-56">
          <div className="text-center flex flex-col items-center">
            <div className="text-base font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              <p>Olá! sou Reijan, um</p>
              <div className="h-12 text-cente">
                <TypingAnimation />
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://www.linkedin.com/in/reijan-lopes-432876245/"
                className="z-20 rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contratar
              </a>
            </div>
          </div>
        </Salutation>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#002162] via-50% via-[#3082d4] to-[#9ecfe4] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <Salutation
        className="mt-52 sm:mt-72 md:mt-28 lg:mt-72"
        animation="opacity-100 -translate-y-56"
      >
        <section className="relative flex justify-center">
          <div className="absolute w-11/12 z-20 max-w-screen-xl pb-40">
            <div className="mt-10 text-sm sm:text-base text-gray-600">
              Eu sou apaixonado por JavaScript em todas as suas formas. Minhas
              principais tecnologias incluem React, React Native, Relay, Expo,
              GraphQL, Node.js, Express ou Koa e Redis. Em busca de se tornar um
              Engenheiro de Software
            </div>
            <div className="mt-3 text-sm sm:text-base text-gray-600">
              Há cerca de três anos, descobri a programação. Comecei como um
              passatempo, mas hoje é minha principal fonte de renda. Sou um
              entusiasta da área e adoro estudar tudo relacionado a esse tema,
              em todos os aspectos.{" "}
            </div>
            <div className="mt-3 text-sm sm:text-base text-gray-600">
              Não tenho preferência por linguagem ou modelo de software; gosto
              de enfrentar desafios. Após aprender a programar, iniciei minha
              formação como engenheiro de software.
            </div>
            <div className="mt-3 text-sm sm:text-base text-gray-600">
              Meu primeiro trabalho foi na área de gerenciamento de clientes e
              informações, onde trabalhei tanto no backend quanto no frontend.
              Atualmente, continuo aperfeiçoando minhas habilidades e buscando
              novas oportunidades emocionantes no mundo da programação. Minha
              paixão por aprender e crescer nesta área só aumenta a cada dia.
            </div>
          </div>
        </section>
      </Salutation>
    </main>
  );
}
