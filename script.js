* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background-color: #000;
  color: #fff;
  line-height: 1.6;
}

a {
  color: #ff4da6;
  text-decoration: none;
}

header {
  background: linear-gradient(135deg, #000 70%, #ff4da6 100%);
  color: #fff;
  text-align: center;
  padding: 4rem 1rem;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #111;
  flex-wrap: wrap;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
}

.logo span {
  color: #ff4da6;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.nav-links a {
  color: #fff;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #ff4da6;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero span {
  color: #ff4da6;
}

.hero .btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #ff4da6;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
}

main {
  padding: 2rem 1rem;
}

.portfolio h2, .services h2, .contact h2 {
  color: #ff4da6;
  margin-bottom: 1rem;
  text-align: center;
}

.video-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.video-card {
  background: #111;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

video {
  max-width: 100%;
  border-radius: 8px;
}

.services {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
}

.service-card {
  background: #111;
  padding: 1rem;
  border-radius: 8px;
  width: 300px;
  text-align: center;
}

.contact {
  text-align: center;
  margin-top: 2rem;
}

.contact form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
}

.contact input, .contact textarea {
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
}

.contact button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #ff4da6;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

footer {
  background-color: #111;
  color: #fff;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 0.5rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .video-gallery {
    grid-template-columns: 1fr;
  }

  .services {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 1.5rem;
  }

  .nav-links {
    flex-direction: column;
    gap: 0.3rem;
  }

  .service-card {
    width: 100%;
  }
}
