export default function Favorite(props: { isFavorite: boolean }) {
  return (
    <button>{props.isFavorite ? "в избранном" : "добавить в избранное"}</button>
  );
}
