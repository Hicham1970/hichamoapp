function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

console.log("Car.js chargé");
export default Car;
// window.Car = Car;

/**L'affectation window.Car = Car; rend le composant Car disponible globalement, ce qui permet de l'utiliser directement dans le script de ComponInFile.html. */
