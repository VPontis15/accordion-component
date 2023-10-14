import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <ul className="accordion">
      {faqs.map((item, i) => (
        <Question
          curOpen={curOpen}
          onSetCurOpen={setCurOpen}
          number={i + 1}
          faq={item}
        />
      ))}
    </ul>
  );
}

function Question({ faq, number, curOpen, onSetCurOpen }) {
  let isOpen = curOpen === number;

  function isOpenBtn() {
    onSetCurOpen(isOpen ? null : number);
  }
  return (
    <li onClick={isOpenBtn} className={isOpen ? "open item" : "item"}>
      <p className="number">{number < 10 ? `0${number}` : number}</p>
      <p className="title text">{faq.title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box"> {faq.text} </div>}
    </li>
  );
}
