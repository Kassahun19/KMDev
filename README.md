<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1GiRDO4w87z3oYqkwYIa3tUnMCvp7pXMO

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Vercel

This app can be deployed for free on Vercel.

1. Go to [Vercel](https://vercel.com) and sign in with your GitHub account.
2. Click "New Project" and import the `KMDev` repository from your GitHub account.
3. In the project settings, add the `GEMINI_API_KEY` environment variable with your Gemini API key.
4. Vercel will automatically build and deploy the app using the `npm run build` command.
5. Your app will be live at the provided Vercel URL.
