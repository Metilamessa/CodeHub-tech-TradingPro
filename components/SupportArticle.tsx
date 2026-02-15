import Image from "next/image";

export function SupportArticle() {
  return (
    <article className="prose prose-invert max-w-none text-gray-300">
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
        How to reset your 2FA authentication
      </h1>
      <div className="flex items-center gap-4 mb-8 text-sm text-[#929aa5]">
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-lg">schedule</span>
          <span>Updated 2 days ago</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-lg">visibility</span>
          <span>12.5k views</span>
        </div>
      </div>
      <p className="text-base leading-relaxed mb-6">
        Two-factor authentication (2FA) is a critical security measure for your
        TradePro account. If you have lost access to your authentication device
        or need to switch to a new phone, follow this step-by-step guide to
        reset your 2FA.
      </p>
      <div className="bg-card-dark border-l-4 border-[#3b82f6] p-4 rounded-r-lg mb-8 shadow-sm">
        <div className="flex items-start gap-3">
          <span className="material-symbols-outlined text-[#3b82f6] mt-0.5">
            info
          </span>
          <div>
            <h4 className="font-bold text-white mb-1">Important Security Note</h4>
            <p className="text-sm text-[#929aa5] m-0">
              For security reasons, withdrawals will be disabled for 24 hours
              after resetting your 2FA authentication. This is to protect your
              funds in case of unauthorized access.
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        Step 1: Access Security Settings
      </h2>
      <p className="mb-4">
        Log in to your TradePro account using your password. If prompted for 2FA
        code and you cannot provide it, click on the "Security verification
        unavailable?" link below the input field.
      </p>
      <div className="my-6 border border-border-dark rounded-lg overflow-hidden">
        <Image
          alt="Login screen showing security verification link"
          className="w-full object-cover opacity-80 hover:opacity-100 transition-opacity"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHf9dzgpws4PEtGyMsQbw4RvcM4b-536YVZo-bYdOttjXslIqgzt8MkyoIIl76KzxQcFjxKd1Q1HIQLaQHDQvpvo4ETwr4K9m2mxqmWeq1zvsUV_aq8xHzbcNdPT3qulLwy6KnaSMJXqnNA8mVicngLkYGQPI250jdgwRAQxOTI0SQJGvd5bwnhvcz-vhHAvnoZe2XjVpDAFw48IQwFESead8hyb5RNLJ98TXbGmBp5e_T_6QDd_ouUKLvuSnexfR06sgv-eTIG8Q"
          width={800}
          height={400}
        />
        <div className="bg-card-dark p-2 text-xs text-[#929aa5] text-center border-t border-border-dark">
          Figure 1: Login screen verification options
        </div>
      </div>
      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        Step 2: Verify Identity
      </h2>
      <p className="mb-4">
        You will be required to answer security questions or verify your identity
        through email and SMS confirmation codes.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-300">
        <li>Check your registered email address for a 6-digit code.</li>
        <li>Verify the SMS code sent to your linked phone number.</li>
        <li>
          In some cases, facial recognition verification via our mobile app may
          be required.
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        Step 3: Reset Google Authenticator
      </h2>
      <p className="mb-4">
        Once your identity is verified, you will be directed to the 2FA setup
        page. Scan the new QR code with your Google Authenticator app (or
        similar app like Authy).
      </p>
      <div className="bg-card-dark border-l-4 border-primary p-4 rounded-r-lg mb-8 shadow-sm mt-6">
        <div className="flex items-start gap-3">
          <span className="material-symbols-outlined text-primary mt-0.5">
            vpn_key
          </span>
          <div>
            <h4 className="font-bold text-white mb-1">Save your Backup Key</h4>
            <p className="text-sm text-[#929aa5] m-0">
              Always write down the 16-digit backup key shown next to the QR
              code. Store it offline in a secure place. This key will allow you
              to restore your 2FA without contacting support.
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Common Issues</h2>
      <p className="mb-4">
        If you receive an "Invalid Code" error, please check the following:
      </p>
      <ol className="list-decimal pl-5 space-y-2 mb-6 text-gray-300">
        <li>Ensure the time on your mobile device is set to "Automatic".</li>
        <li>Try syncing the time in the Google Authenticator app settings.</li>
        <li>
          Make sure you are entering the code for "TradePro" and not another
          service.
        </li>
      </ol>
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-border-dark">
        <div className="bg-white dark:bg-card-dark rounded-xl p-6 text-center border border-gray-200 dark:border-border-dark">
          <h3 className="font-bold text-lg mb-4">Was this article helpful?</h3>
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 px-6 py-2 rounded-lg border border-gray-300 dark:border-border-dark hover:bg-green-500/10 hover:border-green-500 hover:text-green-500 transition-all group">
              <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
                thumb_up
              </span>
              <span>Yes</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-2 rounded-lg border border-gray-300 dark:border-border-dark hover:bg-red-500/10 hover:border-red-500 hover:text-red-500 transition-all group">
              <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
                thumb_down
              </span>
              <span>No</span>
            </button>
          </div>
          <p className="text-xs text-[#929aa5] mt-4">
            245 out of 268 found this helpful
          </p>
        </div>
      </div>
    </article>
  );
}



