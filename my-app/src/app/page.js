import Card from "@/componentes/Card";
import Title from "@/componentes/Title";
import Image from "next/image";

export default function Home() {
  const title = {
    title: "Delivery rápido e incomparável.",
    description: "Baixe agora e tenha seus sabores favoritos na palma da sua mão! Desfrute de hambúrgueres suculentos, batatas crocantes e uma variedade de deliciosas frutas e sobremesas.",
  }
  
  const dados1 = {
    imageUrl: "https://get.pxhere.com/photo/dessert-sweetness-baking-cupcake-icing-food-petit-four-buttercream-cake-bakery-patisserie-finger-food-cream-pastry-dairy-product-confectionery-chocolate-1538927.jpg",
    title: "New seafood recipe perfect for losing weight",
    description: "Mass communication has led to modern marketing strategies to continue focusing on brand awareness.",
    linkUrl: "https://github.com/tuxbr/ptispa"
  }

  const dados2 = {
    imageUrl: "https://get.pxhere.com/photo/dish-meal-food-produce-breakfast-meat-pork-cuisine-hamburger-burger-sandwich-cheeseburger-slider-veggie-burger-breakfast-sandwich-sloppy-joe-pulled-pork-7277.jpg",
    title: "New seafood recipe perfect for losing weight",
    description: "Mass communication has led to modern marketing strategies to continue focusing on brand awareness.",
    linkUrl: "#"
  }
  
  const dados3 = {
    imageUrl: "https://c.pxhere.com/images/cf/f8/374832b3a06c0109f7984b13d19a-1596596.jpg!d",
    title: "New seafood recipe perfect for losing weight",
    description: "Mass communication has led to modern marketing strategies to continue focusing on brand awareness.",
    linkUrl: "#"
  }

  return (
    <main>
      <section className="bg-white">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8 w-3/4">
        <Title data={title} />  
      </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <Card data={dados1} />
            <Card data={dados2} />
            <Card data={dados3} />
          </div>
        </div>
      </section>
    </main>
  );
}

