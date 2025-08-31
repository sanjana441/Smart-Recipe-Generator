# Smart Recipe Generator

live: https://smart-recipe-generator-bk53.vercel.app/

A full-stack Next.js app that generates recipe suggestions from your available ingredients, dietary preferences, and optional image-based ingredient recognition.

Features:
- Input ingredients via text, selection, or basic AI from an uploaded image.
- Filter by cooking difficulty, prep time, and diet (vegetarian/vegan/gluten-free/dairy-free).
- Detailed recipe pages with scaled ingredients by servings, nutrition per serving, and substitution suggestions.
- Save favorites and rate recipes; get suggestions based on your likes.
- 20+ built-in recipes across cuisines stored in JSON and served via API routes.

Tech:
- Next.js App Router, TypeScript, shadcn/ui, SWR.
- Data via Next.js Route Handlers over a JSON dataset.
- LocalStorage for favorites and ratings, with error handling and loading skeletons.

Approach :
We centralized recipe data in a JSON dataset and exposed it via API routes for consistent client fetching with SWR. The matching algorithm scores recipes by ingredient overlap and prep time; diet filters are applied server-side. Ingredient recognition first attempts a server endpoint (for future CV API integration) and gracefully falls back to a lightweight canvas-based heuristic (dominant color + texture) to infer common items. Detail pages provide nutrition and servings scaling, plus substitution hints from a curated ruleset. UX emphasizes mobile-first layout, accessible controls, skeletons, and clear feedback. Favorites/ratings persist locally, and a suggestion endpoint recommends similar recipes using Jaccard similarity.
