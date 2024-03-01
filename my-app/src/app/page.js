import Card from "@/componentes/Card";
import Image from "next/image";

export default function Home() {
  const dados1 = {
    imageUrl: "https://cdn.pixabay.com/photo/2023/08/24/01/01/boy-8209561_640.jpg",
    title: "Titulo do card",
    description: "Descricao do card",
    linkUrl: "#"
  }

  const dados2 = {
    imageUrl: "https://media.themoviedb.org/t/p/w94_and_h141_bestv2/eebNTSRa5Hh5skPKGdGJIJpo9Ls.jpg",
    title: "Titulo do card 2",
    description: "Descricao do dasdas,mçlasçfj sçldjfsldjflkshjsglksd glkhlsd kdjkgd alçk askjd card 2",
    linkUrl: "#"
  }

  return (
    <main>
      <section className="flex gap-2 flex-wrap">
        <Card data={dados1} />
        <Card data={dados2} />
      </section>
    </main>
  );
}

