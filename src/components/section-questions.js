import { ContainerGrid } from "./container";
import { TitleSection } from "./title-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const questions = [
  {
    question: "O que são NFTs",
    response:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto place accusantium sunt velit consequuntur. Reiciendis nam facilis fuga",
  },
  {
    question: "Como funciona a compra de NFTs em seu site?",
    response:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto place accusantium sunt velit consequuntur. Reiciendis nam facilis fuga",
  },
  {
    question: "Como posso vender meus próprios NFTs?",
    response:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto place accusantium sunt velit consequuntur. Reiciendis nam facilis fuga",
  },
  {
    question: "Os NFTs são seguros e autênticos?",
    response:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto place accusantium sunt velit consequuntur. Reiciendis nam facilis fuga",
  },
  {
    question:
      "Quais são as taxas envolvidas na compra e venda de NFTs em seu site?",
    response:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto place accusantium sunt velit consequuntur. Reiciendis nam facilis fuga",
  },
];

export function SectionQuestions() {
  return (
    <section className="pt-10 desktop:pt-28" id="FAQ">
      <ContainerGrid>
        <TitleSection
          subtitle="Desvendando os Mistérios dos NFTs"
          title="Perguntas frequentes"
        />
        <div>
          <Accordion type="single" collapsible className="w-full">
            {questions.map(({ question, response }, index) => (
              <AccordionItem key={index} value={`question-${index}`}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{response}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ContainerGrid>
    </section>
  );
}
