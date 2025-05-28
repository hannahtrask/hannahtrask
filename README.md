# Hannah Catherine Trask

[![License](https://img.shields.io/github/license/hannahtrask/hannahtrask.svg)](LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/hannahtrask/hannahtrask.svg)](https://github.com/hannahtrask/hannahtrask/commits/main)

> ✨ Built with [V0](https://v0.dev), [Next.js](https://nextjs.org), and [Tailwind CSS](https://tailwindcss.com)

---

## 🛠 Tech Stack

- **V0** – AI-powered UI generation
- **Next.js** – React framework with SSR and routing
- **Tailwind CSS** – Utility-first CSS for rapid UI development

---

## 📧 Contact Form Setup

The contact page includes a fully functional contact form that sends emails to `sunandsagebrushllc@gmail.com`.

### Setup Instructions

1. **Get a Resend API Key:**

   - Sign up at [resend.com](https://resend.com)
   - Get your API key from the dashboard
   - Add it to your `.env.local` file:
     ```
     RESEND_API_KEY=your_actual_api_key_here
     ```

2. **Domain Configuration (Optional):**
   - For production, configure a custom domain in Resend
   - Update the `from` field in `app/api/contact/route.ts`
   - For development, Resend's test domain works fine

### Features

- ✅ Form validation with Zod
- ✅ Animated success toast notification
- ✅ Email sent to business email
- ✅ Responsive design matching site theme
- ✅ Loading states and error handling
- ✅ Professional email template

---
