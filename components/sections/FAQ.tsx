const questions = [
  {
    question: "¿Cómo creo mi CV?",
    answer: "Presiona cualquiera de los botones “Crear mi CV”. Se abrirá WhatsApp con un mensaje preparado para iniciar la conversación con OPCTALENT.",
  },
  {
    question: "¿Necesito instalar alguna aplicación?",
    answer: "Solo necesitas poder acceder a WhatsApp. Si ya lo usas en tu teléfono o computadora, puedes comenzar desde allí.",
  },
  {
    question: "¿Qué información necesito?",
    answer: "Te pediremos datos sobre tu experiencia laboral, estudios, habilidades y objetivos. La conversación te guiará para reunir la información necesaria.",
  },
  {
    question: "¿OPCTALENT me consigue trabajo?",
    answer: "No podemos garantizar una contratación. Preparamos tu CV y, si lo autorizas, tu perfil podrá considerarse cuando una empresa busque características como las tuyas.",
  },
  {
    question: "¿Qué pasa con mi CV después de crearlo?",
    answer: "Tu CV queda preparado para que lo uses. Además, podrás decidir si quieres que tu perfil forme parte de la red de talento de OPCTALENT.",
  },
  {
    question: "¿Las empresas pueden ver mi perfil?",
    answer: "La participación en procesos de selección y el uso de tu perfil estarán sujetos a tu autorización y a las políticas correspondientes.",
  },
  {
    question: "¿Puedo actualizar mi información después?",
    answer: "Sí. Puedes volver a escribirnos para comunicar cambios en tu experiencia, estudios o habilidades y consultar cómo actualizar tu información.",
  },
  {
    question: "¿Qué servicios ofrece OPCTALENT a las empresas?",
    answer: "Brindamos apoyo para control de asistencia e incidencias, procesamiento de planillas, preparación de planilla única y reportes laborales. También acompañamos búsquedas de talento mediante nuestra red de candidatos.",
  },
  {
    question: "¿Cómo funciona el procesamiento de planillas?",
    answer: "La operación parte de la recepción de asistencia y novedades, continúa con la validación y el procesamiento, pasa por una revisión de la empresa y finaliza con la entrega de los archivos y reportes acordados.",
  },
  {
    question: "¿Cómo se maneja la información laboral y salarial?",
    answer: "Se utiliza para ejecutar el servicio contratado, con acceso restringido y bajo los acuerdos de confidencialidad y tratamiento de datos que se formalicen entre las partes.",
  },
];

export function FAQ() {
  return (
    <section id="preguntas" aria-labelledby="faq-title" className="bg-surface py-20 sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-24">
        <div>
          <p className="eyebrow text-brand">Preguntas frecuentes</p>
          <h2 id="faq-title" className="text-balance mt-6 text-4xl leading-tight font-black tracking-[-0.045em] sm:text-5xl">
            Lo esencial, antes de comenzar.
          </h2>
        </div>
        <div className="border-t-2 border-ink">
          {questions.map((item) => (
            <details key={item.question} className="faq-item group border-b border-line">
              <summary className="flex min-h-18 cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-bold sm:text-xl">
                {item.question}
                <span className="faq-plus relative size-8 shrink-0 text-brand" aria-hidden="true" />
              </summary>
              <p className="max-w-2xl pb-6 pr-10 text-muted sm:text-lg">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
