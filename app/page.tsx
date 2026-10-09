import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { ProductCard } from "@/components/product/product-card";
import { ArrowRight, Flame, Sparkles, Dumbbell, Zap, Footprints, Heart } from "lucide-react";

export default function HomePage() {
  const newInProducts = MOCK_PRODUCTS.filter((p) => p.isNew);

  return (
    <div className="flex flex-col gap-16 md:gap-24 overflow-x-hidden bg-white text-black">
      {/* =========================================================================
          SECTION 1: OFFICIAL GYMSHARK EU HERO CAMPAIGN BANNER
          ========================================================================= */}
      <section className="relative w-full h-[85vh] min-h-[620px] max-h-[920px] flex items-end pb-14 px-4 sm:px-8 md:px-16 overflow-hidden bg-black">
        {/* Exact Gymshark Desktop Campaign Photo */}
        <Image
          src="https://images.ctfassets.net/wl6q2in9o7k3/7fCGqmdBDAps9GLKh4WFiJ/780e35c48ec7a04c60632d06eca77eee/headless_desktop_banner_27423136.jpeg"
          alt="Gymshark Adapt Solid Lifting Campaign"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Soft bottom vignette for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        <div className="relative max-w-3xl z-10 flex flex-col gap-4 text-white">
          <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase bg-white/20 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full w-fit border border-white/20">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>FEATURED DROP · ADAPT SOLID</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-white">
            A NEW ERA OF <br />
            LIFTING SETS.
          </h1>

          <p className="text-sm sm:text-base text-neutral-200 max-w-xl font-medium leading-relaxed">
            Engineered for heavy barbell sessions and relentless conditioning. Featuring all-new
            textured compression knit and moisture-wicking endurance.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/collections/women"
              className="bg-white text-black hover:bg-neutral-200 text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-lg hover:scale-102"
            >
              Shop Adapt Solid
            </Link>
            <Link
              href="/collections/all"
              className="bg-black/40 hover:bg-black/60 border border-white/40 text-white text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full backdrop-blur-md transition-all hover:border-white"
            >
              Explore All Drops
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: HORIZONTAL PRODUCT SCROLL CAROUSEL ("NEW IN")
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-6">
        <div className="flex items-end justify-between border-b border-neutral-200 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-neutral-500">
              <Sparkles className="w-3.5 h-3.5 text-gymshark-teal" />
              <span>JUST DROPPED IN THE EU</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black mt-1">
              NEW IN
            </h2>
          </div>

          <Link
            href="/collections/all"
            className="text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-black flex items-center gap-1 group"
          >
            <span>View All ({MOCK_PRODUCTS.length})</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Scrollable Container with Authentic Gymshark Products */}
        <div className="flex gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-neutral-300">
          {newInProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] snap-start shrink-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SECONDARY FEATURE CAMPAIGN SPLIT ("HYBRID TRAINING")
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F7F7F7] rounded-3xl border border-neutral-200 overflow-hidden">
          {/* Left Campaign Image (7 cols) */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[500px] w-full bg-neutral-200">
            <Image
              src="https://images.ctfassets.net/wl6q2in9o7k3/7fCGqmdBDAps9GLKh4WFiJ/780e35c48ec7a04c60632d06eca77eee/headless_desktop_banner_27423136.jpeg"
              alt="Gymshark Conditioning Club Athlete"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-2 text-white">
              <span className="text-[11px] font-black uppercase tracking-widest text-neutral-300">
                FOR THE HYBRIDS
              </span>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
                CONDITIONING CLUB
              </h3>
            </div>
          </div>

          {/* Right Editorial & CTAs (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
              The Lifter Who Runs
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black leading-tight">
              BUILT FOR DUAL DISCIPLINE ENDURANCE.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Conditioning is not just lifting or running—it is both. Designed with heavyweight
              vintage washed cotton, reinforced flatlock seams, and breathable mobility for functional
              training sessions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/collections/men"
                className="bg-black text-white hover:bg-neutral-800 text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-full text-center transition-colors shadow-md"
              >
                Shop Conditioning Club
              </Link>
              <Link
                href="/collections/all"
                className="bg-white text-black border border-neutral-300 hover:border-black text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-full text-center transition-colors"
              >
                Explore Hybrid
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: TRENDING FILTER BUBBLES ("POPULAR RIGHT NOW")
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
            TRENDING SEARCHES
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
            POPULAR RIGHT NOW
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {[
            { label: "Tracksuits", link: "/collections/men" },
            { label: "Flared Leggings", link: "/collections/women" },
            { label: "New in: CottonMove™", link: "/collections/men" },
            { label: "Seamless Sets", link: "/collections/women" },
            { label: "Power Lifting", link: "/collections/all" },
            { label: "Oversized Hoodies", link: "/collections/men" },
            { label: "Sports Bras", link: "/collections/women" },
            { label: "Gym Accessories", link: "/collections/accessories" },
          ].map((tag) => (
            <Link
              key={tag.label}
              href={tag.link}
              className="bg-[#F5F5F5] border border-neutral-200 hover:border-black hover:bg-black hover:text-white text-neutral-800 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-2xs"
            >
              {tag.label}
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: SPORT DISCIPLINES 4-CARD GRID ("HOW DO YOU TRAIN?")
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-8">
        <div className="text-center sm:text-left flex flex-col gap-1">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
            SHOP BY DISCIPLINE
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black">
            HOW DO YOU TRAIN?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "LIFTING",
              description: "Barbell sets, squat racks, and heavyweight compression.",
              image: "https://images.ctfassets.net/wl6q2in9o7k3/4RUaAcIeFeVWGnja4zDLzB/71e598ecaa7b3ad572866858a7ea389d/homepage_cards_27421271.jpeg",
              link: "/collections/all",
              icon: Dumbbell,
            },
            {
              title: "HIIT",
              description: "High-intensity agility and fast-drying breathability.",
              image: "https://images.ctfassets.net/wl6q2in9o7k3/2jNzMwb3nkQYuZUVXAy1JI/46926cff37b6fcbb6317090a268d8bdd/homepage_cards_27421272.jpeg",
              link: "/collections/all",
              icon: Zap,
            },
            {
              title: "RUNNING",
              description: "Distance road shorts, anti-chafe tops, and lightweight gear.",
              image: "https://images.ctfassets.net/wl6q2in9o7k3/3VcAPRjpNhvJzeGqB2Y6o0/48532edd80710ef5a144ce29798327a8/homepage_cards_27421273.jpeg",
              link: "/collections/all",
              icon: Footprints,
            },
            {
              title: "PILATES",
              description: "Low-impact core control and ultra-soft 4-way stretch.",
              image: "https://images.ctfassets.net/wl6q2in9o7k3/6RyLLHSaExpi28z2oseOKP/55d29b5d6d7d35a6196104de2ca48799/homepage_cards_27421274.jpeg",
              link: "/collections/women",
              icon: Heart,
            },
          ].map((activity) => (
            <Link
              key={activity.title}
              href={activity.link}
              className="group relative h-96 rounded-2xl overflow-hidden border border-neutral-200 flex flex-col justify-end p-6 hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

              <div className="relative z-10 flex flex-col gap-2 text-white">
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">
                  <activity.icon className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-white">
                  {activity.title}
                </h3>
                <p className="text-xs text-neutral-200 line-clamp-2 leading-relaxed">
                  {activity.description}
                </p>
                <span className="text-[11px] font-black uppercase tracking-widest text-white underline underline-offset-4 mt-1 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Shop Category →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: COMMUNITY & GUIDES SECTION ("WAIT THERE'S MORE…")
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-1 border-b border-neutral-200 pb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
            WAIT THERE&apos;S MORE…
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
            FITNESS GUIDES & ADVICE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              tag: "Womens Guide",
              title: "The Official Leggings Guide",
              description: "Find the ideal compression level, rise, and seamless contours for your lifting style.",
              image: "https://images.ctfassets.net/wl6q2in9o7k3/4NHu20dYLtrxkEeiO0ptv4/0b451c859275c8f8bc3f40df99bd8ada/homepage_cards_27347845__1_.jpeg",
            },
            {
              tag: "Womens Guide",
              title: "Sports Bra Support Breakdown",
              description: "Choosing the right fit between low, medium, and high-impact training sessions.",
              image: "https://images.ctfassets.net/wl6q2in9o7k3/6xnsc2hLoFX6OEE5LdMFiG/7ea2dd71e1ca8896461973dc00ff2e51/homepage_cards_27468295.jpeg",
            },
            {
              tag: "Mens Guide",
              title: "The Heavyweight Tee Guide",
              description: "Why pump covers and dropped-shoulder cotton tees dominate modern gym culture.",
              image: "https://images.ctfassets.net/wl6q2in9o7k3/5oe1EWhgqzk0tDwsjuqtKj/5fb2d9b71086331c179bc7522a304d10/homepage_cards_27427351.jpeg",
            },
            {
              tag: "Conditioning Hub",
              title: "The Gymshark Running Hub",
              description: "Treadmill workouts 101: run smarter indoors with progressive pacing strategies.",
              image: "https://images.ctfassets.net/wl6q2in9o7k3/pyYdZADVdBbOvVN9B5xGy/b95fbb9a91cf544dd7d940b134f602c1/Headless_Cards_-_25735375.jpeg",
            },
          ].map((guide, idx) => (
            <div
              key={idx}
              className="bg-[#F8F8F8] rounded-2xl overflow-hidden border border-neutral-200 flex flex-col group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/10] w-full bg-neutral-200">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover group-hover:scale-104 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1 justify-between">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500">
                    {guide.tag}
                  </span>
                  <h4 className="font-bold text-black text-sm tracking-tight group-hover:text-neutral-700">
                    {guide.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-2">
                    {guide.description}
                  </p>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-black pt-2 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: SEO BRAND STORY BLOCK ("GYM CLOTHES BUILT IN THE WEIGHT ROOM")
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="border-t border-neutral-200 pt-12 pb-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-600 text-xs leading-relaxed">
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-black uppercase tracking-wider text-black">
              Gym Clothes Built In The Weight Room
            </h3>
            <p>
              Our gym clothes are crafted with the lifter, athlete, and conditioning enthusiast in mind.
              From sweat-wicking materials and seamless construction that prevents friction during heavy sets,
              to form-flattering fits that move naturally with your physique.
            </p>
            <p>
              Founded in 2012 by Ben Francis in a garage with a screen printer, Gymshark has evolved into a
              global conditioning movement uniting millions of athletes worldwide.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-black uppercase tracking-wider text-black">
              More Than Workout Clothing
            </h3>
            <p>
              Gymshark exists to unite the conditioning community. Whether you are running your first 5K,
              hitting personal records on the deadlift platform, or unwinding on a recovery day, our activewear
              is engineered to deliver unmatched durability and confidence.
            </p>
            <p>
              Shop online with confidence: enjoy fast European fulfillment, free shipping over €50, and 30-day
              hassle-free returns on all workout gear.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
