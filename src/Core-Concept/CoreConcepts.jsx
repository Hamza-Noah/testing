export default function CoreConcepts({ title, description, image }) {
  return (
    <>
      <li>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    </>
  );
}
