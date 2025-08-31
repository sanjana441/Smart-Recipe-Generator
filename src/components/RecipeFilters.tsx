import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cuisineTypes, dietaryFilters } from '@/data/recipes';
import { Filter, X } from 'lucide-react';

export interface RecipeFilters {
  cuisine: string[];
  dietary: string[];
  difficulty: string[];
  maxCookTime: number;
  sortBy: 'rating' | 'cookTime' | 'difficulty';
}

interface RecipeFiltersProps {
  filters: RecipeFilters;
  onFiltersChange: (filters: RecipeFilters) => void;
}

const RecipeFiltersComponent = ({ filters, onFiltersChange }: RecipeFiltersProps) => {
  const updateFilter = (key: keyof RecipeFilters, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const toggleArrayFilter = (key: 'cuisine' | 'dietary' | 'difficulty', value: string) => {
    const currentArray = filters[key];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    updateFilter(key, newArray);
  };

  const clearFilters = () => {
    onFiltersChange({
      cuisine: [],
      dietary: [],
      difficulty: [],
      maxCookTime: 120,
      sortBy: 'rating'
    });
  };

  const hasActiveFilters = filters.cuisine.length > 0 || filters.dietary.length > 0 || 
    filters.difficulty.length > 0 || filters.maxCookTime < 120;

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Sort By */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Sort By</label>
          <Select value={filters.sortBy} onValueChange={(value: any) => updateFilter('sortBy', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="cookTime">Cook Time</SelectItem>
              <SelectItem value="difficulty">Difficulty</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Cook Time */}
        <div className="space-y-3">
          <label className="text-sm font-medium">
            Max Cook Time: {filters.maxCookTime} min
          </label>
          <Slider
            value={[filters.maxCookTime]}
            onValueChange={(value) => updateFilter('maxCookTime', value[0])}
            max={120}
            min={10}
            step={5}
            className="w-full"
          />
        </div>

        {/* Difficulty */}
        <div className="space-y-3">
          <label className="text-sm font-medium">Difficulty</label>
          <div className="flex flex-wrap gap-2">
            {['Easy', 'Medium', 'Hard'].map((difficulty) => (
              <Button
                key={difficulty}
                variant={filters.difficulty.includes(difficulty) ? "default" : "filter"}
                size="sm"
                onClick={() => toggleArrayFilter('difficulty', difficulty)}
              >
                {difficulty}
              </Button>
            ))}
          </div>
        </div>

        {/* Cuisine */}
        <div className="space-y-3">
          <label className="text-sm font-medium">Cuisine</label>
          <div className="flex flex-wrap gap-2">
            {cuisineTypes.map((cuisine) => (
              <Button
                key={cuisine}
                variant={filters.cuisine.includes(cuisine) ? "default" : "filter"}
                size="sm"
                onClick={() => toggleArrayFilter('cuisine', cuisine)}
              >
                {cuisine}
              </Button>
            ))}
          </div>
        </div>

        {/* Dietary Restrictions */}
        <div className="space-y-3">
          <label className="text-sm font-medium">Dietary</label>
          <div className="space-y-2">
            {dietaryFilters.map((diet) => (
              <div key={diet} className="flex items-center space-x-2">
                <Checkbox
                  id={diet}
                  checked={filters.dietary.includes(diet)}
                  onCheckedChange={() => toggleArrayFilter('dietary', diet)}
                />
                <label htmlFor={diet} className="text-sm">
                  {diet}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Active Filters Summary */}
        {hasActiveFilters && (
          <div className="space-y-2 pt-4 border-t">
            <label className="text-sm font-medium">Active Filters:</label>
            <div className="flex flex-wrap gap-1">
              {filters.cuisine.map((cuisine) => (
                <Badge key={cuisine} variant="secondary" className="text-xs">
                  {cuisine}
                </Badge>
              ))}
              {filters.dietary.map((diet) => (
                <Badge key={diet} variant="secondary" className="text-xs">
                  {diet}
                </Badge>
              ))}
              {filters.difficulty.map((difficulty) => (
                <Badge key={difficulty} variant="secondary" className="text-xs">
                  {difficulty}
                </Badge>
              ))}
              {filters.maxCookTime < 120 && (
                <Badge variant="secondary" className="text-xs">
                  ≤ {filters.maxCookTime} min
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecipeFiltersComponent;