import { cars } from "./data/cars";
import CarCard from "./components/cart-card";

export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-between p-24">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </main>
  );
}
