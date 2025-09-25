# Email Sender API

A simple email sending service built with Node.js, Express, and Nodemailer.

## Features

*   Send emails via a REST API.
*   Configuration via environment variables.
*   Basic error handling.

## Installation

1.  Clone the repository:
    
    git clone <repository_url>
    

2.  Install dependencies:
    
    npm install
    

3.  Configure environment variables:
    Create a `.env` file in the root directory with the following variables:
    
    EMAIL_HOST=<your_email_host>
    EMAIL_PORT=<your_email_port>
    EMAIL_USER=<your_email_user>
    EMAIL_PASS=<your_email_password>
    

4.  Run the server:
    
    npm start
    

## API Endpoints

*   `POST /api/send` - Send an email.  Request body should be JSON with `to`, `subject`, and `text` fields.

## Example Usage


curl -X POST -H "Content-Type: application/json" -d '{"to": "recipient@example.com", "subject": "Hello", "text": "This is a test email."}' http://localhost:3000/api/send
