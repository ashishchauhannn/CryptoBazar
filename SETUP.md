Setup Instructions
Clone the Repository:
git clone https://github.com/ashishchauhannn/CryptoBazar.git
cd CryptoBazar

Install Dependencies: Make sure you have Node.js and npm installed. Then, run:
npm install

Set Up Environment Variables: Create a .env file in the root directory and add your environment variables. For example:
REACT_APP_COINMARKETCAP_API_KEY=your_coinmarketcap_api_key

Run the Application Locally:
npm run dev
This will start the development server, and you can view the application at http://localhost:3000.
Deployment Instructions
Install Vercel CLI: If you haven’t already, install the Vercel CLI globally:
npm install -g vercel

Login to Vercel:
vercel login

Deploy the Application: In the root directory of your project, run:
vercel
Follow the prompts to configure your project. Vercel will automatically detect the Vite setup and configure the deployment accordingly.
Set Environment Variables on Vercel: Go to your project dashboard on Vercel, navigate to the “Settings” tab, and add your environment variables under the “Environment Variables” section.
Usage Instructions
Access the Application: Once deployed, you can access your application via the Vercel-provided URL (e.g., https://cryptobazar.vercel.app).
Homepage:
Cryptocurrency List: View the list of cryptocurrencies with their logos.
Current Value Display: Check the current traded value per coin.
Price Change Indicators: Observe the net rise/fall in prices over the last 24 hours and 7 days with appropriate coloring.
CryptoConverter Page:
Conversion Form: Use the form to convert from one cryptocurrency to another.
Real-Time Data: The application fetches real-time data from the CoinMarketCap API for accurate conversions.
Additional Tips
Monitoring: Use Vercel’s built-in analytics to monitor your application’s performance.
Updates: For any updates or changes, push your changes to the repository and Vercel will automatically redeploy the application.
Custom Domain: You can set up a custom domain in the Vercel dashboard if you prefer a personalized URL.
By following these instructions, you should be able to set up, deploy, and use your cryptocurrency tracking application seamlessly on Vercel. If you encounter any issues or have further questions, feel free to ask!
