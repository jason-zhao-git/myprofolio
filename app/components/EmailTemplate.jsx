// components/EmailTemplate.js
export default function EmailTemplate({ name, email, subject, message }) {
    return (
      <div className="font-sans text-gray-800">
        <div className="max-w-lg mx-auto p-4 border border-gray-300 rounded-lg">
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800">Hi, {name}</h2>
            <p className="mt-2 text-lg text-gray-700">
              Thank you so much for reaching out! I just wanted to let you know
              that I&apos;ve received your message, and I appreciate you taking the
              time to write to me. I aim to reply within 48 hours, so you&apos;ll hear
              from me soon.
            </p>
            <p className="mt-4 text-gray-700"><strong>New message submitted:</strong></p>
            <p className="mt-1 text-gray-700">{message}</p>
            <p className="mt-4 text-gray-700"><strong>From:</strong> {email}</p>
            <p className="mt-6 text-gray-700">
              Best,<br />
              Jingqiao Zhao
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              **Please note: This is an automated response. Your email has not been read
              yet, but it will be soon!**
            </p>
          </div>
        </div>
      </div>
    );
  }
  