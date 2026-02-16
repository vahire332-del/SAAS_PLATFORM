import Link from "next/link";

function FaqRow({
  question,
  expanded,
  answer,
}: {
  question: string;
  expanded?: boolean;
  answer?: string;
}) {
  return (
    <div
      className={
        "w-full rounded-lg bg-[#18181C] hover:bg-[#222228] transition-colors " +
        (expanded ? "p-4" : "h-11")
      }
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <span className="text-[14px] leading-[20px] text-white">
          {question}
        </span>

        <div className="w-4 h-4 flex items-center justify-center text-white">
          {expanded ? (
            <div className="w-[14px] h-[2px] bg-white rounded-[3px]" />
          ) : (
            <div className="relative w-[14px] h-[14px]">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-white rounded-[3px]" />
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white rounded-[3px]" />
            </div>
          )}
        </div>
      </div>

      {expanded ? (
        <>
          <div className="h-px bg-[#404047] mx-4" />
          <p className="px-4 pt-3 text-[14px] leading-[28px] text-[#9E9E9E]">
            {answer}
          </p>
        </>
      ) : null}
    </div>
  );
}

export default function FAQ() {
  return (
    <main className="w-full min-h-screen bg-[#000000] text-white font-poppins selection:bg-purple-500 selection:text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <Link
          href="/"
          className="inline-flex text-[#9E9E9E] hover:text-white transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="mt-8 text-center font-semibold text-[48px] leading-[56px] md:text-[56px] md:leading-[64px]">
          Frequently Asked
          <br />
          Questions
        </h1>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            <FaqRow question="How to use this template?" />
            <FaqRow question="What is your refund policy?" />
            <FaqRow question="How to Use this Template?" />
            <FaqRow question="Best web design agency ever is?" />
            <FaqRow question="How can i order web design services?" />
          </div>

          <div className="flex flex-col gap-3">
            <FaqRow question="What are your shipping rates?" />
            <FaqRow question="How can I track my order?" />
            <FaqRow question="I received the wrong item, what do I do?" />
            <FaqRow question="What are benefits of this template?" />
            <FaqRow
              question="How promote the product?"
              expanded
              answer="A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem good design is not only aesthetically pleasing, but also functional."
            />
          </div>
        </div>
      </div>
    </main>
  );
}
