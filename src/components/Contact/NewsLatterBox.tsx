// src/components/Contact/NewsLatterBox.tsx
"use client";
import React from "react";

const NewsLatterBox = () => {
  return (
    <div
      className="mb-12 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-[55px] lg:px-8 xl:p-[55px]"
      data-wow-delay=".15s"
    >
      <h2 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
        Subscribe to our Newsletter
      </h2>
      <p className="mb-8 text-base font-medium text-body-color">
        Get the latest updates straight to your inbox.
      </p>

      <form
        action="https://formsubmit.co/info%40lookininc.com"
        method="POST"
        className="flex flex-col"
      >
        {/* disable built-in captcha */}
        <input type="hidden" name="_captcha" value="false" />

        {/* Email input */}
        <input
          type="email"
          name="email"
          required
          placeholder="Your email address"
          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-4 py-2 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark"
        />

        {/* Subscribe button below */}
        <button
          type="submit"
          className="mt-4 w-full rounded-sm bg-primary px-6 py-2 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLatterBox;
