# Email Setup Guide - EmailJS Integration

Your website now has email functionality! When someone submits the contact form, the message will be sent directly to your email. Follow these simple steps to set it up:

## Step 1: Create a Free EmailJS Account

1. Visit **https://www.emailjs.com/** and sign up for a free account
2. Verify your email
3. Log in to your EmailJS dashboard

## Step 2: Get Your Public Key

1. In the EmailJS dashboard, go to **Account** → **API Keys**
2. Copy your **Public Key** (looks like `abc123def456...`)
3. In your `script.js` file, find this line:
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY');
   ```
4. Replace `'YOUR_PUBLIC_KEY'` with your actual public key:
   ```javascript
   emailjs.init('abc123def456...');
   ```

## Step 3: Set Up Your Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.) or use EmailJS's built-in service
4. Follow the provider's instructions to connect your email
5. Copy the **Service ID** (looks like `service_abc123...`)

## Step 4: Create an Email Template

1. In EmailJS dashboard, go to **Email Templates**
2. Click **Create New Template**
3. Name it something like `contact_form`
4. Use this template content:

**Template Code:**
```
From: {{from_name}} ({{from_email}})

Message:
{{message}}
```

5. Set the **To Email** to: `{{to_email}}` (this will send to your email)
6. Set the **Subject** to: `New Message from {{from_name}}`
7. Copy the **Template ID** (looks like `template_abc123...`)

## Step 5: Update Your Script

In your `script.js` file, find these lines and replace them:

```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

Replace with your actual IDs:
```javascript
emailjs.send('service_abc123...', 'template_abc123...', templateParams)
```

Also update your email address in the same function:
```javascript
to_email: 'YOUR_EMAIL@example.com' // Replace with your actual email
```

Replace with your actual email:
```javascript
to_email: 'jilleanne@example.com'
```

## Step 6: Test It!

1. Open your website in a browser
2. Fill out the contact form with a test message
3. Click "Send"
4. Check your email inbox for the message
5. You should receive the email within a few seconds!

## That's It! 🎉

Your contact form will now send emails directly to your inbox whenever someone submits it.

---

### Need Help?

- **EmailJS Docs**: https://www.emailjs.com/docs/
- **Free Tier Limits**: 200 emails/month (plenty for a personal website!)
- **Questions?**: Check the EmailJS support page or documentation

### Security Note

The public key is safe to share (it's meant to be public). Keep your email credentials secure in the EmailJS dashboard.
