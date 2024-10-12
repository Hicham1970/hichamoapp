import Car from "./Factory";

export default function garage() {
  const carInfos = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={carInfos} />
    </>
  );
}
