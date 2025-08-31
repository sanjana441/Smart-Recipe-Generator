import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { X, Plus, Search } from 'lucide-react';
import { allIngredients } from '@/data/recipes';

interface IngredientInputProps {
  selectedIngredients: string[];
  onIngredientsChange: (ingredients: string[]) => void;
  placeholder?: string;
}

const IngredientInput = ({ selectedIngredients, onIngredientsChange, placeholder = "Add ingredients..." }: IngredientInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputValue.trim()) {
      const filtered = allIngredients.filter(ingredient =>
        ingredient.toLowerCase().includes(inputValue.toLowerCase()) &&
        !selectedIngredients.some(selected => selected.toLowerCase() === ingredient.toLowerCase())
      ).slice(0, 8);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [inputValue, selectedIngredients]);

  const addIngredient = (ingredient: string) => {
    const normalizedIngredient = ingredient.trim();
    if (normalizedIngredient && !selectedIngredients.some(ing => ing.toLowerCase() === normalizedIngredient.toLowerCase())) {
      onIngredientsChange([...selectedIngredients, normalizedIngredient]);
      setInputValue('');
      setShowSuggestions(false);
    }
  };

  const removeIngredient = (ingredient: string) => {
    onIngredientsChange(selectedIngredients.filter(ing => ing !== ingredient));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (suggestions.length > 0) {
        addIngredient(suggestions[0]);
      } else if (inputValue.trim()) {
        addIngredient(inputValue);
      }
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    addIngredient(suggestion);
    inputRef.current?.focus();
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            className="pl-10 pr-12"
          />
          {inputValue && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 p-0"
              onClick={() => addIngredient(inputValue)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Suggestions dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <Card className="absolute top-full left-0 right-0 z-10 mt-1 max-h-48 overflow-y-auto border border-border bg-popover shadow-lg">
            <div className="p-2">
              {suggestions.map((suggestion, index) => (
                <div
                  key={`${suggestion}-${index}`}
                  className="cursor-pointer rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>

      {/* Selected ingredients */}
      {selectedIngredients.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-foreground">Selected Ingredients:</h4>
          <div className="flex flex-wrap gap-2">
            {selectedIngredients.map((ingredient) => (
              <Badge
                key={ingredient}
                variant="secondary"
                className="flex items-center gap-1 px-3 py-1 text-sm"
              >
                {ingredient}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground rounded-full"
                  onClick={() => removeIngredient(ingredient)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default IngredientInput;