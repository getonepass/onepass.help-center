## Contribution Guidelines for OnePass Knowledge Base

### 1. Overview

Welcome to the OnePass Knowledge Base (KB) repository! This guide ensures all articles maintain clarity, consistency, and quality. Please follow these guidelines when contributing new content or updating existing articles.

---

## 2. Article Types & Structure

### 2.1 Support Articles (FAQs & Troubleshooting)

- **Title Format:** Use a question or short phrase (e.g., *How do I reset my password?*).
- **Structure:**
  1. **Problem Statement:** Describe the issue clearly.
  2. **Solution Steps:** Numbered, easy-to-follow instructions.
  3. **Additional Notes:** Edge cases, related resources.
  4. **Metadata:** Every document should include YAML metadata (see below).
- **Example:**

  ```markdown
  ---
  title: How do I reset my password?
  sidebarTitle: Reset Password
  description: Steps to reset your password in OnePass.
  keywords: "Password, Reset, OnePass, Login Issue"
  category: "OPP, Bridge, Credentials"
  display: true
  asIndexPage: false
  theme:
    toc: true
    timestamp: true
    pagination: true
    breadcrumb: true
    sidebar: true
  ---

  # How do I reset my password?

  ## Problem
  I can’t log in because I forgot my password.

  ## Solution
  1. Go to the [Login Page](https://onepass.example.com).
  2. Click **Forgot Password**.
  3. Enter your registered email and follow the instructions.
  4. Check your inbox for a reset link.
  ```

---

### 2.2 Guides (How-to & Tutorials)

- **Title Format:** "How to [Action]" (e.g., *How to Register Your Startup in OnePass*).
- **Structure:**
  1. **Introduction:** Explain the goal of the guide.
  2. **Prerequisites:** List any required setup or conditions.
  3. **Step-by-Step Instructions:** Clear, numbered steps with screenshots if needed.
  4. **Troubleshooting & Next Steps:** Common issues, links to other articles.
  5. **Metadata:** Every document should include YAML metadata (see below).
- **Example:**

  ```markdown
  ---
  title: How to Register Your Startup in OnePass
  sidebarTitle: Register Startup
  description: A step-by-step guide to registering your startup in OnePass.
  keywords: "Startup, Registration, OnePass, Funding, Investors"
  category: "OPP, Bridge, Credentials"
  display: true
  asIndexPage: false
  theme:
    toc: true
    timestamp: true
    pagination: true
    breadcrumb: true
    sidebar: true
  ---

  # How to Register Your Startup in OnePass

  ## Introduction
  OnePass helps startups connect with investors. This guide walks you through the registration process.

  ## Prerequisites
  - A verified business email.
  - Basic company information.

  ## Steps
  1. Visit [OnePass Registration](https://onepass.example.com).
  2. Click **Sign Up** and fill in the details.
  3. Verify your email.
  4. Complete the startup profile setup.

  ## Troubleshooting
  - Didn’t receive the email? Check spam or resend it from the login page.
  ```

---

### 2.3 Technical Documentation

- **Title Format:** Use a direct, clear title (e.g., *OnePass API Authentication*).
- **Structure:**
  1. **Overview:** High-level explanation of the feature.
  2. **Endpoints (if applicable):** List API methods, parameters, and responses.
  3. **Examples:** Code snippets in JSON, cURL, etc.
  4. **Common Errors & Fixes:** Handling issues.
  5. **Metadata:** Every document should include YAML metadata (see below).
- **Example:**

  ```markdown
  
  ---
  title: OnePass API Authentication
  sidebarTitle: API Authentication
  description: Learn how to authenticate with OnePass API.
  keywords: "API, Authentication, Token, OnePass"
  category: "OPP, Bridge, Credentials"
  display: true
  asIndexPage: false
  theme:
    toc: true
    timestamp: true
    pagination: true
    breadcrumb: true
    sidebar: true
  ---

  # OnePass API Authentication

  ## Overview
  This API allows secure authentication for OnePass services.

  ## Endpoint

  POST /api/auth/login

  - **Headers:** `Content-Type: application/json`
  ...

  ## Common Errors

  - `401 Unauthorized`: Invalid credentials. Ensure correct email and password.

  ```

---

## 3. Formatting & Styling

- **Supported File Formats:** `.md` and `.mdx`
- **Headings:** Use `#` for main titles, `##` for sections, and `###` for subsections.
- **Lists:** Use `-` for bullet points, `1.` for ordered steps.
- **Bold & Italics:**
  - **Bold:** Important actions, UI elements (`Click **Submit**`).
  - *Italics:* Emphasis, notes, or alternative terms (`Also known as *Multi-Factor Authentication*`).
- **Code Blocks:** Use triple backticks (` ``` `) for code snippets.
- **Links:** Use `[Title](URL)` format (e.g., `[OnePass Homepage](https://onepass.example.com)`).
- **Images:**
  - Store assets in `/assets/images/`.
  - Reference with `![Alt text](/assets/images/example.png)`.
- **File Naming:** Use lowercase and hyphens (`how-to-reset-password.md`).

---

## 4. Submission & Review Process

1. **Fork the Repository** and create a new branch.
2. Follow the formatting rules above.
3. Submit a **pull request (PR)** with a clear description.
4. A reviewer will approve or request changes.

For questions, reach out via [support@example.com](mailto:support@example.com).

🚀 **Thank you for contributing to OnePass Knowledge Base!**
