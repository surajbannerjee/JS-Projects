# JS-Projects 🚀

A collection of interactive JavaScript projects demonstrating various web development concepts and techniques. This repository showcases practical implementations of JavaScript fundamentals, DOM manipulation, local storage, and modern UI/UX design patterns.

## 📋 Table of Contents

- [Overview](#overview)
- [Projects Included](#projects-included)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Usage](#installation--usage)
- [Project Details](#project-details)
- [Learning Outcomes](#learning-outcomes)
- [Author](#author)

## 🎯 Overview

This repository contains multiple mini-projects built with vanilla JavaScript, HTML, and CSS. Each project demonstrates different JavaScript concepts and real-world applications, making it perfect for learning and practicing web development skills.

## 📦 Projects Included

1. **Age Calculator** - Categorizes users based on their age input
2. **Profile Manager** - Create, display, and manage user profiles with image upload
3. **Counter App** - Interactive counter with increment, decrement, and reset functionality
4. **Custom Dial Clock** - Beautiful animated clock with rotating background and glassmorphism effects

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Custom styling with modern design patterns
  - CSS Variables
  - Flexbox & Grid layouts
  - Animations & Transitions
  - Glassmorphism effects
  - Custom scrollbar styling
- **JavaScript (ES6+)** - Core functionality
  - DOM Manipulation
  - Event Listeners
  - LocalStorage API
  - FileReader API
  - Date & Time manipulation
  - Array methods
- **Bootstrap 5.2.3** - Responsive layout framework
- **Bootstrap Icons** - Icon library
- **Iconify** - Additional icon support
- **Google Fonts** - Custom typography (Baumans, Bruno Ace SC)

## ✨ Features

### General Features

- ✅ Fully responsive design
- ✅ Modern UI/UX with smooth animations
- ✅ Custom color palette with CSS variables
- ✅ Neumorphism design elements
- ✅ Custom scrollbar styling
- ✅ Glassmorphism effects

### Project-Specific Features

#### Age Calculator

- Age input validation
- Dynamic age categorization (Child, Teenager, Adult, Senior)
- Form submission handling
- Result display with styled output

#### Profile Manager

- Multi-field form (Name, Email, DOB, Gender, Image)
- Image upload with preview
- LocalStorage persistence
- Dynamic profile card generation
- Delete functionality for individual profiles
- Grid-based responsive layout
- Base64 image encoding

#### Counter App

- Increment/Decrement buttons with neumorphism design
- Counter limits (0-10)
- Visual feedback (color change at count > 8)
- Disabled state for buttons at limits
- Reset functionality

#### Custom Dial Clock

- Real-time clock display
- Dual dial system (seconds and minutes)
- Rotating background animation
- Glassmorphism effects with SVG filters
- Toggle sidebar functionality
- Smooth transitions and animations
- Custom spike markers for time units

## 📁 Project Structure

```
JS-Projects/
│
├── JsLearning.html          # Main HTML file with all projects
├── jsLearning.css           # Comprehensive stylesheet
├── script.js                # JavaScript functionality for all projects
├── images/                  # Image assets
│   ├── clock.svg           # Clock icon
│   ├── img.jpg             # Background image 1
│   ├── img1.jpg            # Background image 2
│   ├── img2.jpg            # Background image 3
│   ├── img3.jpg            # Background image 4
│   └── img4.jpg            # Background image 5
└── README.md               # Project documentation
```

## 🚀 Installation & Usage

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, and JavaScript (for learning purposes)

### Steps to Run

1. **Clone the repository**

   ```bash
   git clone https://github.com/surajbannerjee/JS-Projects.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd JS-Projects
   ```

3. **Open the HTML file**
   - Simply open `JsLearning.html` in your web browser
   - Or use a local development server (recommended):

     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Node.js (http-server)
     npx http-server
     ```

4. **Access the application**
   - If using a local server, navigate to `http://localhost:8000`
   - Otherwise, just double-click `JsLearning.html`

## 📖 Project Details

### 1. Age Calculator

**Location:** Top section of the page  
**Functionality:**

- User enters their age
- JavaScript categorizes the age:
  - ≤ 8: Child
  - ≤ 18: Teenager
  - ≤ 35: Adult
  - > 35: Senior
- Result is displayed with custom styling

**Key Concepts:**

- Form handling
- Conditional logic
- DOM manipulation
- Event listeners

### 2. Profile Manager

**Location:** Middle section  
**Functionality:**

- Create user profiles with multiple fields
- Upload and preview images
- Store profiles in browser's LocalStorage
- Display profiles in a responsive grid
- Delete individual profiles
- Persist data across browser sessions

**Key Concepts:**

- FileReader API for image handling
- LocalStorage for data persistence
- Dynamic DOM element creation
- Array manipulation
- JSON serialization/deserialization

### 3. Counter App

**Location:** Bottom section  
**Functionality:**

- Increment counter (max: 10)
- Decrement counter (min: 0)
- Visual feedback with color changes
- Button disable states at limits
- Reset to zero

**Key Concepts:**

- State management
- Event handling
- Conditional styling
- CSS class manipulation

### 4. Custom Dial Clock

**Location:** Fixed sidebar (toggle with clock icon)  
**Functionality:**

- Real-time clock display
- Dual rotating dials for seconds and minutes
- Hour and minute text display
- Animated rotating background
- Glassmorphism effects using SVG filters
- Toggle sidebar on/off
- Click-outside-to-close functionality

**Key Concepts:**

- Date and Time API
- CSS animations
- SVG filters
- setInterval for real-time updates
- Event bubbling and propagation
- CSS custom properties (variables)

## 🎓 Learning Outcomes

By exploring this project, you'll learn:

1. **JavaScript Fundamentals**
   - Variables and data types
   - Functions and arrow functions
   - Conditional statements
   - Loops and iterations
   - Array methods (forEach, splice, push)

2. **DOM Manipulation**
   - Selecting elements (getElementById, querySelector)
   - Creating elements dynamically
   - Modifying element properties and styles
   - Event listeners and handling

3. **Web APIs**
   - LocalStorage API
   - FileReader API
   - Date API

4. **CSS Techniques**
   - CSS Variables for theming
   - Flexbox and Grid layouts
   - Animations and transitions
   - Glassmorphism and neumorphism
   - SVG filters

5. **Best Practices**
   - Form validation
   - Event delegation
   - Code organization
   - Responsive design
   - User experience considerations

## 👨‍💻 Author

**Suraj Bannerjee**

- GitHub: [@surajbannerjee](https://github.com/surajbannerjee)
- Project Repository: [JS-Projects](https://github.com/surajbannerjee/JS-Projects)

## 📝 License

This project is open source and available for learning purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 🌟 Show Your Support

Give a ⭐️ if this project helped you learn something new!

---

**Happy Coding! 🎉**
