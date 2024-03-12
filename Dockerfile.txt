# Use an official Python runtime as a base image
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /app

# Copy the dependencies file into the container at /app
COPY requirements.txt .

# Install Flask and Flask-CORS
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Flask application code into the container at /app
COPY . .

# Make port 5000 available to the world outside this container
EXPOSE 80

# Define the command to run your Flask app
CMD ["python", "app.py"]
