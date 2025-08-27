import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const menuItems = [
  { name: "Espresso", desc: "Rich, velvety shot of espresso.", price: "₹230", image: "https://www.thespruceeats.com/thmb/HJrjMfXdLGHbgMhnM0fMkDx9XPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-espresso-765702-hero-03_cropped-ffbc0c7cf45a46ff846843040c8f370c.jpg" },
  { name: "Americano", desc: "Espresso with hot water.", price: "₹250", image: "https://mocktail.net/wp-content/uploads/2022/03/homemade-Iced-Americano-recipe_1ig.jpg" },
  { name: "Latte", desc: "Espresso with steamed milk.", price: "₹330", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Caffe_Latte_at_Pulse_Cafe.jpg/960px-Caffe_Latte_at_Pulse_Cafe.jpg" },
  { name: "Cappuccino", desc: "Bold espresso with airy foam.", price: "₹330", image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg" },
  { name: "Mocha", desc: "Chocolate, espresso, and milk.", price: "₹360", image: "https://www.forkinthekitchen.com/wp-content/uploads/2022/08/220629.iced_.latte_.vanilla-9009.jpg" },
  { name: "Vanilla Latte", desc: "Classic latte with vanilla.", price: "₹360", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReXQigakVzOdxqfoOQsuvQ6PCm3icW--IOYg&s" },
  { name: "Caramel Cold Brew", desc: "Slow-steeped with caramel.", price: "₹380", image: "https://midwestniceblog.com/wp-content/uploads/2021/04/salted-caramel-cold-foam-cold-brew-coffee-recipe-scaled.jpg" },
  { name: "Iced Latte", desc: "Smooth latte poured over ice.", price: "₹350", image: "https://www.forkinthekitchen.com/wp-content/uploads/2022/08/220629.iced_.latte_.vanilla-9009.jpg" },
  { name: "Cold Foam Cold Brew", desc: "Cold brew topped with cold foam.", price: "₹400", image: "https://www.partnerscoffee.com/cdn/shop/articles/20230918220535-photo-20sep-2015-2c-205-2006-2009-20am_314be20b-fff2-4a4c-83b1-85ebc008419f.jpg?v=1695300823&width=1500" },
  { name: "Matcha Latte", desc: "Stone-ground matcha with milk.", price: "₹360", image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/06/iced-matcha-latte.jpg" },
  { name: "Chai Latte", desc: "Spiced black tea with milk.", price: "₹350", image: "https://cdn.loveandlemons.com/wp-content/uploads/2025/01/chai-latte.jpg" },
  { name: "Hot Chocolate", desc: "Warm cocoa.", price: "₹300", image: "https://hips.hearstapps.com/hmg-prod/images/hot-chocolate-index-675c61bc88ba1.jpg?crop=0.502xw:1.00xh;0.232xw,0&resize=1200:*" },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Menu</h1>
          <p className="mt-4 text-foreground/80">Handcrafted drinks, order ahead and pick up.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div key={item.name} className="rounded-2xl border border-border bg-card p-5 flex flex-col">
              <div className="w-full h-48 mb-4 relative rounded-xl overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <span className="text-sm font-medium">{item.price}</span>
                </div>
                <p className="mt-1 text-sm text-foreground/80">{item.desc}</p>
                <div className="mt-4">
                  <button className="inline-flex items-center rounded-full bg-primary text-white px-4 py-2 text-xs font-medium hover:opacity-90">
                    Add to order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}