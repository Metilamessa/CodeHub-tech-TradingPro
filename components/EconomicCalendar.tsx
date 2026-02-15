export function EconomicCalendar() {
  const events = [
    {
      time: "08:30",
      currency: "USD",
      currencyColor: "bg-red-600",
      impact: "high",
      event: "Core CPI (MoM)",
      actual: "—",
      forecast: "0.3%",
      previous: "0.4%",
    },
    {
      time: "10:45",
      currency: "EUR",
      currencyColor: "bg-blue-600",
      impact: "medium",
      event: "ECB Press Conference",
      actual: "—",
      forecast: "—",
      previous: "—",
    },
    {
      time: "13:15",
      currency: "JPY",
      currencyColor: "bg-white border border-gray-300",
      impact: "low",
      event: "BoJ Interest Rate Decision",
      actual: "0.10%",
      forecast: "0.10%",
      previous: "0.00%",
      actualColor: "text-positive font-bold",
    },
  ];

  const getImpactDots = (impact: string) => {
    if (impact === "high")
      return (
        <>
          <div className="w-2 h-2 bg-negative rounded-full"></div>
          <div className="w-2 h-2 bg-negative rounded-full"></div>
          <div className="w-2 h-2 bg-negative rounded-full"></div>
        </>
      );
    if (impact === "medium")
      return (
        <>
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <div className="w-2 h-2 bg-border-dark rounded-full"></div>
        </>
      );
    return (
      <>
        <div className="w-2 h-2 bg-positive rounded-full"></div>
        <div className="w-2 h-2 bg-border-dark rounded-full"></div>
        <div className="w-2 h-2 bg-border-dark rounded-full"></div>
      </>
    );
  };

  return (
    <section className="bg-card-dark border border-border-dark rounded-custom overflow-hidden">
      <div className="p-6 border-b border-border-dark flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">calendar_month</span>
          <h3 className="text-lg font-bold text-white">Global Economic Calendar</h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-text-secondary">
          <span>Timezone:</span>
          <span className="text-white font-bold">UTC-4 (New York)</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.1em] bg-[#1c2127]/50 border-b border-border-dark">
              <th className="px-6 py-4">Time</th>
              <th className="px-6 py-4">Currency</th>
              <th className="px-6 py-4">Impact</th>
              <th className="px-6 py-4">Event</th>
              <th className="px-6 py-4">Actual</th>
              <th className="px-6 py-4">Forecast</th>
              <th className="px-6 py-4">Previous</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-dark">
            {events.map((event, index) => (
              <tr
                key={index}
                className={`hover:bg-white/5 transition-colors text-sm ${
                  index === events.length - 1 ? "border-b border-border-dark" : ""
                }`}
              >
                <td className="px-6 py-4 text-text-secondary font-mono">{event.time}</td>
                <td className="px-6 py-4 font-bold text-white flex items-center gap-2">
                  <span className={`w-4 h-3 ${event.currencyColor} rounded-sm`}></span>
                  {event.currency}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-1">{getImpactDots(event.impact)}</div>
                </td>
                <td className="px-6 py-4 font-semibold text-white">{event.event}</td>
                <td className={`px-6 py-4 ${event.actualColor || "text-text-secondary"}`}>
                  {event.actual}
                </td>
                <td className="px-6 py-4 text-text-secondary">{event.forecast}</td>
                <td className="px-6 py-4 text-text-secondary">{event.previous}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-[#1c2127]/50 text-center">
        <button className="text-xs font-bold text-text-secondary hover:text-white transition-colors">
          Load More Economic Events
        </button>
      </div>
    </section>
  );
}



