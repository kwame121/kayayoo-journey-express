import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does Kayayoo work?",
      answer: "Kayayoo connects people who need to send packages with verified international travelers. Senders can post their package details, and travelers can offer to carry them for a fee.",
    },
    {
      question: "Is it safe to send packages with travelers?",
      answer: "Yes! We verify all couriers' IDs and use secure escrow payments. Funds are only released after successful delivery, ensuring safety for both parties.",
    },
    {
      question: "What locations are currently supported?",
      answer: "We're starting with routes between Ghana (Accra, Kumasi) and the US (New York, Atlanta). More locations will be added soon!",
    },
    {
      question: "How do I become a courier?",
      answer: "Sign up on our waitlist, and once we launch, you can create a profile, verify your identity, and start listing your upcoming international trips.",
    },
  ];

  return (
    <div id="faq" className="bg-kayayoo-black py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-kayayoo-darkgray rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-white hover:text-kayayoo-yellow">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;