/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    color: #333;
}

/* Container */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background-color: #333;
    color: white;
    padding: 20px 0;
}

.header h1 {
    font-size: 26px;
}

.header-links {
    display: flex;
    gap: 15px;
    justify-content: flex-end;
    align-items: center;
}

.header-links a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

/* Navigation Bar */
.navbar {
    background-color: #88b04b;
    padding: 10px 0;
}

.navbar a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
    font-weight: bold;
}

/* Floating Alert Section */
.alert-section {
    background-color: #ff9800;
    padding: 15px 0;
    text-align: center;
    color: white;
}

#floating-alert {
    display: inline-block;
    font-size: 18px;
}

/* Main Content */
.main-content {
    display: flex;
    gap: 20px;
    margin: 40px 0;
}

/* Sidebar */
.sidebar {
    width: 25%;
    background-color: #f4f4f4;
    padding: 20px;
}

.sidebar h2 {
    font-size: 20px;
    margin-bottom: 15px;
}

.sidebar p {
    margin-top: 10px;
}

/* News Section */
.news {
    width: 50%;
    background-color: #e5e5e5;
    padding: 20px;
}

#news-slider {
    display: flex;
    overflow: hidden;
    position: relative;
}

.news-slide {
    flex: 1;
    padding: 40px;
    background-color: #ccc;
    text-align: center;
}

/* Resources */
.resources {
    width: 25%;
    background-color: #f9f9f9;
    padding: 20px;
}

/* Events Section */
.events {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 15px;
    margin: 40px 0;
}

.event-box {
    background-color: #6c757d;
    color: white;
    padding: 20px;
    text-align: center;
    font-size: 16px;
}

/* Mitigation Section */
.mitigation {
    background-color: #343a40;
    color: white;
    padding: 40px 0;
    text-align: center;
}

.mitigation p {
    font-size: 18px;
    margin-bottom: 10px;
}

/* Footer */
.footer {
    background-color: #222;
    color: white;
    padding: 20px 0;
    text-align: center;
}

.footer-content {
    display: flex;
    justify-content: space-between;
}
