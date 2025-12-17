# Flowchart for Cozy Corner Cafe Website

## Option 1: User Navigation Flow

```
START
  |
  v
[Home Page]
  |
  |-----> [Click "View Menu"] -----> [Menu Page]
  |                                       |
  |                                       |-----> [Select Category (Coffee/Pastries/etc.)]
  |                                       |              |
  |                                       |              v
  |                                       |       [Display Filtered Items]
  |                                       |              |
  |                                       |              v
  |                                       |       [View Item Details]
  |                                       |
  |-----> [Click "About Us"] -----> [About Page]
  |                                       |
  |                                       v
  |                              [Read Cafe Story & Mission]
  |
  v
[Navigate using Navbar to any page]
  |
  v
END
```

## Option 2: Menu Component Data Flow (Recommended for Explanation)

```
START: User lands on Menu Page
  |
  v
[Initialize State]
  |
  |-- selectedCategory = 'All'
  |-- menuItems = [array of 13 items]
  |
  v
[Render Category Buttons]
  |-- All
  |-- Coffee
  |-- Pastries
  |-- Desserts
  |-- Food
  |
  v
[User Clicks Category Button]
  |
  v
[Update State: setSelectedCategory(newCategory)]
  |
  v
[Filter Logic Executes]
  |
  |-- Is category 'All'?
  |     |
  |     YES --> [Show all menuItems]
  |     |
  |     NO --> [Filter menuItems by category]
  |            |
  |            v
  |     [filteredItems = items matching selected category]
  |
  v
[Map Through filteredItems]
  |
  v
[For Each Item: Create MenuItem Component]
  |
  |-- Pass Props:
  |     |-- name
  |     |-- description
  |     |-- price
  |     |-- image
  |
  v
[Render MenuItem Cards in Grid]
  |
  v
[Display on Screen]
  |
  v
END
```

## Option 3: Overall Application Structure

```
App.js (Root Component)
  |
  |-- Router
      |
      |-- Navbar (appears on all pages)
      |     |
      |     |-- Home Link (/)
      |     |-- Menu Link (/menu)
      |     |-- About Link (/about)
      |
      |-- Routes
          |
          |-- Route "/" --> Home Component
          |     |
          |     |-- Hero Section
          |     |-- Features Section
          |     |-- Hours Section
          |
          |-- Route "/menu" --> Menu Component
          |     |
          |     |-- State: selectedCategory
          |     |-- Data: menuItems array
          |     |-- Category Filter Buttons
          |     |-- Filtered Items Display
          |     |     |
          |     |     |-- Multiple MenuItem Components
          |     |           |
          |     |           |-- Props: name, description, price, image
          |
          |-- Route "/about" --> About Component
                |
                |-- Story Section
                |-- Mission Section
                |-- Team Section
                |-- CTA Section
```

## How to Use This for Your Submission:

**Recommended Approach:**
Use **Option 2** (Menu Component Data Flow) for your submission because:
1. It clearly shows state management
2. It demonstrates the filtering logic
3. It shows how props are passed to child components
4. It's the most interesting technical part of your project

**To Create Your Flowchart:**

### Digital Option:
1. Use any flowchart tool (draw.io, Lucidchart, Canva, etc.)
2. Copy the structure from Option 2 above
3. Make it visually appealing with colors and shapes
4. Export as PNG or JPG

### Hand-Drawn Option:
1. Draw boxes for each step
2. Use arrows to show flow
3. Label each box clearly
4. Take a clear, well-lit photo

**Key Elements to Include:**
- Start and End points
- Decision diamonds (for if/else conditions)
- Process rectangles (for actions)
- Data storage shapes (for state and arrays)
- Arrows showing flow direction
- Clear labels for each step

---

**Pro Tip for Video Explanation:**
When explaining this flowchart in your video, walk through a real example:
"When a user clicks the 'Coffee' category button, the state updates to 'Coffee', 
then the filter function runs and only shows items where category equals 'Coffee', 
and those items are passed as props to MenuItem components which render on screen."

This shows you truly understand the code!
