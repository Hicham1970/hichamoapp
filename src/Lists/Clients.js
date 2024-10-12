import Operations from "./Ops";

export default function Clients() {
  const clients = [
    { id: 1, client: "MIT" },
    { id: 2, client: "Google" },
    { id: 3, client: "Facebook" },
  ];
  return (
    <>
      <h1>You, usually work with whom ?</h1>
      <ul>
        {clients.map((client) => (
          <Operations key={client.id} client={client.client} />
        ))}
      </ul>
    </>
  );
}
