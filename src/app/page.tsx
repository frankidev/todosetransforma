import "./page.module.scss";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="main">
      <Card name="Pedrito" />
      <Card name="Pepito" />
    </main>
  );
}
