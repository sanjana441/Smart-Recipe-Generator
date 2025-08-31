export interface Recipe {
  id: string;
  title: string;
  image: string;
  description: string;
  cookTime: number; // in minutes
  difficulty: 'Easy' | 'Medium' | 'Hard';
  servings: number;
  cuisine: string;
  dietaryInfo: string[];
  rating: number;
  ingredients: Ingredient[];
  instructions: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  tags: string[];
}

export interface Ingredient {
  name: string;
  amount: string;
  substitutes?: string[];
}

import spaghettiCarbonaraImg from '@/assets/spaghetti-carbonara.jpg';
import buddhaBowlImg from '@/assets/buddha-bowl.jpg';
import chickenTikkaImg from '@/assets/chicken-tikka-masala.jpg';
import greekSaladImg from '@/assets/greek-salad.jpg';
import grilledSalmonImg from '@/assets/grilled-salmon.jpg';
import cookiesImg from '@/assets/chocolate-chip-cookies.jpg';

import ramenImg from '@/assets/ramen.jpg';
import tacosImg from '@/assets/tacos.jpg';
import padThaiImg from '@/assets/pad-thai.jpg';
import sushiImg from '@/assets/sushi.jpg';
import falafelWrapImg from '@/assets/falafel-wrap.jpg';
import margheritaPizzaImg from '@/assets/margherita-pizza.jpg';
import beefBurgerImg from '@/assets/beef-burger.jpg';
import shakshukaImg from '@/assets/shakshuka.jpg';
import pancakesImg from '@/assets/pancakes.jpg';
import caesarSaladImg from '@/assets/caesar-salad.jpg';

