import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import IngredientInput from '@/components/IngredientInput';
import RecipeCard from '@/components/RecipeCard';
import RecipeFiltersComponent, { RecipeFilters } from '@/components/RecipeFilters';
import { recipes, Recipe } from '@/data/recipes';
import { useFavorites } from '@/hooks/useFavorites';
import { ChefHat, Sparkles, TrendingUp, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-cooking.jpg';

const Index = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [filters, setFilters] = useState<RecipeFilters>({
    cuisine: [],
    dietary: [],
    difficulty: [],
    maxCookTime: 120,
    sortBy: 'rating'
  });
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  // Recipe matching and filtering logic
  const filteredRecipes = useMemo(() => {
    let results = recipes;

    // Filter by ingredients if any are selected
    if (selectedIngredients.length > 0) {
      results = results.filter(recipe => {
        const recipeIngredients = recipe.ingredients.map(ing => ing.name.toLowerCase());
        return selectedIngredients.some(ingredient =>
          recipeIngredients.some(recipeIng =>
            recipeIng.includes(ingredient.toLowerCase()) || ingredient.toLowerCase().includes(recipeIng)
          )
        );
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

  const hasSearched = selectedIngredients.length > 0 || 
    filters.cuisine.length > 0 || filters.dietary.length > 0 || 
    filters.difficulty.length > 0 || filters.maxCookTime < 120;

  const featuredRecipes = recipes.slice(0, 6).sort((a, b) => b.rating - a.rating);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Cooking ingredients and utensils"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-gradient">Smart Recipe</span>
                <br />
                <span className="text-foreground">Generator</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Transform your available ingredients into delicious meals with AI-powered recipe suggestions
              </p>
            </div>

            {/* Ingredient Search */}
            <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm shadow-xl">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    What ingredients do you have?
                  </h3>
                  <IngredientInput
                    selectedIngredients={selectedIngredients}
                    onIngredientsChange={setSelectedIngredients}
                    placeholder="Enter ingredients (e.g., chicken, tomatoes, pasta)..."
                  />
                  {selectedIngredients.length > 0 && (
                    <div className="flex justify-center">
                      <Button variant="hero" size="lg" className="px-8">
                        <ChefHat className="h-5 w-5 mr-2" />
                        Find Recipes ({filteredRecipes.length})
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{recipes.length}+</div>
                <div className="text-sm text-muted-foreground">Recipes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Cuisines</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.8</div>
                <div className="text-sm text-muted-foreground">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {hasSearched ? (
          /* Search Results */
          <div className="space-y-8">
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
                      {selectedIngredients.length > 0 ? 'Recipe Matches' : 'All Recipes'}
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
                        Try adjusting your ingredients or filters
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
          </div>
        ) : (
          /* Featured Recipes */
          <div className="space-y-12">
            {/* Trending Section */}
            <section className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  Trending Recipes
                </h2>
                <p className="text-muted-foreground">
                  Discover our most popular and highest-rated recipes
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    isFavorite={isFavorite(recipe.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>

              <div className="text-center">
                <Link to="/recipes">
                  <Button variant="outline" size="lg">
                    View All Recipes
                  </Button>
                </Link>
              </div>
            </section>

            {/* Quick Access Categories */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-center">Quick Categories</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Easy & Quick', filter: { difficulty: ['Easy'], maxCookTime: 30 }, icon: Clock },
                  { name: 'Vegetarian', filter: { dietary: ['Vegetarian'] }, icon: Sparkles },
                  { name: 'Italian', filter: { cuisine: ['Italian'] }, icon: ChefHat },
                  { name: 'Healthy', filter: { dietary: ['Gluten-free'] }, icon: TrendingUp },
                ].map((category) => (
                  <Card 
                    key={category.name}
                    className="cursor-pointer hover:shadow-lg transition-smooth hover:scale-105 bg-gradient-secondary"
                    onClick={() => {
                      setFilters(prev => ({
                        ...prev,
                        ...category.filter
                      }));
                    }}
                  >
                    <CardContent className="p-6 text-center space-y-2">
                      <category.icon className="h-8 w-8 text-primary mx-auto" />
                      <h3 className="font-semibold">{category.name}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;