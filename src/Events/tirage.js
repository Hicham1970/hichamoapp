export default function Tire() {
  const shoot = (a, b) => {
    alert(b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  };

  return (
    <button onClick={(event) => shoot("The event trigged is :", event)}>
      Show the event!
    </button>
  );
}
