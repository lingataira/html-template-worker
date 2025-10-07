const template = () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Sample Cloudflare Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      color: #333;
      background-color: #f7f7f7;
    }
    header {
      background-image: url('https://placehold.co/1200x400');
      background-size: cover;
      background-position: center;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      text-shadow: 0 2px 6px rgba(0,0,0,0.3);
    }
    header h1 {
      font-size: 3rem;
      margin: 0;
    }
    section {
      padding: 60px 20px;
      max-width: 1100px;
      margin: auto;
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }
    .card {
      background: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: transform 0.2s;
    }
    .card:hover {
      transform: translateY(-5px);
    }
    .card img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }
    .card h3 {
      margin: 15px;
      font-size: 1.2rem;
    }
    .card p {
      margin: 0 15px 20px;
      color: #666;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome to My Cloudflare Page</h1>
  </header>

  <section>
    <h2>Our Featured Images</h2>
    <div class="cards">
      <div class="card">
        <img src="../assets/chiro_defend_colour_576x1024_2x" alt="Sample 1" />
        <h3>First Image</h3>
        <p>This is a short description for image one.</p>
      </div>
      <div class="card">
        <img src="./assets/chiro_boost_colour_576x1024_2x" alt="Sample 2" />
        <h3>Second Image</h3>
        <p>This is a short description for image two.</p>
      </div>
      <div class="card">
        <img src="https://placehold.co/400x300?text=Image+3" alt="Sample 3" />
        <h3>Third Image</h3>
        <p>This is a short description for image three.</p>
      </div>
    </div>
  </section>
</body>
</html>
`;

export default template;
