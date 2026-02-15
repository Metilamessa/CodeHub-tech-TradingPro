export function AdvancedAPISection() {
  return (
    <section className="py-24 bg-[#080a0c] relative overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <div className="sticky top-24">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2b3139] text-xs font-mono text-primary mb-6">
                <span className="material-symbols-outlined text-sm">code</span>
                <span>DEVELOPER API</span>
              </div>
              <h2 className="text-white text-4xl font-bold leading-tight mb-6">
                Built for Speed.
                <br />
                Designed for Scale.
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                Integrate with our high-performance WebSocket and REST APIs.
                Designed for HFT firms and algorithmic traders demanding
                microsecond latency.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div>
                  <p className="text-3xl font-bold text-white mb-1">&lt; 5ms</p>
                  <p className="text-gray-500 text-sm">Execution Latency</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white mb-1">100k+</p>
                  <p className="text-gray-500 text-sm">Req/s Throughput</p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-primary font-bold hover:text-white transition-colors">
                Read Documentation{" "}
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-xl lg:max-w-none">
            {/* Code Block Simulation */}
            <div className="rounded-xl bg-[#1e1e1e] border border-[#333] overflow-hidden shadow-2xl font-mono text-sm">
              <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-[#333]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-xs">websocket_client.py</div>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-gray-300">
                  <span className="text-purple-400">import</span> asyncio
                  {"\n"}
                  <span className="text-purple-400">import</span> json
                  {"\n"}
                  <span className="text-purple-400">from</span> tradepro{" "}
                  <span className="text-purple-400">import</span> Client
                  {"\n\n"}
                  <span className="text-blue-400">async def</span>{" "}
                  <span className="text-yellow-300">connect_stream</span>():
                  {"\n"}
                  {"  "}client = Client(api_key=
                  <span className="text-green-400">"tk_live_..."</span>)
                  {"\n\n"}
                  {"  "}
                  <span className="text-gray-500">
                    # Subscribe to institutional feed
                  </span>
                  {"\n"}
                  {"  "}
                  <span className="text-purple-400">await</span> client.subscribe([
                  {"\n"}
                  {"    "}
                  <span className="text-green-400">"institutional_l2"</span>,
                  {"\n"}
                  {"    "}
                  <span className="text-green-400">"executions_vip"</span>
                  {"\n"}
                  {"  "}])
                  {"\n\n"}
                  {"  "}
                  <span className="text-purple-400">async for</span> msg{" "}
                  <span className="text-purple-400">in</span> client.listen():
                  {"\n"}
                  {"    "}
                  <span className="text-purple-400">if</span> msg.latency &lt;{" "}
                  <span className="text-blue-400">5</span>:
                  {"\n"}
                  {"      "}process_hft_order(msg)
                  {"\n"}
                  {"\n"}
                  <span className="text-gray-500">
                    # Initializing low-latency connection...
                  </span>
                  {"\n"}
                  <span className="text-green-400">
                    &gt; Connection established (3ms)
                  </span>
                </pre>
              </div>
            </div>
            {/* Second Code Block (JSON Response) - Offset */}
            <div className="rounded-xl bg-[#1e1e1e] border border-[#333] overflow-hidden shadow-2xl font-mono text-sm mt-[-40px] ml-12 relative z-10 hidden sm:block">
              <div className="flex items-center px-4 py-2 bg-[#252526] border-b border-[#333]">
                <div className="text-gray-400 text-xs">response.json</div>
              </div>
              <div className="p-6">
                <pre className="text-blue-300">
                  {"{"}
                  {"\n"}
                  {"  "}
                  <span className="text-green-400">"status"</span>:{" "}
                  <span className="text-green-400">"filled"</span>,
                  {"\n"}
                  {"  "}
                  <span className="text-green-400">"price"</span>:{" "}
                  <span className="text-yellow-300">42150.00</span>,
                  {"\n"}
                  {"  "}
                  <span className="text-green-400">"size"</span>:{" "}
                  <span className="text-yellow-300">50.0</span>,
                  {"\n"}
                  {"  "}
                  <span className="text-green-400">"fee_tier"</span>:{" "}
                  <span className="text-green-400">"vip_0"</span>,
                  {"\n"}
                  {"  "}
                  <span className="text-green-400">"exec_id"</span>:{" "}
                  <span className="text-green-400">"88a9-f00d..."</span>
                  {"\n"}
                  {"}"}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
