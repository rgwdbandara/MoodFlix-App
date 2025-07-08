# 🎬 MoodFlix – AI-Powered Mood-Based Movie Recommendation Web App

MoodFlix is a modern web application that leverages facial emotion recognition and mood-based Q&A analysis to recommend personalized movies and TV shows. It combines AI, real-time APIs, and clean UI/UX to enhance how users discover content based on their emotional state.

## 🚀 Live Demo

Hosted on Vercel: [[Visit MoodFlix](https://mood-flix-app-1k8h.vercel.app/)](#) *Replace with actual URL)*

---

## 🧠 Features

- 🎭 **Real-Time Emotion Detection** via webcam using `face-api.js`
- ❓ **Q&A Mood Analysis** module as a fallback or alternative
- 🍿 **Mood-Based Movie Recommendations** mapped to genres
- 🔍 **Search & Explore** functionality with pagination
- 📺 **Trending / Now Playing / Top Rated / Similar Movies**
- 🌐 **Responsive Design** with mobile-first styling
- ⚠️ **Error Handling** for API or webcam issues

---

## 🛠️ Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **State Management:** Redux Toolkit
- **AI & Face Detection:** face-api.js
- **APIs:** [TMDB API](https://www.themoviedb.org/documentation/api), YouTube API
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

---

## 🎯 Mood-to-Genre Mapping

| Detected Mood | Recommended Genres                |
|---------------|-----------------------------------|
| Happy         | Comedy, Family, Adventure         |
| Sad           | Drama, Romance                    |
| Angry         | Action, Thriller                  |
| Neutral       | Popular, Top Rated                |
| No Mood       | Default: Trending Movies          |

---

## 👥 Project Team

| Name                   | Plymouth ID |
|------------------------|-------------|
| Rathna Bandara         | 10953595    |
| Siriya Gnanarathna     | 10953588    |
| Demalgiriya Madhuranga | 10953669    |
| Nusith Kendelpitiya    | 10953695    |
| RathneGedara Bandara   | 10953560    |
| Arukgoda Arukgoda      | 10953567    |
| Devindi Tharushika     | 10953571    |
| Liyanage Malithi       | 10953220    |
| WGS Daksina            | 10953086    |

---

## 📋 Project Structure

```bash
MoodFlix/
├── public/
├── src/
│   ├── components/
│   ├── features/
│   ├── pages/
│   ├── redux/
│   └── App.js
├── .env
├── tailwind.config.js
├── package.json
└── README.md
