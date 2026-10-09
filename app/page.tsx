import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Sparkles, Dumbbell, Zap, Footprints, Heart, BookOpen } from "lucide-react";

export default function HomePage() {
  const newInProducts = MOCK_PRODUCTS.filter((p) => p.isNew);
  const hybridProducts = MOCK_PRODUCTS.filter((p) => p.collection.includes("Conditioning"));

  return (
    <div className="flex flex-col gap-16 md:gap-24 overflow-x-hidden">
      {/* =========================================================================
          SECTION 1: HERO CAMPAIGN BANNER ("A NEW ERA OF LIFTING SETS")
          ========================================================================= */}
      <section className="relative w-full h-[85vh] min-h-[620px] max-h-[900px] flex items-end pb-16 px-4 sm:px-8 md:px-16 overflow-hidden bg-neutral-950">
        <Image
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2000&q=85"
          alt="Gymshark Athlete Training - Adapt Solid Lifting"
          fill
          priority
          className="object-cover object-top opacity-60 scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-gymshark-black via-black/40 to-black/20" />

        <div className="relative max-w-4xl z-10 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase bg-white/10 backdrop-blur-md text-neutral-200 px-3.5 py-1.5 rounded-full w-fit border border-white/15">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>NEW IN: ADAPT SOLID</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-white">
            A NEW ERA OF <br />
            LIFTING SETS.
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 max-w-xl font-medium leading-relaxed">
            Engineered for high-volume barbell sets and relentless conditioning. Featuring all-new
            textured compression knit and moisture-wicking endurance.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link href="/collections/women">
              <Button size="lg" className="px-8 py-4 text-xs font-black tracking-widest uppercase">
                Shop Adapt Solid
              </Button>
            </Link>
            <Link href="/collections/all">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-xs font-black tracking-widest uppercase border-white/30 hover:border-white"
              >
                Explore New Drops
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: HORIZONTAL PRODUCT SCROLL CAROUSEL ("NEW IN")
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-6">
        <div className="flex items-end justify-between border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-neutral-400">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span>JUST DROPPED IN THE EU</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
              NEW IN
            </h2>
          </div>

          <Link
            href="/collections/all"
            className="text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white flex items-center gap-1 group"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Scrollable Container with Snap points */}
        <div className="flex gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          {newInProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[270px] sm:min-w-[300px] md:min-w-[320px] snap-start shrink-0"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gymshark-dark rounded-3xl border border-white/10 overflow-hidden">
          {/* Left Campaign Image (7 cols) */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[500px] w-full bg-neutral-900">
            <Image
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
              alt="Hybrid Training Conditioning Club"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-2">
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
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              The Lifter Who Runs
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
              BUILT FOR DUAL DISCIPLINE ENDURANCE.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Conditioning is not just lifting or running—it is both. Designed with heavyweight
              washed cotton, reinforced flatlock seams, and breathable mobility for functional
              training sessions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/collections/men">
                <Button size="lg" className="w-full sm:w-auto uppercase text-xs font-black tracking-wider">
                  Shop Conditioning Club
                </Button>
              </Link>
              <Link href="/collections/all">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto uppercase text-xs font-black tracking-wider"
                >
                  Explore Hybrid
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: TRENDING FILTER BUBBLES ("POPULAR RIGHT NOW")
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            TRENDING SEARCHES
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
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
              className="bg-neutral-900 border border-white/10 hover:border-white hover:bg-neutral-800 text-neutral-200 hover:text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200"
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
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            SHOP BY DISCIPLINE
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
            HOW DO YOU TRAIN?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "LIFTING",
              description: "Barbell sets, squat racks, and heavyweight compression.",
              image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
              link: "/collections/all",
              icon: Dumbbell,
            },
            {
              title: "HIIT",
              description: "High-intensity agility and fast-drying breathability.",
              image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80",
              link: "/collections/all",
              icon: Zap,
            },
            {
              title: "RUNNING",
              description: "Distance road shorts, anti-chafe tops, and lightweight gear.",
              image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=800&q=80",
              link: "/collections/all",
              icon: Footprints,
            },
            {
              title: "PILATES",
              description: "Low-impact core control and ultra-soft 4-way stretch.",
              image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
              link: "/collections/women",
              icon: Heart,
            },
          ].map((activity) => (
            <Link
              key={activity.title}
              href={activity.link}
              className="group relative h-96 rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-end p-6 hover:border-white/30 transition-all duration-300"
            >
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="relative z-10 flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">
                  <activity.icon className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-white">
                  {activity.title}
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
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
          SECTION 6: COMMUNITY & GUIDES SECTION ("WAIT THERE'S MORE...")
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            WAIT THERE&apos;S MORE…
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            FITNESS GUIDES & ADVICE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              tag: "Womens Guide",
              title: "The Official Leggings Guide",
              description: "Find the ideal compression level, rise, and seamless contours for your lifting style.",
              image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
            },
            {
              tag: "Womens Guide",
              title: "Sports Bra Support Breakdown",
              description: "Choosing the right fit between low, medium, and high-impact training sessions.",
              image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
            },
            {
              tag: "Mens Guide",
              title: "The Ultimate Heavyweight Tee Guide",
              description: "Why pump covers and dropped-shoulder cotton tees dominate modern gym culture.",
              image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=600&q=80",
            },
            {
              tag: "Conditioning Hub",
              title: "The Gymshark Running Hub",
              description: "Treadmill workouts 101: run smarter indoors with progressive pacing strategies.",
              image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=600&q=80",
            },
          ].map((guide, idx) => (
            <div
              key={idx}
              className="bg-gymshark-dark rounded-2xl overflow-hidden border border-white/5 flex flex-col group hover:border-white/20 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] w-full bg-neutral-900">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1 justify-between">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                    {guide.tag}
                  </span>
                  <h4 className="font-bold text-white text-sm tracking-tight group-hover:text-neutral-200">
                    {guide.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                    {guide.description}
                  </p>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-300 pt-2 flex items-center gap-1 group-hover:text-white">
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
        <div className="border-t border-white/10 pt-12 pb-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-400 text-xs leading-relaxed">
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-black uppercase tracking-wider text-white">
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
            <h3 className="text-sm font-black uppercase tracking-wider text-white">
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
