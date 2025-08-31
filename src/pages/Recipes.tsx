import { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import RecipeCard from '@/components/RecipeCard';
import RecipeFiltersComponent, { RecipeFilters } from '@/components/RecipeFilters';
import IngredientInput from '@/components/IngredientInput';
import { recipes } from '@/data/recipes';
import { useFavorites } from '@/hooks/useFavorites';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, ChefHat } from 'lucide-react';

const Recipes = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [filters, setFilters] = useState<RecipeFilters>({
    cuisine: [],
    dietary: [],
    difficulty: [],
    maxCookTime: 120,
    sortBy: 'rating'
  });
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const filteredRecipes = useMemo(() => {
    let results = recipes;

    // Filter by ingredients if any are selected
    if (selectedIngredients.length > 0) {
      console.log('Selected ingredients:', selectedIngredients);
      results = results.filter(recipe => {
        const recipeIngredients = recipe.ingredients.map(ing => ing.name.toLowerCase());
        console.log(`Recipe "${recipe.title}" ingredients:`, recipeIngredients);
        const hasMatch = selectedIngredients.some(ingredient =>
          recipeIngredients.some(recipeIng =>
            recipeIng.includes(ingredient.toLowerCase()) || ingredient.toLowerCase().includes(recipeIng)
          )
        );
        console.log(`Recipe "${recipe.title}" matches:`, hasMatch);
        return hasMatch;
      });
    }

    // Apply filters
    if (filters.cuisine.length > 0) {
      results = results.filter(recipe => filters.cuisine.includes(recipe.cuisine));
    }
    if (filters.dietary.length > 0) {
      results = results.filter(recipe =>
        filters.dietary.every(diet => recipe.dietaryInfo.includes(diet))
      );
    }
    if (filters.difficulty.length > 0) {
      results = results.filter(recipe => filters.difficulty.includes(recipe.difficulty));
    }
    if (filters.maxCookTime < 120) {
      results = results.filter(recipe => recipe.cookTime <= filters.maxCookTime);
    }

    // Sort results
    results.sort((a, b) => {
      switch (filters.sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'cookTime':
          return a.cookTime - b.cookTime;
        case 'difficulty':
          const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
          return difficultyOrder[a.difficulty as keyof typeof difficultyOrder] - difficultyOrder[b.difficulty as keyof typeof difficultyOrder];
        default:
          return 0;
      }
    });

    return results;
  }, [selectedIngredients, filters]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            All Recipes
          </h1>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Discover delicious recipes from around the world
          </p>
          
          {/* Search */}
          <Card className="max-w-2xl mx-auto bg-card/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-foreground">
                  <Search className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Search by ingredients</h3>
                </div>
                <IngredientInput
                  selectedIngredients={selectedIngredients}
                  onIngredientsChange={setSelectedIngredients}
                  placeholder="Enter ingredients to find matching recipes..."
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-80">
            <div className="sticky top-24">
              <RecipeFiltersComponent
                filters={filters}
                onFiltersChange={setFilters}
              />
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  {selectedIngredients.length > 0 ? 'Matching Recipes' : 'All Recipes'}
                </h2>
                <span className="text-muted-foreground">
                  {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} found
                </span>
              </div>

              {filteredRecipes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredRecipes.map((recipe) => (
                    <RecipeCard
                      key={recipe.id}
                      recipe={recipe}
                      isFavorite={isFavorite(recipe.id)}
                      onToggleFavorite={toggleFavorite}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <ChefHat className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No recipes found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search criteria or filters
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSelectedIngredients([]);
                      setFilters({
                        cuisine: [],
                        dietary: [],
                        difficulty: [],
                        maxCookTime: 120,
                        sortBy: 'rating'
                      });
                    }}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Recipes;