import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '@/data/recipes';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Heart, Clock, Users, Star, ChefHat } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite?: boolean;
  onToggleFavorite?: (recipeId: string) => void;
}

const RecipeCard = ({ recipe, isFavorite = false, onToggleFavorite }: RecipeCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-success text-success-foreground';
      case 'Medium': return 'bg-warning text-warning-foreground';
      case 'Hard': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="group overflow-hidden shadow-recipe-card hover:shadow-lg transition-smooth hover:scale-[1.02] bg-card">
      <CardHeader className="p-0 relative overflow-hidden">
        <div className="aspect-square relative bg-muted">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <ChefHat className="h-12 w-12 text-muted-foreground animate-pulse" />
            </div>
          )}
          <img
            src={recipe.image}
            alt={recipe.title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            } group-hover:scale-105`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Overlay with favorite button */}
          <div className="absolute top-3 right-3">
            <Button
              variant="favorite"
              size="icon"
              className={`rounded-full backdrop-blur-sm ${
                isFavorite ? 'bg-destructive text-destructive-foreground border-destructive' : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                onToggleFavorite?.(recipe.id);
              }}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
            </Button>
          </div>

          {/* Difficulty badge */}
          <div className="absolute top-3 left-3">
            <Badge className={getDifficultyColor(recipe.difficulty)}>
              {recipe.difficulty}
            </Badge>
          </div>

          {/* Rating */}
          <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1">
            <Star className="h-3 w-3 fill-warning text-warning" />
            <span className="text-xs font-medium">{recipe.rating}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
              {recipe.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {recipe.description}
            </p>
          </div>

          {/* Recipe meta info */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{recipe.cookTime} min</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{recipe.servings} servings</span>
            </div>
          </div>

          {/* Nutrition info */}
          <div className="grid grid-cols-4 gap-2 text-xs text-center">
            <div className="bg-muted rounded-lg px-2 py-1">
              <div className="font-medium text-foreground">{recipe.nutrition.calories}</div>
              <div className="text-muted-foreground">cal</div>
            </div>
            <div className="bg-muted rounded-lg px-2 py-1">
              <div className="font-medium text-foreground">{recipe.nutrition.protein}g</div>
              <div className="text-muted-foreground">protein</div>
            </div>
            <div className="bg-muted rounded-lg px-2 py-1">
              <div className="font-medium text-foreground">{recipe.nutrition.carbs}g</div>
              <div className="text-muted-foreground">carbs</div>
            </div>
            <div className="bg-muted rounded-lg px-2 py-1">
              <div className="font-medium text-foreground">{recipe.nutrition.fat}g</div>
              <div className="text-muted-foreground">fat</div>
            </div>
          </div>

          {/* Dietary badges */}
          {recipe.dietaryInfo.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {recipe.dietaryInfo.map((diet) => (
                <Badge key={diet} variant="secondary" className="text-xs">
                  {diet}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Link to={`/recipe/${recipe.id}`} className="w-full">
          <Button className="w-full" variant="outline">
            View Recipe
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;