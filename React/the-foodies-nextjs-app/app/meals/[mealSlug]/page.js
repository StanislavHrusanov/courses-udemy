export default function DetailsPage({ params }) {
  return (
    <>
      <h1>Details Page</h1>
      <p>{params.slug}</p>
    </>
  );
}
