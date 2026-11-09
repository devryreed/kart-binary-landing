'use client'

import React, { useState, useEffect } from 'react'
import {
  TrendingUp,
  Shield,
  Zap,
  ArrowRight,
  BarChart3,
  Wallet,
  Clock,
  CheckCircle2,
  Lock,
  Smartphone,
  ChevronRight,
  Globe,
  Award,
  Users,
  Star,
  Quote,
  Check,
  ShieldCheck,
  DollarSign,
  MessageSquare
} from 'lucide-react'

export default function KartBinaryLandingPage() {
  const TRADING_APP_URL = process.env.NEXT_PUBLIC_TRADING_APP_URL || 'http://localhost:5173'

  // Simulated tick generator for hero widget price curve preview
  const [ticks, setTicks] = useState([7420.50, 7421.20, 7419.80, 7422.40, 7423.90, 7422.10, 7425.80, 7424.30, 7427.10])
  const [currentPrice, setCurrentPrice] = useState(7427.10)
  const [priceChange, setPriceChange] = useState('+1.65%')
  const [activeTab, setActiveTab] = useState('rise_fall')

  useEffect(() => {
    const interval = setInterval(() => {
      setTicks(prev => {
        const last = prev[prev.length - 1]
        const delta = (Math.random() - 0.47) * 1.6
        const nextPrice = Number((last + delta).toFixed(2))
        setCurrentPrice(nextPrice)
        const updated = [...prev.slice(1), nextPrice]
        return updated
      })
    }, 1100)

    return () => clearInterval(interval)
  }, [])

  // Generate smooth SVG curve path coordinates from ticks
  const chartWidth = 360
  const chartHeight = 140
  const minPrice = Math.min(...ticks) - 1.5
  const maxPrice = Math.max(...ticks) + 1.5

  const points = ticks.map((price, i) => {
    const x = (i / (ticks.length - 1)) * chartWidth
    const y = chartHeight - ((price - minPrice) / (maxPrice - minPrice)) * (chartHeight - 30) - 15
    return { x, y }
  })

  // Create smooth bezier curve SVG path
  const linePathD = points.reduce((acc, point, i, a) => {
    if (i === 0) return `M ${point.x},${point.y}`
    const prev = a[i - 1]
    const cx = (prev.x + point.x) / 2
    return `${acc} C ${cx},${prev.y} ${cx},${point.y} ${point.x},${point.y}`
  }, '')

  const areaPathD = `${linePathD} L ${chartWidth},${chartHeight} L 0,${chartHeight} Z`
  const lastPoint = points[points.length - 1] || { x: chartWidth, y: chartHeight / 2 }

  return (
    <div className="min-h-screen bg-[#080405] text-slate-100 font-sans selection:bg-rose-500 selection:text-white">
      {/* Background Accent Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#080405]/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-red-400 flex items-center justify-center shadow-lg shadow-rose-500/20">
              <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                Kart<span className="text-rose-400">Binary</span>
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-rose-400 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-rose-400 transition-colors">How It Works</a>
            <a href="#reviews" className="hover:text-rose-400 transition-colors">Trader Reviews</a>
            <a href="#funding" className="hover:text-rose-400 transition-colors">Instant Funding</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`${TRADING_APP_URL}?mode=login`}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all border border-transparent hover:border-slate-700"
            >
              Sign In
            </a>
            <a
              href={`${TRADING_APP_URL}?mode=signup`}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-rose-400 to-red-400 hover:from-emerald-300 hover:to-teal-300 transition-all shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-24 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Text & CTAs */}
          <div className="md:col-span-7 space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold">
              <Zap className="w-3.5 h-3.5 animate-pulse" />
              <span>High-Velocity Formula 1 Binary Engine</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">High-Velocity Volatility Trading Engineered For Decisive Moves</h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Uncompromising execution speed, instant tick resolution, and zero-latency mobile contract deployment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
              <a
                href={`${TRADING_APP_URL}?mode=signup`}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-rose-400 via-red-400 to-red-400 hover:from-emerald-300 hover:to-cyan-300 transition-all shadow-xl shadow-rose-500/30 hover:shadow-rose-500/50 hover:-translate-y-0.5 flex items-center justify-center gap-3"
              >
                <span>Start Trading</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={`${TRADING_APP_URL}?mode=login`}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-rose-500/50 transition-all backdrop-blur-md flex items-center justify-center gap-2"
              >
                <BarChart3 className="w-5 h-5 text-rose-400" />
                <span>Try $1000 Demo</span>
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">$1000</p>
                <p className="text-xs text-slate-400 mt-1 font-medium">Free Demo Balance</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-rose-400">Up to 95%</p>
                <p className="text-xs text-slate-400 mt-1 font-medium">Payout Per Contract</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400">&lt; 100ms</p>
                <p className="text-xs text-slate-400 mt-1 font-medium">Execution Speed</p>
              </div>
            </div>
          </div>

          {/* Right Column: Simulated Trading Terminal Widget with Smooth Curved Chart */}
          <div className="md:col-span-5 w-full max-w-md mx-auto md:max-w-none">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl p-6 backdrop-blur-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500 animate-ping" />
                  <div>
                    <h3 className="font-bold text-sm text-white">Volatility 100 Index</h3>
                    <p className="text-xs text-slate-400">Tick Stream: Real-Time Smooth Curve</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-mono font-bold text-rose-400">{currentPrice.toFixed(2)}</p>
                  <p className="text-xs text-rose-400 font-medium">{priceChange}</p>
                </div>
              </div>

              {/* Smooth Curved SVG Chart Container */}
              <div className="h-44 bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 relative overflow-hidden flex items-center justify-center">
                <svg
                  viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#fb7185" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#fb7185" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid lines */}
                  <line x1="0" y1="35" x2={chartWidth} y2="35" stroke="#1e293b" strokeDasharray="3 3" />
                  <line x1="0" y1="70" x2={chartWidth} y2="70" stroke="#1e293b" strokeDasharray="3 3" />
                  <line x1="0" y1="105" x2={chartWidth} y2="105" stroke="#1e293b" strokeDasharray="3 3" />

                  {/* Gradient Area Fill */}
                  <path d={areaPathD} fill="url(#chartGradient)" />

                  {/* Smooth Curved Line Path */}
                  <path
                    d={linePathD}
                    fill="none"
                    stroke="#fb7185"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Tick Points */}
                  {points.map((pt, idx) => (
                    <circle
                      key={idx}
                      cx={pt.x}
                      cy={pt.y}
                      r={idx === points.length - 1 ? 4 : 2}
                      fill={idx === points.length - 1 ? '#10b981' : '#34d399'}
                    />
                  ))}

                  {/* Pulsing Live Marker on Latest Tick */}
                  <circle cx={lastPoint.x} cy={lastPoint.y} r="8" fill="#fb7185" fillOpacity="0.3" className="animate-ping" />
                  <circle cx={lastPoint.x} cy={lastPoint.y} r="5" fill="#fb7185" />
                </svg>

                <div className="absolute top-2 left-3 text-[10px] font-mono text-rose-400/80 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
                  LIVE STREAM
                </div>
              </div>

              {/* Contract Type Buttons */}
              <div className="space-y-3">
                <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab('rise_fall')}
                    className={`flex-1 py-1.5 rounded-lg transition-all ${activeTab === 'rise_fall' ? 'bg-rose-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                  >
                    Rise / Fall
                  </button>
                  <button
                    onClick={() => setActiveTab('digits')}
                    className={`flex-1 py-1.5 rounded-lg transition-all ${activeTab === 'digits' ? 'bg-rose-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                  >
                    Even / Odd Digits
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <a
                    href={`${TRADING_APP_URL}?mode=signup`}
                    className="py-3 px-4 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-400 font-bold text-center text-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span>HIGHER (Higher Tick)</span>
                  </a>
                  <a
                    href={`${TRADING_APP_URL}?mode=signup`}
                    className="py-3 px-4 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-400 font-bold text-center text-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <TrendingUp className="w-4 h-4 rotate-180" />
                    <span>LOWER (Lower Tick)</span>
                  </a>
                </div>
              </div>

              <div className="text-center pt-1 border-t border-slate-800/80">
                <a
                  href={`${TRADING_APP_URL}?mode=signup`}
                  className="text-xs text-slate-400 hover:text-rose-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Open terminal to start real-time prediction</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

            {/* Stats Counter Bar */}
      <section className="relative z-10 -mt-10 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="flex flex-col items-center justify-center space-y-2">
              <Users className="w-6 h-6 text-rose-400" />
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">1M+</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Active traders</div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2">
              <BarChart3 className="w-6 h-6 text-rose-400" />
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">$2B+</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Total traded</div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2">
              <Globe className="w-6 h-6 text-rose-400" />
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">150+</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Countries</div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2">
              <Star className="w-6 h-6 text-rose-400 fill-rose-400" />
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">4.9/5</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">User rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Grid Section */}
      <section id="features" className="py-20 bg-slate-950/70 border-y border-slate-800/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400">
              PLATFORM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Built for serious traders
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Blazing Fast */}
            <div className="bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-rose-500/40 transition-all space-y-4 group">
              <div className="w-11 h-11 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Blazing Fast</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Trades settle in under 1 second. Zero lag, instant results.
              </p>
            </div>

            {/* Card 2: Fully Secured */}
            <div className="bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-rose-500/40 transition-all space-y-4 group">
              <div className="w-11 h-11 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Fully Secured</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                256-bit SSL encryption and segregated client accounts.
              </p>
            </div>

            {/* Card 3: 100+ Markets */}
            <div className="bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-rose-500/40 transition-all space-y-4 group">
              <div className="w-11 h-11 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">100+ Markets</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Predict forex, stocks, indices and commodities — all in one place.
              </p>
            </div>

            {/* Card 4: No Hidden Fees */}
            <div id="funding" className="bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-rose-500/40 transition-all space-y-4 group">
              <div className="w-11 h-11 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">No Hidden Fees</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Zero fees on deposits and withdrawals. What you see is what you get.
              </p>
            </div>

            {/* Card 5: Play Anywhere */}
            <div className="bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-rose-500/40 transition-all space-y-4 group">
              <div className="w-11 h-11 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Play Anywhere</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Responsive web app works perfectly on any device, any screen.
              </p>
            </div>

            {/* Card 6: 24/7 Support */}
            <div className="bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-rose-500/40 transition-all space-y-4 group">
              <div className="w-11 h-11 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">24/7 Support</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Real human support around the clock via live chat and email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews & Testimonials Section */}
      <section id="reviews" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>4.9 / 5.0 Average Rating</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Trusted By 1M+ Active Traders</h2>
          <p className="text-slate-400 text-base">
            See how traders leverage OpticBinary's instant contract execution and M-Pesa local payouts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Review Card 1 */}
          <div className="bg-slate-900/80 p-8 rounded-2xl border border-slate-800 space-y-5 hover:border-slate-700 transition-all relative">
            <Quote className="w-8 h-8 text-rose-500/20 absolute top-6 right-6" />
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              "The speed of digit predictions is unmatched. I can execute 10-tick Volatility contracts with zero lag, and my M-Pesa withdrawals hit my phone in under 2 minutes."
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-cyan-500 flex items-center justify-center font-bold text-slate-950">
                De
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Dennis M.</span>
                  <Check className="w-3.5 h-3.5 text-rose-400" />
                </h4>
                <p className="text-xs text-slate-400">Day Trader • Johannesburg</p>
              </div>
            </div>
          </div>

          {/* Review Card 2 */}
          <div className="bg-slate-900/80 p-8 rounded-2xl border border-slate-800 space-y-5 hover:border-slate-700 transition-all relative">
            <Quote className="w-8 h-8 text-rose-500/20 absolute top-6 right-6" />
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              "The $1000 demo account allowed me to test digit frequency strategies safely before going real. The UI is clean, responsive, and extremely intuitive."
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center font-bold text-slate-950">
                Gr
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Grace K.</span>
                  <Check className="w-3.5 h-3.5 text-rose-400" />
                </h4>
                <p className="text-xs text-slate-400">Forex & Binary Trader • Nairobi</p>
              </div>
            </div>
          </div>

          {/* Review Card 3 */}
          <div className="bg-slate-900/80 p-8 rounded-2xl border border-slate-800 space-y-5 hover:border-slate-700 transition-all relative">
            <Quote className="w-8 h-8 text-rose-500/20 absolute top-6 right-6" />
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              "Finally a platform with accurate backend accounting and real synthetic volatility indices. Deposit and payout tracking inside the dashboard is crystal clear."
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center font-bold text-slate-950">
                Ta
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Tariq A.</span>
                  <Check className="w-3.5 h-3.5 text-rose-400" />
                </h4>
                <p className="text-xs text-slate-400">Derivatives Trader • Doha</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-800/60">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">How To Trade On Kart Binary</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 relative space-y-4">
            <span className="text-4xl font-black text-rose-500/40">01</span>
            <h3 className="text-lg font-bold text-white">Create Account & Select Balance</h3>
            <p className="text-slate-400 text-sm">
              Sign up in seconds and switch seamlessly between your $1000 practice demo and real deposit wallet.
            </p>
          </div>

          <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 relative space-y-4">
            <span className="text-4xl font-black text-rose-500/40">02</span>
            <h3 className="text-lg font-bold text-white">Select Index & Contract Type</h3>
            <p className="text-slate-400 text-sm">
              Choose from Volatility 10, 25, 75, or 100 indices and select Higher/Lower or Digit Matches prediction.
            </p>
          </div>

          <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 relative space-y-4">
            <span className="text-4xl font-black text-rose-500/40">03</span>
            <h3 className="text-lg font-bold text-white">Instant Payout Settlement</h3>
            <p className="text-slate-400 text-sm">
              When your contract expires, winning payouts are immediately credited to your account balance.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-teal-950/80 border border-rose-500/30 p-10 md:p-16 text-center space-y-8 overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Ready to Start Trading Binary Options?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Join over 1M+ traders predicting volatility markets with sub-second execution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${TRADING_APP_URL}?mode=signup`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-rose-400 to-red-400 hover:from-emerald-300 hover:to-teal-300 transition-all shadow-xl shadow-rose-500/30 hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Create Free Account</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href={`${TRADING_APP_URL}?mode=login`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <span>Sign In to Terminal</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#03050c] py-12 text-slate-400 text-xs relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800/60 pb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold text-white">Kart Binary</span>
            </div>

            <p className="text-slate-500 text-center md:text-right">
              © {new Date().getFullYear()} Kart Binary Trading Platform. All rights reserved.
            </p>
          </div>

          <div className="text-slate-500 leading-relaxed space-y-2">
            {/* <p>
              <strong className="text-slate-400">Risk Warning:</strong> Trading binary options and synthetic contracts involves significant risk of loss and is not suitable for all investors. Past performance is not indicative of future results. Please ensure you fully understand the risks involved before trading with real funds.
            </p> */}
          </div>
        </div>
      </footer>
    </div>
  )
}
