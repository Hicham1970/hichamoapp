export default function Car(props) {
  return (
    <h2>
      I am a {props.brand.name} and my model is : {props.brand.model}!
    </h2>
  );
}
