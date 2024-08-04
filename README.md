# Endpoint Scheduler Application

This project consists of two parts: an Angular frontend and a Flask backend. The frontend allows users to submit endpoints with a specified frequency and HTTP method, while the backend schedules and handles these requests.

## Application Demo

You can visit the live demo of the application here: [Endpoint Scheduler Client](https://endpoint-scheduler-client.vercel.app/)

## Frontend (Angular)

### Repository

[Frontend Repository](https://github.com/alexyocruz1/endpoint-scheduler-client)

### Prerequisites

- Node.js (https://nodejs.org/)
- Angular CLI (https://angular.io/cli)

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/alexyocruz1/endpoint-scheduler-client.git
   cd endpoint-scheduler-client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   ng serve
   ```

   The application will be available at `http://localhost:4200`.

### Deployment on Vercel

1. **Install Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**

   ```bash
   vercel login
   ```

3. **Deploy the application:**

   ```bash
   vercel
   ```

   Follow the prompts to complete the deployment.

## Backend (Flask)

### Repository

[Backend Repository](https://github.com/alexyocruz1/endpoint-scheduler-server)

### Prerequisites

- Python 3.x (https://www.python.org/)
- pip (https://pip.pypa.io/en/stable/)

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/alexyocruz1/endpoint-scheduler-server.git
   cd endpoint-scheduler-server
   ```

2. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application:**

   ```bash
   python app.py
   ```

   The application will be available at `http://localhost:5000`.

### Deployment on Render

1. **Create a new web service on Render:**

   - Go to [Render](https://render.com/)
   - Click on "New" and select "Web Service"
   - Connect your GitHub repository
   - Set the build and start commands:
     - Build Command: `pip install -r requirements.txt`
     - Start Command: `python app.py`

2. **Deploy the application:**

   Render will automatically build and deploy your application. You can monitor the deployment process in the Render dashboard.

## License

This project is licensed under the MIT License.