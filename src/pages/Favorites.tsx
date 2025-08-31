import Navigation from '@/components/Navigation';
import RecipeCard from '@/components/RecipeCard';
import { recipes } from '@/data/recipes';
import { useFavorites } from '@/hooks/useFavorites';
import { Heart, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Favorites = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground mb-4 flex items-center justify-center gap-2">
            <Heart className="h-10 w-10" />
            Your Favorite Recipes
          </h1>
          <p className="text-xl text-primary-foreground/80">
            All your saved recipes in one place
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {favoriteRecipes.length > 0 ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Saved Recipes</h2>
              <span className="text-muted-foreground">
                {favoriteRecipes.length} recipe{favoriteRecipes.length !== 1 ? 's' : ''} saved
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  isFavorite={isFavorite(recipe.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <Heart className="h-20 w-20 text-muted-foreground mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">No favorite recipes yet</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Start exploring recipes and click the heart icon to save your favorites for easy access later.
            </p>
            <div className="space-x-4">
              <Link to="/">
                <Button variant="hero">
                  <ChefHat className="h-4 w-4 mr-2" />
                  Discover Recipes
                </Button>
              </Link>
              <Link to="/recipes">
                <Button variant="outline">
                  Browse All Recipes
                </Button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Favorites;