// For recipes 17–26
import butterChickenImg from '@/assets/butter-chicken.jpg';
import phoImg from '@/assets/pho.jpg';
import burritoImg from '@/assets/burrito.jpg';
import gnocchiImg from '@/assets/gnocchi.jpg';
import springRollsImg from '@/assets/spring-rolls.jpg';
import paellaImg from '@/assets/paella.jpg';
import kebabsImg from '@/assets/kebabs.jpg';
import clamChowderImg from '@/assets/clam-chowder.jpg';
import bruschettaImg from '@/assets/bruschetta.jpg';
import tiramisuImg from '@/assets/tiramisu.jpg';
export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Spaghetti Carbonara',
    image: spaghettiCarbonaraImg,
    description: 'Creamy Italian pasta with eggs, cheese, and crispy pancetta',
    cookTime: 20,
    difficulty: 'Medium',
    servings: 4,
    cuisine: 'Italian',
    dietaryInfo: [],
    rating: 4.8,
    ingredients: [
      { name: 'Spaghetti', amount: '400g', substitutes: ['Linguine', 'Fettuccine'] },
      { name: 'Pancetta', amount: '150g', substitutes: ['Bacon', 'Guanciale'] },
      { name: 'Eggs', amount: '3 large', substitutes: ['4 medium eggs'] },
      { name: 'Parmesan cheese', amount: '100g', substitutes: ['Pecorino Romano'] },
      { name: 'Black pepper', amount: '1 tsp' },
      { name: 'Salt', amount: 'to taste' }
    ],
    instructions: [
      'Bring a large pot of salted water to boil and cook spaghetti until al dente.',
      'Meanwhile, dice pancetta and cook in a large pan until crispy.',
      'In a bowl, whisk together eggs, grated cheese, and black pepper.',
      'Drain pasta, reserving 1 cup of pasta water.',
      'Add hot pasta to the pan with pancetta.',
      'Remove from heat and quickly stir in egg mixture, adding pasta water gradually.',
      'Toss until creamy. Serve immediately with extra cheese and pepper.'
    ],
    nutrition: {
      calories: 580,
      protein: 25,
      carbs: 65,
      fat: 22
    },
    tags: ['pasta', 'eggs', 'cheese', 'pork']
  },
  {
    id: '2',
    title: 'Buddha Bowl',
    image: buddhaBowlImg,
    description: 'Nutritious vegan bowl with quinoa, roasted vegetables, and tahini dressing',
    cookTime: 35,
    difficulty: 'Easy',
    servings: 2,
    cuisine: 'Mediterranean',
    dietaryInfo: ['Vegan', 'Gluten-free'],
    rating: 4.6,
    ingredients: [
      { name: 'Quinoa', amount: '1 cup', substitutes: ['Brown rice', 'Bulgur'] },
      { name: 'Sweet potato', amount: '1 large', substitutes: ['Regular potato', 'Butternut squash'] },
      { name: 'Chickpeas', amount: '1 can', substitutes: ['Black beans', 'Lentils'] },
      { name: 'Avocado', amount: '1 whole' },
      { name: 'Spinach', amount: '2 cups', substitutes: ['Kale', 'Arugula'] },
      { name: 'Tahini', amount: '3 tbsp', substitutes: ['Almond butter', 'Hummus'] },
      { name: 'Lemon juice', amount: '2 tbsp' },
      { name: 'Olive oil', amount: '2 tbsp' }
    ],
    instructions: [
      'Preheat oven to 400°F (200°C).',
      'Rinse and cook quinoa according to package instructions.',
      'Dice sweet potato and toss with olive oil, salt, and pepper.',
      'Roast sweet potato for 25-30 minutes until tender.',
      'Drain and rinse chickpeas, then roast for 15 minutes.',
      'Whisk tahini with lemon juice and water to make dressing.',
      'Assemble bowls with quinoa, vegetables, and dressing.'
    ],
    nutrition: {
      calories: 520,
      protein: 18,
      carbs: 68,
      fat: 22
    },
    tags: ['quinoa', 'vegetables', 'vegan', 'healthy']
  },
  {
    id: '3',
    title: 'Chicken Tikka Masala',
    image: chickenTikkaImg,
    description: 'Tender chicken in a rich, creamy tomato-based curry sauce',
    cookTime: 45,
    difficulty: 'Medium',
    servings: 4,
    cuisine: 'Indian',
    dietaryInfo: ['Gluten-free'],
    rating: 4.9,
    ingredients: [
      { name: 'Chicken breast', amount: '500g', substitutes: ['Chicken thighs', 'Paneer'] },
      { name: 'Tomatoes', amount: '400g can', substitutes: ['Fresh tomatoes'] },
      { name: 'Heavy cream', amount: '200ml', substitutes: ['Coconut cream'] },
      { name: 'Onion', amount: '1 large' },
      { name: 'Garlic', amount: '4 cloves' },
      { name: 'Ginger', amount: '1 inch piece' },
      { name: 'Garam masala', amount: '1 tbsp' },
      { name: 'Turmeric', amount: '1 tsp' },
      { name: 'Paprika', amount: '1 tsp' }
    ],
    instructions: [
      'Cut chicken into bite-sized pieces and marinate with spices.',
      'Cook chicken in a hot pan until golden, then set aside.',
      'Sauté onions, garlic, and ginger until fragrant.',
      'Add spices and cook for 1 minute.',
      'Add tomatoes and simmer for 10 minutes.',
      'Stir in cream and cooked chicken.',
      'Simmer for 15 minutes until sauce thickens.',
      'Serve with rice and naan bread.'
    ],
    nutrition: {
      calories: 420,
      protein: 35,
      carbs: 12,
      fat: 26
    },
    tags: ['chicken', 'curry', 'spicy', 'cream']
  },
  {
    id: '4',
    title: 'Greek Salad',
    image: greekSaladImg,
    description: 'Fresh Mediterranean salad with feta, olives, and vegetables',
    cookTime: 15,
    difficulty: 'Easy',
    servings: 4,
    cuisine: 'Greek',
    dietaryInfo: ['Vegetarian', 'Gluten-free'],
    rating: 4.5,
    ingredients: [
      { name: 'Tomatoes', amount: '4 large' },
      { name: 'Cucumber', amount: '1 large' },
      { name: 'Red onion', amount: '1/2 medium' },
      { name: 'Feta cheese', amount: '200g', substitutes: ['Goat cheese'] },
      { name: 'Kalamata olives', amount: '100g', substitutes: ['Black olives'] },
      { name: 'Extra virgin olive oil', amount: '4 tbsp' },
      { name: 'Red wine vinegar', amount: '2 tbsp' },
      { name: 'Oregano', amount: '1 tsp' }
    ],
    instructions: [
      'Cut tomatoes into wedges.',
      'Slice cucumber and red onion.',
      'Combine vegetables in a large bowl.',
      'Add olives and chunks of feta cheese.',
      'Whisk olive oil, vinegar, and oregano for dressing.',
      'Pour dressing over salad and toss gently.',
      'Let sit for 10 minutes before serving.'
    ],
    nutrition: {
      calories: 280,
      protein: 8,
      carbs: 12,
      fat: 24
    },
    tags: ['tomatoes', 'cheese', 'olives', 'fresh']
  },
  {
    id: '5',
    title: 'Grilled Salmon with Asparagus',
    image: grilledSalmonImg,
    description: 'Perfectly grilled salmon with tender asparagus and lemon',
    cookTime: 25,
    difficulty: 'Medium',
    servings: 4,
    cuisine: 'American',
    dietaryInfo: ['Gluten-free', 'Keto'],
    rating: 4.7,
    ingredients: [
      { name: 'Salmon fillets', amount: '4 pieces', substitutes: ['Trout', 'Cod'] },
      { name: 'Asparagus', amount: '500g', substitutes: ['Broccoli', 'Green beans'] },
      { name: 'Lemon', amount: '2 whole' },
      { name: 'Olive oil', amount: '3 tbsp' },
      { name: 'Garlic', amount: '3 cloves' },
      { name: 'Salt', amount: 'to taste' },
      { name: 'Black pepper', amount: 'to taste' },
      { name: 'Fresh dill', amount: '2 tbsp', substitutes: ['Parsley'] }
    ],
    instructions: [
      'Preheat grill to medium-high heat.',
      'Brush salmon with olive oil and season with salt and pepper.',
      'Trim asparagus ends and toss with oil, garlic, salt, and pepper.',
      'Grill salmon for 4-5 minutes per side.',
      'Grill asparagus for 8-10 minutes, turning occasionally.',
      'Squeeze lemon over salmon and asparagus.',
      'Garnish with fresh dill and serve immediately.'
    ],
    nutrition: {
      calories: 320,
      protein: 28,
      carbs: 8,
      fat: 20
    },
    tags: ['salmon', 'fish', 'asparagus', 'grilled']
  },
  {
    id: '6',
    title: 'Chocolate Chip Cookies',
    image: cookiesImg,
    description: 'Classic homemade cookies with gooey chocolate chips',
    cookTime: 30,
    difficulty: 'Easy',
    servings: 24,
    cuisine: 'American',
    dietaryInfo: ['Vegetarian'],
    rating: 4.8,
    ingredients: [
      { name: 'Flour', amount: '2 1/4 cups', substitutes: ['Almond flour'] },
      { name: 'Butter', amount: '1 cup', substitutes: ['Vegan butter'] },
      { name: 'Brown sugar', amount: '3/4 cup' },
      { name: 'White sugar', amount: '3/4 cup' },
      { name: 'Eggs', amount: '2 large', substitutes: ['Flax eggs'] },
      { name: 'Vanilla extract', amount: '2 tsp' },
      { name: 'Baking soda', amount: '1 tsp' },
      { name: 'Salt', amount: '1 tsp' },
      { name: 'Chocolate chips', amount: '2 cups', substitutes: ['Dark chocolate chunks'] }
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Cream butter with both sugars until fluffy.',
      'Beat in eggs and vanilla extract.',
      'In a separate bowl, whisk flour, baking soda, and salt.',
      'Gradually mix dry ingredients into wet ingredients.',
      'Fold in chocolate chips.',
      'Drop rounded tablespoons onto baking sheets.',
      'Bake for 9-11 minutes until golden brown.',
      'Cool on baking sheet for 5 minutes before transferring.'
    ],
    nutrition: {
      calories: 180,
      protein: 2,
      carbs: 24,
      fat: 9
    },
    tags: ['cookies', 'chocolate', 'baking', 'dessert']
  },
  {
  id: '7',
  title: 'Ramen Noodle Soup',
  image: ramenImg,
  description: 'Japanese noodle soup with broth, noodles, pork, and toppings',
  cookTime: 50,
  difficulty: 'Medium',
  servings: 2,
  cuisine: 'Japanese',
  dietaryInfo: [],
  rating: 4.7,
  ingredients: [
    { name: 'Ramen noodles', amount: '200g', substitutes: ['Udon', 'Soba'] },
    { name: 'Pork belly', amount: '200g', substitutes: ['Chicken thigh'] },
    { name: 'Soy sauce', amount: '3 tbsp' },
    { name: 'Miso paste', amount: '2 tbsp' },
    { name: 'Garlic', amount: '3 cloves' },
    { name: 'Ginger', amount: '1 inch' },
    { name: 'Eggs', amount: '2 soft-boiled' },
    { name: 'Green onions', amount: '2 stalks' }
  ],
  instructions: [
    'Prepare broth with soy, miso, garlic, and ginger.',
    'Cook pork belly slices until tender.',
    'Boil noodles until al dente.',
    'Assemble noodles in bowls, pour hot broth, add pork, eggs, and toppings.'
  ],
  nutrition: {
    calories: 480,
    protein: 25,
    carbs: 52,
    fat: 18
  },
  tags: ['noodles', 'soup', 'japanese']
},
{
  id: '8',
  title: 'Chicken Tacos',
  image: tacosImg,
  description: 'Mexican-style tacos with seasoned chicken, salsa, and lime',
  cookTime: 30,
  difficulty: 'Easy',
  servings: 4,
  cuisine: 'Mexican',
  dietaryInfo: [],
  rating: 4.6,
  ingredients: [
    { name: 'Tortillas', amount: '8 small' },
    { name: 'Chicken breast', amount: '400g' },
    { name: 'Lime', amount: '2 whole' },
    { name: 'Onion', amount: '1 medium' },
    { name: 'Cilantro', amount: '1/2 cup' },
    { name: 'Salsa', amount: '1/2 cup' }
  ],
  instructions: [
    'Season and cook chicken until golden.',
    'Warm tortillas on a skillet.',
    'Slice chicken and fill tortillas with chicken, onion, salsa, and cilantro.',
    'Squeeze lime juice before serving.'
  ],
  nutrition: {
    calories: 350,
    protein: 30,
    carbs: 40,
    fat: 10
  },
  tags: ['tacos', 'mexican', 'street-food']
},
{
  id: '9',
  title: 'Pad Thai',
  image: padThaiImg,
  description: 'Thai stir-fried rice noodles with shrimp, peanuts, and tamarind sauce',
  cookTime: 35,
  difficulty: 'Medium',
  servings: 3,
  cuisine: 'Thai',
  dietaryInfo: ['Gluten-free'],
  rating: 4.9,
  ingredients: [
    { name: 'Rice noodles', amount: '200g' },
    { name: 'Shrimp', amount: '200g', substitutes: ['Chicken', 'Tofu'] },
    { name: 'Tamarind paste', amount: '2 tbsp' },
    { name: 'Soy sauce', amount: '2 tbsp' },
    { name: 'Bean sprouts', amount: '1 cup' },
    { name: 'Eggs', amount: '2 large' },
    { name: 'Peanuts', amount: '1/4 cup' },
    { name: 'Green onions', amount: '2 stalks' }
  ],
  instructions: [
    'Soak rice noodles until softened.',
    'Stir-fry shrimp and set aside.',
    'Cook eggs in pan, then add noodles and sauce.',
    'Toss with bean sprouts and shrimp, garnish with peanuts.'
  ],
  nutrition: {
    calories: 450,
    protein: 22,
    carbs: 60,
    fat: 15
  },
  tags: ['thai', 'noodles', 'shrimp', 'street-food']
},
{
  id: '10',
  title: 'Sushi Rolls',
  image: sushiImg,
  description: 'Japanese sushi rolls filled with rice, fish, and vegetables',
  cookTime: 60,
  difficulty: 'Hard',
  servings: 4,
  cuisine: 'Japanese',
  dietaryInfo: ['Gluten-free'],
  rating: 4.8,
  ingredients: [
    { name: 'Sushi rice', amount: '2 cups' },
    { name: 'Nori sheets', amount: '6 sheets' },
    { name: 'Salmon', amount: '200g', substitutes: ['Tuna', 'Avocado (veg)'] },
    { name: 'Cucumber', amount: '1 whole' },
    { name: 'Soy sauce', amount: '4 tbsp' },
    { name: 'Rice vinegar', amount: '3 tbsp' }
  ],
  instructions: [
    'Cook and season sushi rice with vinegar.',
    'Lay nori on bamboo mat, spread rice evenly.',
    'Add salmon and cucumber strips.',
    'Roll tightly and slice into pieces.',
    'Serve with soy sauce and wasabi.'
  ],
  nutrition: {
    calories: 300,
    protein: 15,
    carbs: 42,
    fat: 8
  },
  tags: ['sushi', 'rice', 'japanese']
},
{
  id: '11',
  title: 'Falafel Wrap',
  image: falafelWrapImg,
  description: 'Middle Eastern wrap with crispy falafel, veggies, and tahini sauce',
  cookTime: 40,
  difficulty: 'Medium',
  servings: 3,
  cuisine: 'Middle Eastern',
  dietaryInfo: ['Vegan'],
  rating: 4.5,
  ingredients: [
    { name: 'Chickpeas', amount: '1 can', substitutes: ['Black beans'] },
    { name: 'Garlic', amount: '3 cloves' },
    { name: 'Onion', amount: '1 small' },
    { name: 'Parsley', amount: '1/2 cup' },
    { name: 'Flour', amount: '2 tbsp' },
    { name: 'Pita bread', amount: '3 pieces' },
    { name: 'Tahini sauce', amount: '1/4 cup' }
  ],
  instructions: [
    'Blend chickpeas, garlic, onion, parsley, and flour.',
    'Form into small patties and fry until golden.',
    'Fill pita with falafel, lettuce, and tahini sauce.',
    'Serve immediately.'
  ],
  nutrition: {
    calories: 400,
    protein: 12,
    carbs: 50,
    fat: 15
  },
  tags: ['falafel', 'wrap', 'vegan']
},
{
  id: '12',
  title: 'Margherita Pizza',
  image: margheritaPizzaImg,
  description: 'Classic Italian pizza with tomato, mozzarella, and basil',
  cookTime: 25,
  difficulty: 'Easy',
  servings: 2,
  cuisine: 'Italian',
  dietaryInfo: ['Vegetarian'],
  rating: 4.9,
  ingredients: [
    { name: 'Pizza dough', amount: '1 base' },
    { name: 'Tomato sauce', amount: '1/2 cup' },
    { name: 'Mozzarella cheese', amount: '200g' },
    { name: 'Basil leaves', amount: '1/4 cup' }
  ],
  instructions: [
    'Preheat oven to 475°F (245°C).',
    'Spread sauce over dough, top with mozzarella.',
    'Bake for 10-12 minutes until cheese melts.',
    'Garnish with fresh basil and serve.'
  ],
  nutrition: {
    calories: 600,
    protein: 20,
    carbs: 70,
    fat: 25
  },
  tags: ['pizza', 'italian', 'vegetarian']
},
{
  id: '13',
  title: 'Beef Burger',
  image: beefBurgerImg,
  description: 'Juicy grilled beef burger with cheese and lettuce',
  cookTime: 20,
  difficulty: 'Easy',
  servings: 2,
  cuisine: 'American',
  dietaryInfo: [],
  rating: 4.7,
  ingredients: [
    { name: 'Beef patty', amount: '2 pieces', substitutes: ['Chicken patty', 'Veg patty'] },
    { name: 'Burger buns', amount: '2' },
    { name: 'Cheddar cheese', amount: '2 slices' },
    { name: 'Lettuce', amount: '2 leaves' },
    { name: 'Tomato', amount: '1 sliced' },
    { name: 'Onion', amount: '1 sliced' }
  ],
  instructions: [
    'Grill beef patties until cooked through.',
    'Toast buns on grill.',
    'Assemble with cheese, lettuce, tomato, and onion.',
    'Serve hot with fries.'
  ],
  nutrition: {
    calories: 550,
    protein: 28,
    carbs: 45,
    fat: 28
  },
  tags: ['burger', 'beef', 'american']
},
{
  id: '14',
  title: 'Shakshuka',
  image: shakshukaImg,
  description: 'Eggs poached in spicy tomato sauce with peppers and onions',
  cookTime: 30,
  difficulty: 'Easy',
  servings: 3,
  cuisine: 'Middle Eastern',
  dietaryInfo: ['Vegetarian', 'Gluten-free'],
  rating: 4.6,
  ingredients: [
    { name: 'Eggs', amount: '4 large' },
    { name: 'Tomatoes', amount: '400g can' },
    { name: 'Bell pepper', amount: '1 large' },
    { name: 'Onion', amount: '1 medium' },
    { name: 'Garlic', amount: '3 cloves' },
    { name: 'Paprika', amount: '1 tsp' }
  ],
  instructions: [
    'Sauté onion, garlic, and peppers until soft.',
    'Add tomatoes and paprika, simmer for 10 mins.',
    'Make wells and crack eggs into sauce.',
    'Cover and cook until eggs are set.'
  ],
  nutrition: {
    calories: 320,
    protein: 16,
    carbs: 18,
    fat: 20
  },
  tags: ['eggs', 'tomato', 'vegetarian']
},
{
  id: '15',
  title: 'Pancakes',
  image: pancakesImg,
  description: 'Fluffy breakfast pancakes with syrup and butter',
  cookTime: 20,
  difficulty: 'Easy',
  servings: 4,
  cuisine: 'American',
  dietaryInfo: ['Vegetarian'],
  rating: 4.8,
  ingredients: [
    { name: 'Flour', amount: '2 cups' },
    { name: 'Milk', amount: '1 1/2 cups' },
    { name: 'Eggs', amount: '2 large' },
    { name: 'Baking powder', amount: '2 tsp' },
    { name: 'Sugar', amount: '2 tbsp' },
    { name: 'Butter', amount: '2 tbsp' }
  ],
  instructions: [
    'Mix dry ingredients together.',
    'Whisk eggs and milk, then combine with dry ingredients.',
    'Cook batter on skillet until bubbles form, then flip.',
    'Serve with butter and syrup.'
  ],
  nutrition: {
    calories: 290,
    protein: 6,
    carbs: 45,
    fat: 9
  },
  tags: ['breakfast', 'pancakes', 'sweet']
},
{
  id: '16',
  title: 'Caesar Salad',
  image: caesarSaladImg,
  description: 'Crisp romaine lettuce with Caesar dressing and croutons',
  cookTime: 15,
  difficulty: 'Easy',
  servings: 2,
  cuisine: 'Italian-American',
  dietaryInfo: ['Vegetarian'],
  rating: 4.4,
  ingredients: [
    { name: 'Romaine lettuce', amount: '1 head' },
    { name: 'Parmesan cheese', amount: '1/4 cup' },
    { name: 'Croutons', amount: '1 cup' },
    { name: 'Caesar dressing', amount: '1/2 cup' }
  ],
  instructions: [
    'Chop romaine lettuce and place in bowl.',
    'Add croutons and Parmesan.',
    'Toss with Caesar dressing before serving.'
  ],
  nutrition: {
    calories: 250,
    protein: 7,
    carbs: 18,
    fat: 16
  },
  tags: ['salad', 'lettuce', 'italian']
},
{
  id: '17',
  title: 'Butter Chicken',
  image: butterChickenImg,
  description: 'Rich and creamy Indian curry with tender chicken pieces',
  cookTime: 50,
  difficulty: 'Medium',
  servings: 4,
  cuisine: 'Indian',
  dietaryInfo: ['Gluten-free'],
  rating: 4.9,
  ingredients: [
    { name: 'Chicken thighs', amount: '500g', substitutes: ['Chicken breast'] },
    { name: 'Tomato puree', amount: '400g' },
    { name: 'Butter', amount: '100g' },
    { name: 'Cream', amount: '200ml', substitutes: ['Coconut cream'] },
    { name: 'Ginger garlic paste', amount: '2 tbsp' },
    { name: 'Garam masala', amount: '1 tbsp' }
  ],
  instructions: [
    'Marinate chicken with spices and yogurt.',
    'Cook chicken until browned.',
    'Simmer tomato puree with butter and cream.',
    'Combine chicken with sauce, simmer 15 minutes.',
    'Serve with naan or rice.'
  ],
  nutrition: { calories: 520, protein: 35, carbs: 18, fat: 30 },
  tags: ['curry', 'indian', 'chicken']
},
{
  id: '18',
  title: 'Vietnamese Pho',
  image: phoImg,
  description: 'Fragrant Vietnamese noodle soup with herbs and beef',
  cookTime: 90,
  difficulty: 'Hard',
  servings: 4,
  cuisine: 'Vietnamese',
  dietaryInfo: [],
  rating: 4.8,
  ingredients: [
    { name: 'Rice noodles', amount: '250g' },
    { name: 'Beef bones', amount: '500g' },
    { name: 'Beef slices', amount: '300g' },
    { name: 'Onion', amount: '1 large' },
    { name: 'Ginger', amount: '1 inch' },
    { name: 'Star anise', amount: '2 pods' },
    { name: 'Cilantro', amount: '1/2 cup' }
  ],
  instructions: [
    'Simmer beef bones, onion, ginger, and spices for 1 hr.',
    'Strain broth, season with fish sauce.',
    'Cook rice noodles separately.',
    'Serve noodles with hot broth, beef slices, and herbs.'
  ],
  nutrition: { calories: 450, protein: 28, carbs: 50, fat: 12 },
  tags: ['soup', 'noodles', 'vietnamese']
},
{
  id: '19',
  title: 'Beef Burrito',
  image: burritoImg,
  description: 'Mexican burrito with seasoned beef, beans, and rice',
  cookTime: 35,
  difficulty: 'Easy',
  servings: 4,
  cuisine: 'Mexican',
  dietaryInfo: [],
  rating: 4.6,
  ingredients: [
    { name: 'Tortillas', amount: '4 large' },
    { name: 'Ground beef', amount: '400g' },
    { name: 'Black beans', amount: '1 can' },
    { name: 'Rice', amount: '1 cup' },
    { name: 'Cheddar cheese', amount: '1/2 cup' },
    { name: 'Salsa', amount: '1/2 cup' }
  ],
  instructions: [
    'Cook rice and set aside.',
    'Sauté beef with spices until browned.',
    'Warm tortillas, fill with rice, beans, beef, and cheese.',
    'Roll tightly and serve with salsa.'
  ],
  nutrition: { calories: 550, protein: 30, carbs: 65, fat: 20 },
  tags: ['mexican', 'beef', 'wrap']
},
{
  id: '20',
  title: 'Potato Gnocchi',
  image: gnocchiImg,
  description: 'Soft Italian potato dumplings with butter sage sauce',
  cookTime: 40,
  difficulty: 'Medium',
  servings: 3,
  cuisine: 'Italian',
  dietaryInfo: ['Vegetarian'],
  rating: 4.7,
  ingredients: [
    { name: 'Potatoes', amount: '500g' },
    { name: 'Flour', amount: '1 1/2 cups' },
    { name: 'Egg yolk', amount: '1' },
    { name: 'Butter', amount: '4 tbsp' },
    { name: 'Fresh sage', amount: '6 leaves' }
  ],
  instructions: [
    'Boil potatoes and mash until smooth.',
    'Mix with flour and egg yolk to form dough.',
    'Roll and cut into small dumplings.',
    'Boil until they float, then toss in butter sage sauce.'
  ],
  nutrition: { calories: 360, protein: 10, carbs: 60, fat: 10 },
  tags: ['italian', 'vegetarian', 'pasta']
},
{
  id: '21',
  title: 'Vegetable Spring Rolls',
  image: springRollsImg,
  description: 'Crispy rolls with fresh vegetables and dipping sauce',
  cookTime: 25,
  difficulty: 'Easy',
  servings: 4,
  cuisine: 'Chinese',
  dietaryInfo: ['Vegan'],
  rating: 4.5,
  ingredients: [
    { name: 'Spring roll wrappers', amount: '12 sheets' },
    { name: 'Cabbage', amount: '1 cup shredded' },
    { name: 'Carrot', amount: '1 cup shredded' },
    { name: 'Bean sprouts', amount: '1 cup' },
    { name: 'Soy sauce', amount: '2 tbsp' }
  ],
  instructions: [
    'Sauté vegetables with soy sauce until slightly tender.',
    'Fill wrappers with veggies, roll tightly.',
    'Fry until golden brown and crisp.',
    'Serve with dipping sauce.'
  ],
  nutrition: { calories: 280, protein: 6, carbs: 36, fat: 12 },
  tags: ['chinese', 'vegan', 'appetizer']
},
{
  id: '22',
  title: 'Seafood Paella',
  image: paellaImg,
  description: 'Spanish rice dish with saffron, shrimp, mussels, and peas',
  cookTime: 60,
  difficulty: 'Hard',
  servings: 4,
  cuisine: 'Spanish',
  dietaryInfo: ['Gluten-free'],
  rating: 4.8,
  ingredients: [
    { name: 'Rice', amount: '2 cups' },
    { name: 'Shrimp', amount: '200g' },
    { name: 'Mussels', amount: '200g' },
    { name: 'Peas', amount: '1 cup' },
    { name: 'Saffron', amount: '1 tsp' },
    { name: 'Chicken broth', amount: '4 cups' }
  ],
  instructions: [
    'Sauté onions, garlic, and rice with olive oil.',
    'Add broth, saffron, and peas, simmer until rice cooks.',
    'Arrange seafood on top, cover until cooked through.',
    'Serve hot with lemon wedges.'
  ],
  nutrition: { calories: 500, protein: 28, carbs: 60, fat: 14 },
  tags: ['spanish', 'seafood', 'rice']
},
{
  id: '23',
  title: 'Grilled Lamb Kebabs',
  image: kebabsImg,
  description: 'Spiced lamb skewers grilled with onions and peppers',
  cookTime: 35,
  difficulty: 'Medium',
  servings: 4,
  cuisine: 'Middle Eastern',
  dietaryInfo: ['Gluten-free'],
  rating: 4.7,
  ingredients: [
    { name: 'Lamb cubes', amount: '500g' },
    { name: 'Onion', amount: '1 large' },
    { name: 'Bell peppers', amount: '2' },
    { name: 'Cumin', amount: '1 tsp' },
    { name: 'Olive oil', amount: '2 tbsp' }
  ],
  instructions: [
    'Marinate lamb with spices and oil for 1 hr.',
    'Thread onto skewers with onions and peppers.',
    'Grill until lamb is browned and juicy.',
    'Serve with yogurt sauce.'
  ],
  nutrition: { calories: 480, protein: 35, carbs: 10, fat: 30 },
  tags: ['lamb', 'grill', 'middle eastern']
},
{
  id: '24',
  title: 'Clam Chowder',
  image: clamChowderImg,
  description: 'Creamy New England soup with clams, potatoes, and cream',
  cookTime: 40,
  difficulty: 'Medium',
  servings: 4,
  cuisine: 'American',
  dietaryInfo: ['Gluten-free'],
  rating: 4.6,
  ingredients: [
    { name: 'Clams', amount: '300g' },
    { name: 'Potatoes', amount: '2 large' },
    { name: 'Onion', amount: '1 medium' },
    { name: 'Heavy cream', amount: '1 cup' },
    { name: 'Bacon', amount: '100g' }
  ],
  instructions: [
    'Cook bacon until crisp, set aside.',
    'Sauté onions and potatoes in bacon fat.',
    'Add clams, cream, and simmer until thickened.',
    'Top with bacon before serving.'
  ],
  nutrition: { calories: 420, protein: 18, carbs: 30, fat: 28 },
  tags: ['soup', 'seafood', 'american']
},
{
  id: '25',
  title: 'Bruschetta',
  image: bruschettaImg,
  description: 'Italian toasted bread topped with tomato, basil, and olive oil',
  cookTime: 15,
  difficulty: 'Easy',
  servings: 4,
  cuisine: 'Italian',
  dietaryInfo: ['Vegetarian'],
  rating: 4.4,
  ingredients: [
    { name: 'Baguette', amount: '1 loaf' },
    { name: 'Tomatoes', amount: '3 medium' },
    { name: 'Basil leaves', amount: '1/4 cup' },
    { name: 'Olive oil', amount: '3 tbsp' },
    { name: 'Garlic', amount: '2 cloves' }
  ],
  instructions: [
    'Toast bread slices until golden.',
    'Rub with garlic, drizzle olive oil.',
    'Top with diced tomato and basil mixture.',
    'Serve immediately.'
  ],
  nutrition: { calories: 220, protein: 6, carbs: 28, fat: 10 },
  tags: ['italian', 'bread', 'appetizer']
},
{
  id: '26',
  title: 'Tiramisu',
  image: tiramisuImg,
  description: 'Classic Italian dessert with layers of coffee-soaked biscuits and mascarpone',
  cookTime: 30,
  difficulty: 'Medium',
  servings: 6,
  cuisine: 'Italian',
  dietaryInfo: ['Vegetarian'],
  rating: 4.9,
  ingredients: [
    { name: 'Ladyfingers', amount: '200g' },
    { name: 'Mascarpone cheese', amount: '250g' },
    { name: 'Egg yolks', amount: '3' },
    { name: 'Sugar', amount: '1/2 cup' },
    { name: 'Espresso coffee', amount: '1 cup' },
    { name: 'Cocoa powder', amount: '2 tbsp' }
  ],
  instructions: [
    'Whisk egg yolks and sugar until fluffy.',
    'Fold in mascarpone cheese.',
    'Dip ladyfingers in espresso, layer with cream.',
    'Repeat layers and dust with cocoa.',
    'Chill before serving.'
  ],
  nutrition: { calories: 480, protein: 8, carbs: 40, fat: 28 },
  tags: ['dessert', 'italian', 'coffee']
}
];
export const allIngredients = Array.from(
  new Set(recipes.flatMap(recipe => recipe.ingredients.map(ing => ing.name)))
).sort();

export const cuisineTypes = Array.from(
  new Set(recipes.map(recipe => recipe.cuisine))
).sort();

export const dietaryFilters = [
  'Vegetarian',
  'Vegan', 
  'Gluten-free',
  'Keto'
];