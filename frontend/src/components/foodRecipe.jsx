export default function FoodRecipe({image, name, recipe, rating, taste }) {
    return (
      <div className="bg-white text-black p-6 rounded-lg shadow-lg">
        <img src={image} />
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="mt-2">{recipe}</p>
        <p className="mt-2">Taste: {taste}</p>
        <p className="mt-2">Rating: {rating} ⭐</p>
      </div>
    );
  }