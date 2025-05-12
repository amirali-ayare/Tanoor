import Category from "@/components/Category";
import Chefs from "@/components/Chefs";
import ContactUs from "@/components/ContactUs";
import Dessert from "@/components/Dessert";
import FastFood from "@/components/FastFood";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import TraditionalFoods from "@/components/TraditionalFoods";

export default function Home() {
  return (
    <div>
      <Header />
      <Category />
      <TraditionalFoods />
      <FastFood />
      <Slider />
      <Dessert />
      <Chefs />
      <ContactUs />
    </div>
  );
}
