# Agent Rules for Code Modifications

## 🚨 CRITICAL RULES - NEVER VIOLATE THESE

### 1. **MINIMAL CHANGES PRINCIPLE**
- Make the **smallest possible change** to achieve the requested goal
- Do NOT refactor or "improve" code that wasn't explicitly asked to be changed
- Do NOT add new dependencies unless absolutely necessary and explicitly requested
- Do NOT change the core application structure unless specifically asked

### 2. **ASK BEFORE MAJOR CHANGES**
- **ALWAYS ask for permission** before:
  - Adding new dependencies to package.json
  - Changing the main App.tsx structure
  - Adding new global CSS files or major style changes
  - Implementing new architectural patterns (contexts, providers, etc.)
  - Making changes to more than 3 files for a single request

### 3. **TEST INCREMENTALLY**
- Make ONE change at a time
- Test each change by running the application (`npm run dev`)
- Verify the change works before moving to the next modification
- Do NOT make multiple changes and then test at the end

### 4. **PRESERVE EXISTING FUNCTIONALITY**
- Do NOT modify existing components unless explicitly asked
- Do NOT change existing prop interfaces or component APIs
- Do NOT remove or modify existing CSS classes or styles
- Do NOT change existing import statements unless necessary

## 📋 SPECIFIC GUIDELINES

### When Adding Loading Pages:
- Create a SINGLE loading component
- Add it to the app with a simple conditional render
- Do NOT restructure the entire App.tsx
- Do NOT add complex state management unless requested

### When Improving Performance:
- Focus on the SPECIFIC performance issue mentioned
- Do NOT implement comprehensive performance monitoring unless asked
- Do NOT add complex optimization systems without explicit request
- Make targeted improvements, not architectural overhauls

### When Enhancing Animations:
- Improve existing animations rather than replacing them
- Do NOT add complex animation libraries unless requested
- Do NOT create comprehensive animation systems unless asked
- Focus on the specific animation mentioned

### When Adding Lazy Loading:
- Start with a simple lazy loading implementation
- Do NOT convert all components to lazy loading unless requested
- Do NOT add complex intersection observer systems unless asked
- Test each lazy-loaded component individually

## 🔍 BEFORE MAKING CHANGES

### Always Ask These Questions:
1. **What is the MINIMUM change needed?**
2. **Will this change break existing functionality?**
3. **Am I adding complexity that wasn't requested?**
4. **Should I ask for permission before making this change?**
5. **Can I achieve the goal with fewer modifications?**

### Red Flags - Stop and Ask:
- Adding more than 2 new files
- Modifying core application files (App.tsx, main.tsx, index.tsx)
- Adding new npm packages
- Creating new hooks or contexts
- Modifying existing component interfaces
- Adding global CSS or style changes

## 🧪 TESTING PROTOCOL

### For Every Change:
1. **Run the application** - `npm run dev`
2. **Verify the new feature works** as expected
3. **Check existing functionality** still works
4. **Test build process** - `npm run build`
5. **Only proceed if everything works**

### If Something Breaks:
1. **Immediately revert the change**
2. **Identify the minimal fix needed**
3. **Ask for guidance if unsure**
4. **Do NOT attempt to fix by adding more complexity**

## 💬 COMMUNICATION GUIDELINES

### When Receiving Requests:
- **Clarify scope** if the request seems broad
- **Suggest the minimal approach** first
- **Ask for approval** before major changes
- **Explain the impact** of proposed changes

### Example Clarifying Questions:
- "Should I create a simple loading component or a full loading system?"
- "Do you want me to modify existing animations or add new ones?"
- "Are you looking for basic lazy loading or comprehensive performance optimization?"
- "Should I preserve all existing functionality?"

## 🚫 THINGS TO NEVER DO

### Never Do These Without Explicit Request:
- Refactor existing working code
- Add new architectural patterns
- Change build configuration
- Add complex state management
- Modify existing component APIs
- Add comprehensive monitoring systems
- Change existing styling systems
- Add new CSS frameworks or libraries

### Never Assume:
- That more features are better
- That architectural changes are wanted
- That performance monitoring is needed
- That comprehensive solutions are preferred
- That existing code needs improvement

## ✅ GOOD EXAMPLES

### User asks: "Add a loading page"
**Good Response:**
1. Create a simple LoadingPage component
2. Add a loading state to App.tsx
3. Show loading page for 2 seconds
4. Test that it works
5. Done

**Bad Response:**
1. Create comprehensive loading system
2. Add loading contexts and providers
3. Implement performance monitoring
4. Add lazy loading everywhere
5. Refactor entire app structure

### User asks: "Make animations smoother"
**Good Response:**
1. Identify existing animations
2. Improve their easing functions
3. Add hardware acceleration CSS
4. Test smoothness
5. Done

**Bad Response:**
1. Create animation library
2. Replace all animations
3. Add complex animation systems
4. Refactor component structure

## 🎯 SUCCESS CRITERIA

### A Good Implementation:
- ✅ Solves the specific problem requested
- ✅ Makes minimal changes to existing code
- ✅ Preserves all existing functionality
- ✅ Is tested and verified to work
- ✅ Doesn't break the build or dev server

### A Bad Implementation:
- ❌ Adds complexity not requested
- ❌ Breaks existing functionality
- ❌ Requires major architectural changes
- ❌ Introduces new dependencies unnecessarily
- ❌ Hasn't been properly tested

## 📝 FINAL REMINDERS

1. **Less is more** - simple solutions are usually better
2. **Ask first** - when in doubt, ask for permission
3. **Test frequently** - verify each change works
4. **Preserve existing** - don't break what's working
5. **Be specific** - solve the exact problem requested

**Remember: The goal is to help the user achieve their specific objective with minimal disruption to their existing codebase.**
