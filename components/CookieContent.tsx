export function CookieContent() {
  return (
    <article className="flex-1 legal-content">
      <section id="what-are-cookies">
        <h2>1. What are Cookies</h2>
        <p>
          Cookies are small data files that are placed on your computer or
          mobile device when you visit a website. Cookies are widely used by
          website owners in order to make their websites work, or to work more
          efficiently, as well as to provide reporting information.
        </p>
        <p>
          Cookies set by the website owner (in this case, TradePro) are called
          "first-party cookies". Cookies set by parties other than the website
          owner are called "third-party cookies". Third-party cookies enable
          third-party features or functionality to be provided on or through
          the website.
        </p>
      </section>

      <div className="h-px bg-border-dark my-12"></div>

      <section id="how-we-use-them">
        <h2>2. How we use them</h2>
        <p>
          We use first-party and third-party cookies for several reasons. Some
          cookies are required for technical reasons in order for our platform
          to operate, and we refer to these as "essential" or "strictly
          necessary" cookies. Other cookies also enable us to track and target
          the interests of our users to enhance the experience on our platform.
        </p>
      </section>

      <div className="h-px bg-border-dark my-12"></div>

      <section id="essential-cookies">
        <h2>3. Essential Cookies</h2>
        <p>
          These cookies are strictly necessary to provide you with services
          available through our platform and to use some of its features, such
          as access to secure areas.
        </p>
        <div className="overflow-x-auto">
          <table className="cookie-table">
            <thead>
              <tr>
                <th>Cookie Name</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>__tp_session</td>
                <td>
                  Used to maintain your logged-in session and security tokens.
                </td>
                <td>Session</td>
              </tr>
              <tr>
                <td>__tp_csrf</td>
                <td>
                  Security cookie to prevent Cross-Site Request Forgery attacks.
                </td>
                <td>Session</td>
              </tr>
              <tr>
                <td>__tp_consent</td>
                <td>Stores your cookie consent preferences.</td>
                <td>1 Year</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="h-px bg-border-dark my-12"></div>

      <section id="performance-cookies">
        <h2>4. Performance Cookies</h2>
        <p>
          These cookies are used to enhance the performance and functionality
          of our platform but are non-essential to its use. However, without
          these cookies, certain functionality (like videos) may become
          unavailable.
        </p>
        <div className="overflow-x-auto">
          <table className="cookie-table">
            <thead>
              <tr>
                <th>Cookie Name</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_ga / _gid</td>
                <td>
                  Google Analytics cookies used to track site usage and metrics.
                </td>
                <td>2 Years</td>
              </tr>
              <tr>
                <td>__tp_perf_metrics</td>
                <td>
                  Internal telemetry for trading engine latency monitoring.
                </td>
                <td>30 Days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="h-px bg-border-dark my-12"></div>

      <section id="marketing-cookies">
        <h2>5. Marketing Cookies</h2>
        <p>
          These cookies are used to make advertising messages more relevant to
          you. They perform functions like preventing the same ad from
          continuously reappearing and ensuring that ads are properly displayed
          for advertisers.
        </p>
        <div className="overflow-x-auto">
          <table className="cookie-table">
            <thead>
              <tr>
                <th>Cookie Name</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_fbp</td>
                <td>
                  Facebook pixel used for conversion tracking and ad
                  retargeting.
                </td>
                <td>3 Months</td>
              </tr>
              <tr>
                <td>__tp_referral</td>
                <td>Tracks referral codes to credit partner commissions.</td>
                <td>90 Days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="h-px bg-border-dark my-12"></div>

      <section className="mb-24" id="managing-preferences">
        <h2>6. Managing Preferences</h2>
        <p>
          You have the right to decide whether to accept or reject cookies. You
          can exercise your cookie rights by setting your preferences in the
          Cookie Consent Manager. The Cookie Consent Manager allows you to
          select which categories of cookies you accept or reject.
        </p>
        <p>
          In addition to our built-in tools, most web browsers allow some
          control of most cookies through the browser settings. To find out
          more about cookies, including how to see what cookies have been set,
          visit www.aboutcookies.org or www.allaboutcookies.org.
        </p>
        <div className="mt-8 p-8 rounded-2xl bg-surface-dark border border-border-dark flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-[#eaecef] text-xl font-bold mb-2">
              Update your preferences now
            </h4>
            <p className="text-[#848e9c] text-sm mb-0">
              Changes take effect immediately and will sync across your
              devices.
            </p>
          </div>
          <button className="bg-primary hover:bg-[#e0ab0a] transition-colors text-background-dark px-8 py-3 rounded-xl text-sm font-bold">
            Manage Cookie Settings
          </button>
        </div>
      </section>
    </article>
  );
}



