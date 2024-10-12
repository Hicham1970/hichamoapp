export default function Fleet(props) {
  // Destructure the 'cars' prop from the props object
  const cars = props.cars;

  return (
    <>
      {/* Render a heading */}
      <h1>Garage</h1>

      {/* Conditional rendering: If there are cars, display their count in the tag h2*/}
      {cars.length > 0 && (
        <h2>
          Your Garage is not empty and You have {cars.length} cars in your
          garage.
        </h2>
      )}
    </>
  );
}
