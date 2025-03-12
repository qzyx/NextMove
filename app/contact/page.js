"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Mail,
  MessageSquare,
  HelpCircle,
  Send,
  ArrowLeft,
  AlertCircle,
  Copy,
  Check,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = "contactnextmovesystem@gmail.com";

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    // Reset copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <main className="container mx-auto mt-10 px-4 py-8 md:py-12 max-w-5xl text-gray-200">
      {/* Hero section - improved for mobile */}
      <section className="mb-10 md:mb-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">
          Have questions or feedback? We're here to help you with any inquiries
          about NextMove.
        </p>
      </section>

      {/* Main contact section - improved mobile layout */}
      <section className="mb-10 md:mb-16 bg-gray-900/60 p-5 md:p-8 rounded-xl border border-gray-700 shadow-lg">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-2">
              <MessageSquare className="text-blue-400" />
              <span>Get In Touch</span>
            </h2>

            <p className="mb-6 md:mb-8 text-gray-300 text-sm md:text-base">
              We appreciate your feedback, questions, and suggestions about
              NextMove. Our team is dedicated to providing you with the best
              gaming experience possible.
            </p>

            {/* Improved Email Section - better mobile layout */}
            <div className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 p-4 md:p-6 rounded-lg border border-blue-700/30 mb-5 md:mb-6 shadow-inner">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2">
                <Mail className="text-blue-400" />
                <span>Email Us</span>
              </h3>

              <div className="mb-3 md:mb-4">
                <p className="text-gray-300 text-sm md:text-base mb-2">
                  For any inquiries, please contact us at:
                </p>
                <div className="flex flex-col gap-3">
                  {/* Email display - full width on mobile */}
                  <div className="bg-gray-900/80 py-2.5 md:py-3 px-3 md:px-4 rounded-lg border border-blue-700/20 w-full">
                    <span className="font-mono text-blue-300 text-sm md:text-lg select-all break-all">
                      {email}
                    </span>
                  </div>

                  {/* Action buttons - improved for mobile */}
                  <div className="flex gap-2 w-full">
                    <button
                      onClick={copyEmailToClipboard}
                      className="flex items-center justify-center gap-1.5 bg-gray-800 hover:bg-gray-700 py-2 md:py-2.5 px-3 md:px-4 rounded-lg transition-colors flex-1 border border-gray-700 text-sm md:text-base"
                      aria-label="Copy email address"
                    >
                      {copied ? (
                        <>
                          <Check size={16} className="text-green-400" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={16} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${email}`}
                      className="flex items-center justify-center gap-1.5 bg-blue-700 hover:bg-blue-800 py-2 md:py-2.5 px-3 md:px-4 rounded-lg transition-colors flex-1 border border-blue-600 text-sm md:text-base"
                    >
                      <Send size={16} />
                      <span>Email Us</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Toast notification */}
              <div
                className={`transition-all duration-300 ${
                  copied
                    ? "opacity-100 max-h-20"
                    : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                {copied && (
                  <div className="bg-green-900/40 border border-green-700/70 text-green-300 text-xs md:text-sm py-1.5 md:py-2 px-3 md:px-4 rounded-lg flex items-center gap-2 shadow-lg">
                    <Check size={14} className="text-green-400 flex-shrink-0" />
                    <span>Email address copied to clipboard!</span>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gray-800/60 p-4 md:p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2">
                <HelpCircle className="text-blue-400" />
                <span>Response Time</span>
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                We aim to respond to all inquiries within 24-48 hours during
                business days. Complex technical issues might require additional
                time for investigation.
              </p>
            </div>
          </div>

          {/* Common Inquiries Section - improved mobile layout */}
          <div className="flex-1 mt-6 md:mt-0">
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-4 md:p-6 rounded-xl border border-gray-700 shadow-inner h-full">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-center text-gray-100">
                Common Inquiries
              </h3>

              <div className="space-y-4 md:space-y-6">
                <div className="bg-gray-800/60 p-3 md:p-4 rounded-lg border border-gray-700">
                  <h4 className="font-medium mb-1 md:mb-2 text-blue-300 text-sm md:text-base">
                    Account Issues
                  </h4>
                  <p className="text-xs md:text-sm text-gray-300">
                    For problems with login, account recovery, or profile
                    settings.
                  </p>
                </div>

                <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-medium mb-2 text-blue-300">
                    Game Support
                  </h4>
                  <p className="text-sm text-gray-300">
                    For technical issues during gameplay or matchmaking
                    problems.
                  </p>
                </div>

                <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-medium mb-2 text-blue-300">Feedback</h4>
                  <p className="text-sm text-gray-300">
                    Share your suggestions or ideas for improving NextMove.
                  </p>
                </div>

                <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-medium mb-2 text-blue-300">
                    Report Issues
                  </h4>
                  <p className="text-sm text-gray-300">
                    Report bugs or inappropriate behavior from other players.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes Section - improved for mobile */}
      <section className="mb-10 md:mb-16">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
          <AlertCircle className="text-blue-400" />
          <span>Important Notes</span>
        </h2>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-gray-900/60 p-4 md:p-6 rounded-xl border border-gray-700 shadow-lg">
            <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-base text-gray-300">
              <li>
                Please include your username and any relevant details when
                reporting issues.
              </li>
              <li>
                Screenshots or error messages help us diagnose problems more
                quickly.
              </li>
              <li>
                We take all feedback seriously and use it to improve the
                NextMove experience.
              </li>
              <li>
                For urgent matters, please indicate "URGENT" in your email
                subject line.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Return to home - mobile optimized */}
      <section className="text-center bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-5 md:p-8 rounded-xl border border-blue-800/50 shadow-lg">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
          Thank you for reaching out!
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-5 md:mb-6">
          We value your input and look forward to helping you with any questions
          or concerns.
        </p>
        <div className="flex justify-center">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            <span>Return to Home</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
