"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Target, Rocket } from "lucide-react"
import { generateBrief } from "@/lib/generate-brief"
import BriefPreview from "@/components/brief-preview"
import CustomizationPanel from "@/components/customization-panel"
import LoadingAnimation from "@/components/loading-animation"

export default function Home() {
  const [meetingNotes, setMeetingNotes] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [briefData, setBriefData] = useState(null)
  const [clientLogo, setClientLogo] = useState(null)
  const [vendorLogo, setVendorLogo] = useState(null)
  const [briefDate, setBriefDate] = useState(new Date().toISOString().split("T")[0])

  const handleGenerate = async () => {
    if (!meetingNotes.trim()) return

    setIsGenerating(true)
    try {
      // In a real app, this would call an API endpoint
      const data = await generateBrief(meetingNotes)
      setBriefData(data)
    } catch (error) {
      console.error("Failed to generate brief:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleStartOver = () => {
    setBriefData(null)
    setMeetingNotes("")
    setClientLogo(null)
    setVendorLogo(null)
    setBriefDate(new Date().toISOString().split("T")[0])
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-pastel-purple/20 to-pastel-blue/20">
      <header className="border-b bg-white shadow-notion sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-medium text-xl">
            <span className="text-vibrant-purple">Impact</span>
            <span className="text-vibrant-blue font-semibold">Brief</span>
            <span className="text-2xl">✨</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href="/examples"
              className="text-sm font-medium text-clay-600 hover:text-vibrant-purple transition-colors"
            >
              Examples
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-clay-600 hover:text-vibrant-purple transition-colors"
            >
              Pricing
            </Link>
            <Button
              size="sm"
              className="bg-gradient-to-r from-vibrant-purple to-vibrant-blue text-white shadow-colorful hover:shadow-colorful-hover transition-all"
            >
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {!briefData ? (
          <>
            {!isGenerating ? (
              <section className="container py-12 md:py-24 space-y-12 animate-fade-in">
                <div className="mx-auto max-w-3xl text-center space-y-6">
                  <div className="flex justify-center mb-4">
                    <div className="text-5xl animate-bounce-light">🚀</div>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight">
                    Turn Meeting Notes into{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-vibrant">Compelling</span> Sales Briefs
                  </h1>
                  <p className="mx-auto max-w-[700px] text-clay-600 md:text-xl leading-relaxed">
                    Help your prospects sell internally with professional, data-driven Impact Briefs that get executive
                    buy-in.
                  </p>
                </div>

                <Card className="mx-auto max-w-3xl p-8 border border-pastel-purple shadow-colorful hover:shadow-colorful-hover transition-shadow bg-white rounded-xl animate-fade-up">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">📝</span>
                      <h2 className="text-xl font-semibold text-vibrant-purple">Paste your meeting notes</h2>
                    </div>
                    <Textarea
                      placeholder="Paste your meeting notes here..."
                      className="min-h-[200px] border-pastel-purple focus:border-vibrant-purple focus:ring-vibrant-purple rounded-lg font-light text-clay-800 placeholder:text-clay-400 transition-all"
                      value={meetingNotes}
                      onChange={(e) => setMeetingNotes(e.target.value)}
                    />
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-vibrant-purple to-vibrant-blue hover:from-vibrant-purple/90 hover:to-vibrant-blue/90 text-white shadow-colorful hover:shadow-colorful-hover transition-all rounded-lg"
                      onClick={handleGenerate}
                      disabled={!meetingNotes.trim()}
                    >
                      <Sparkles className="mr-2 h-4 w-4" /> Generate Impact Brief{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>

                <div className="grid gap-8 md:grid-cols-3 max-w-3xl mx-auto">
                  <Card
                    className="p-6 border border-pastel-purple shadow-colorful hover:shadow-colorful-hover transition-all bg-white rounded-xl animate-fade-up"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="h-12 w-12 rounded-full bg-pastel-purple flex items-center justify-center mb-4">
                        <Zap className="h-6 w-6 text-vibrant-purple" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-vibrant-purple flex items-center gap-2">
                        Simple Input <span className="text-xl">⚡</span>
                      </h3>
                      <p className="text-clay-600 font-light leading-relaxed flex-grow">
                        Paste your unstructured meeting notes and let our AI do the heavy lifting.
                      </p>
                    </div>
                  </Card>
                  <Card
                    className="p-6 border border-pastel-blue shadow-colorful hover:shadow-colorful-hover transition-all bg-white rounded-xl animate-fade-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="h-12 w-12 rounded-full bg-pastel-blue flex items-center justify-center mb-4">
                        <Target className="h-6 w-6 text-vibrant-blue" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-vibrant-blue flex items-center gap-2">
                        Professional Output <span className="text-xl">✨</span>
                      </h3>
                      <p className="text-clay-600 font-light leading-relaxed flex-grow">
                        Get a beautifully formatted brief that highlights key value propositions.
                      </p>
                    </div>
                  </Card>
                  <Card
                    className="p-6 border border-pastel-teal shadow-colorful hover:shadow-colorful-hover transition-all bg-white rounded-xl animate-fade-up"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="h-12 w-12 rounded-full bg-pastel-teal flex items-center justify-center mb-4">
                        <Rocket className="h-6 w-6 text-vibrant-teal" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-vibrant-teal flex items-center gap-2">
                        Fully Customizable <span className="text-xl">🎨</span>
                      </h3>
                      <p className="text-clay-600 font-light leading-relaxed flex-grow">
                        Add logos, edit content, and personalize your briefs for maximum impact.
                      </p>
                    </div>
                  </Card>
                </div>
              </section>
            ) : (
              <section className="container py-24 flex items-center justify-center">
                <LoadingAnimation />
              </section>
            )}
          </>
        ) : (
          <section className="container py-8 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-6">
              <CustomizationPanel
                briefData={briefData}
                setBriefData={setBriefData}
                clientLogo={clientLogo}
                setClientLogo={setClientLogo}
                vendorLogo={vendorLogo}
                setVendorLogo={setVendorLogo}
                briefDate={briefDate}
                setBriefDate={setBriefDate}
                onStartOver={handleStartOver}
              />
              <BriefPreview
                briefData={briefData}
                clientLogo={clientLogo}
                vendorLogo={vendorLogo}
                briefDate={briefDate}
              />
            </div>
          </section>
        )}
      </main>

      <footer className="border-t py-8 bg-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-clay-500">© 2025 ImpactBrief. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-sm text-clay-500 hover:text-vibrant-purple transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-clay-500 hover:text-vibrant-purple transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

