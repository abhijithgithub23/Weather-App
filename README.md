# Weather App

A responsive **React + Vite** weather application that shows real-time weather updates, temperature, and other useful weather stats for any city.

---

## Table of Contents

1. [Demo](#demo)  
2. [Features](#features)  
3. [Technologies Used](#technologies-used)  
4. [Installation](#installation)  
5. [Usage](#usage)  
6. [Deployment](#deployment)  

---

## Demo

Live demo: https://aj-weather-now.netlify.app/

---

## Features

- Search weather by city.  
- Display current temperature, humidity, wind speed, and more.  
- Dynamic background and icons based on weather conditions.  
- Sunrise/sunset countdown.  
- Feels-like temperature and human-readable insights.  
- Mobile responsive design.  

---

## Technologies Used

- **React 19** – Frontend library for building UI  
- **Vite** – Fast build tool for React apps  
- **Material UI (MUI)** – UI components and icons  
- **Emotion** – CSS-in-JS styling  
- **JavaScript / JSX** – Programming language  
- **OpenWeatherMap API** – Weather data source  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/abhijithgithub23/Weather-App.git
```
2. Navigate to the project folder:
```bash
cd Weather-App
```
3. Install dependencies:
```bash
npm install
```
4. Run the development server:
```bash
npm run dev
```
5. Open http://localhost:5173 in your browser.

---

## Usage

1. Enter the city name in the search bar.  
2. View current weather, temperature range, and insights.  

---

## Deployment

This app can be deployed easily using **Netlify, Vercel, or Render**.  

### Netlify deployment steps:

1. Go to [Netlify](https://www.netlify.com/) → Sign up/Login.  
2. Click **Add new site → Import from Git** → Connect GitHub.  
3. Select your repository (`Weather-App`).  
4. Set **build command**:

```bash
npm run build
```
5. Set publish directory:
```bash
dist
```

---

## Notes / Tips

- You need an **OpenWeatherMap API key**. Create a `.env` file in your project root:

```env
VITE_API_KEY=your_openweathermap_api_key

