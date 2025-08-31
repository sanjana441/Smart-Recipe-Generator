import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { recipes } from '@/data/recipes';
import { useFavorites } from '@/hooks/useFavorites';
import { 
  Heart, 
  Clock, 
  Users, 
  Star, 
  ChefHat, 
  ArrowLeft, 
  CheckCircle2,
  Info
} from 'lucide-react';

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [servings, setServings] = useState(4);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const { isFavorite, toggleFavorite } = useFavorites();

  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return <Navigate to="/recipes" replace />;
  }

  const servingMultiplier = servings / recipe.servings;

  const toggleStep = (stepIndex: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepIndex) 
        ? prev.filter(i => i !== stepIndex)
        : [...prev, stepIndex]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-success text-success-foreground';
      case 'Medium': return 'bg-warning text-warning-foreground';
      case 'Hard': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
        
        <div className="absolute bottom-6 left-6 right-6">
          <div className="container mx-auto">
            <Link to="/recipes">
              <Button variant="outline" className="mb-4 bg-background/80 backdrop-blur-sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Recipes
              </Button>
            </Link>
            
            <div className="flex items-end justify-between">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold text-foreground">{recipe.title}</h1>
                <p className="text-lg text-muted-foreground max-w-2xl">{recipe.description}</p>
              </div>
              
              <Button
                variant={isFavorite(recipe.id) ? "destructive" : "favorite"}
                size="lg"
                className="bg-background/80 backdrop-blur-sm"
                onClick={() => toggleFavorite(recipe.id)}
              >
                <Heart className={`h-5 w-5 mr-2 ${isFavorite(recipe.id) ? 'fill-current' : ''}`} />
                {isFavorite(recipe.id) ? 'Saved' : 'Save'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recipe Info & Instructions */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold">{recipe.cookTime} min</div>
                  <div className="text-sm text-muted-foreground">Cook Time</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold">{servings} servings</div>
                  <div className="text-sm text-muted-foreground">Servings</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <Star className="h-6 w-6 text-warning mx-auto mb-2 fill-current" />
                  <div className="font-semibold">{recipe.rating}</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <ChefHat className="h-6 w-6 text-primary mx-auto mb-2" />
                  <Badge className={`${getDifficultyColor(recipe.difficulty)} text-xs`}>
                    {recipe.difficulty}
                  </Badge>
                  <div className="text-sm text-muted-foreground mt-1">Difficulty</div>
                </CardContent>
              </Card>
            </div>

            {/* Dietary Info */}
            {recipe.dietaryInfo.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {recipe.dietaryInfo.map((diet) => (
                  <Badge key={diet} variant="secondary" className="text-sm">
                    {diet}
                  </Badge>
                ))}
              </div>
            )}

            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChefHat className="h-5 w-5" />
                  Instructions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Button
                        variant={completedSteps.includes(index) ? "success" : "outline"}
                        size="icon"
                        className="w-8 h-8 rounded-full"
                        onClick={() => toggleStep(index)}
                      >
                        {completedSteps.includes(index) ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : (
                          <span className="text-sm font-medium">{index + 1}</span>
                        )}
                      </Button>
                    </div>
                    <div className={`flex-1 ${completedSteps.includes(index) ? 'line-through text-muted-foreground' : ''}`}>
                      <p className="text-sm leading-relaxed">{instruction}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Serving Size Adjuster */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Adjust Servings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{servings}</div>
                  <div className="text-sm text-muted-foreground">servings</div>
                </div>
                <Slider
                  value={[servings]}
                  onValueChange={(value) => setServings(value[0])}
                  max={12}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </CardContent>
            </Card>

            {/* Ingredients */}
            <Card>
              <CardHeader>
                <CardTitle>Ingredients</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <span className="text-sm">{ingredient.name}</span>
                    <span className="text-sm font-medium text-primary">
                      {ingredient.amount.includes('to taste') || ingredient.amount.includes('whole') || ingredient.amount.includes('large') || ingredient.amount.includes('medium') || ingredient.amount.includes('small')
                        ? ingredient.amount
                        : servingMultiplier !== 1
                        ? `${(parseFloat(ingredient.amount) * servingMultiplier).toFixed(1)}${ingredient.amount.replace(/[0-9.]/g, '')}`
                        : ingredient.amount}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Substitutions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Substitutions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recipe.ingredients
                  .filter(ing => ing.substitutes && ing.substitutes.length > 0)
                  .map((ingredient, index) => (
                    <div key={index} className="space-y-1">
                      <div className="text-sm font-medium">{ingredient.name}</div>
                      <div className="text-sm text-muted-foreground">
                        Can substitute with: {ingredient.substitutes?.join(', ')}
                      </div>
                    </div>
                  ))}
                {recipe.ingredients.filter(ing => ing.substitutes && ing.substitutes.length > 0).length === 0 && (
                  <p className="text-sm text-muted-foreground">
                    No substitutions available for this recipe.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Nutrition */}
            <Card>
              <CardHeader>
                <CardTitle>Nutrition (per serving)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">
                      {Math.round(recipe.nutrition.calories / recipe.servings * servings)}
                    </div>
                    <div className="text-sm text-muted-foreground">Calories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">
                      {Math.round(recipe.nutrition.protein / recipe.servings * servings)}g
                    </div>
                    <div className="text-sm text-muted-foreground">Protein</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">
                      {Math.round(recipe.nutrition.carbs / recipe.servings * servings)}g
                    </div>
                    <div className="text-sm text-muted-foreground">Carbs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">
                      {Math.round(recipe.nutrition.fat / recipe.servings * servings)}g
                    </div>
                    <div className="text-sm text-muted-foreground">Fat</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecipeDetail;