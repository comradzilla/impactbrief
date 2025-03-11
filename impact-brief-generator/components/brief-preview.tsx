"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, ChevronLeft, ChevronRight, Printer, Share2 } from "lucide-react"

export default function BriefPreview({ briefData, clientLogo, vendorLogo, briefDate }) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 2 // In a real app, calculate based on content
  const previewRef = useRef(null)

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleDownload = () => {
    // In a real app, this would generate and download a PDF
    alert("Downloading PDF...")
  }

  const handlePrint = () => {
    window.print()
  }

  if (!briefData) return null

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex justify-between items-center mb-4 bg-white p-3 rounded-lg shadow-colorful border border-pastel-purple">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="border-pastel-purple text-vibrant-purple hover:bg-pastel-purple/10 hover:text-vibrant-purple/80"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm text-vibrant-purple font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="border-pastel-purple text-vibrant-purple hover:bg-pastel-purple/10 hover:text-vibrant-purple/80"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrint}
            className="border-pastel-blue text-vibrant-blue hover:bg-pastel-blue/10 hover:text-vibrant-blue/80"
          >
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-pastel-teal text-vibrant-teal hover:bg-pastel-teal/10 hover:text-vibrant-teal/80"
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            className="bg-gradient-to-r from-vibrant-purple to-vibrant-blue text-white hover:from-vibrant-purple/90 hover:to-vibrant-blue/90 border-transparent"
          >
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      <Card
        className="flex-1 p-8 overflow-auto bg-white shadow-colorful hover:shadow-colorful-hover transition-shadow border border-pastel-purple rounded-xl"
        ref={previewRef}
      >
        <div className="max-w-[800px] mx-auto">
          {/* Page 1 */}
          {currentPage === 1 && (
            <div className="min-h-[1056px] animate-fade-in">
              <div className="flex justify-between items-center mb-10">
                {clientLogo && (
                  <div className="h-16 w-32">
                    <img
                      src={URL.createObjectURL(clientLogo) || "/placeholder.svg"}
                      alt="Client logo"
                      className="h-full object-contain"
                    />
                  </div>
                )}
                {vendorLogo && (
                  <div className="h-16 w-32">
                    <img
                      src={URL.createObjectURL(vendorLogo) || "/placeholder.svg"}
                      alt="Vendor logo"
                      className="h-full object-contain"
                    />
                  </div>
                )}
              </div>

              <h1 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-vibrant">
                {briefData.headline || "Strategic Initiative for Revenue Growth"} ✨
              </h1>
              <p className="mb-8 text-clay-600">
                Developed by: <span className="text-vibrant-purple">{briefData.champion || "John Smith"}</span>,{" "}
                {briefData.dealPlayers || "Sales Team"}
                <br />
                Date:{" "}
                <span className="text-vibrant-blue">
                  {new Date(briefDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </span>
              </p>

              <div className="mb-8 p-6 bg-pastel-purple/10 rounded-lg border border-pastel-purple">
                <h2 className="text-2xl font-bold mb-3 text-vibrant-purple flex items-center gap-2">
                  <span className="text-xl">💡</span> Headline
                </h2>
                <p className="text-clay-700 text-lg leading-relaxed">
                  {briefData.headlineContent ||
                    "Due to market consolidation, we must implement an integrated platform by Q3 to prevent revenue loss and secure competitive advantage."}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-3 text-vibrant-blue flex items-center gap-2">
                  <span className="text-xl">🧩</span> The Challenge
                </h2>
                <p className="mb-4 text-clay-600 italic">What's changed, who's impacted, and why it's urgent.</p>
                <ul className="space-y-4 mb-4">
                  <li className="p-4 bg-white rounded-lg border border-pastel-blue shadow-colorful">
                    {briefData.challenge1 ||
                      "Every quarter, 500+ sales reps face pipeline visibility issues, costing us $2M in lost opportunities. Without action by Q3, this could double."}
                  </li>
                  <li className="p-4 bg-white rounded-lg border border-pastel-blue shadow-colorful">
                    {briefData.challenge2 ||
                      "Despite previous attempts, data silos persist, blocking cross-selling and draining 15 hours per week in manual reporting."}
                  </li>
                </ul>
                <div className="p-3 bg-pastel-blue/20 rounded-lg inline-block border border-pastel-blue">
                  <p className="font-medium text-vibrant-blue">
                    Why it matters:{" "}
                    <span className="text-clay-700">
                      {briefData.whyItMatters || "This undermines our company-wide goal of 30% YoY growth."}
                    </span>
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-3 text-vibrant-teal flex items-center gap-2">
                  <span className="text-xl">🚀</span> The Approach
                </h2>
                <p className="mb-4 text-clay-600 italic">How we solve it—proven, practical, and ready.</p>
                <div className="space-y-3 mb-4">
                  <div className="p-4 bg-white rounded-lg border border-pastel-teal shadow-colorful">
                    <p className="font-medium text-vibrant-teal">
                      Solution:{" "}
                      <span className="font-normal text-clay-700">
                        {briefData.solution || "Streamline sales processes with an integrated CRM platform."}
                      </span>
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-pastel-teal shadow-colorful">
                    <p className="font-medium text-vibrant-teal">
                      Proof:{" "}
                      <span className="font-normal text-clay-700">
                        {briefData.proof ||
                          "Tested via pilot program with top performers, delivering 22% increase in win rates."}
                      </span>
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-pastel-teal shadow-colorful">
                    <p className="font-medium text-vibrant-teal">
                      Requirements:{" "}
                      <span className="font-normal text-clay-700">
                        {briefData.requirements ||
                          "Success hinges on executive buy-in and IT resources for Q2 implementation."}
                      </span>
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-pastel-teal shadow-colorful">
                    <p className="font-medium text-vibrant-teal">
                      Resourcing:{" "}
                      <span className="font-normal text-clay-700">
                        {briefData.resourcing || "Shift enabled by 2-person implementation team over 6 weeks."}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="p-3 bg-pastel-teal/20 rounded-lg inline-block border border-pastel-teal">
                  <p className="font-medium text-vibrant-teal">
                    Vendor Transition:{" "}
                    <span className="text-clay-700">
                      {briefData.vendorTransition ||
                        "After aligning on this approach, our company exceeds all criteria to execute."}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Page 2 */}
          {currentPage === 2 && (
            <div className="min-h-[1056px] animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-vibrant-purple flex items-center gap-2">
                <span className="text-xl">📊</span> The Payoff
              </h2>
              <p className="mb-6 text-clay-600 italic">Before vs. after—tangible gains, fast.</p>

              <div className="mb-8 overflow-hidden rounded-lg border border-pastel-purple shadow-colorful">
                <table className="w-full border-collapse">
                  <thead className="bg-pastel-purple/20">
                    <tr className="border-b border-pastel-purple">
                      <th className="text-left py-3 px-4 font-semibold text-vibrant-purple">Key Metric</th>
                      <th className="text-left py-3 px-4 font-semibold text-vibrant-purple">Current</th>
                      <th className="text-left py-3 px-4 font-semibold text-vibrant-purple">
                        Target by {briefData.targetDate || "Q4 2025"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-pastel-purple hover:bg-pastel-purple/10 transition-colors">
                      <td className="py-3 px-4 text-clay-700">{briefData.kpi1Name || "Win Rate"}</td>
                      <td className="py-3 px-4 text-clay-700">{briefData.kpi1Current || "22%"}</td>
                      <td className="py-3 px-4 text-vibrant-purple font-medium">
                        {briefData.kpi1Target || "35% (+59%)"}
                      </td>
                    </tr>
                    <tr className="border-b border-pastel-purple hover:bg-pastel-purple/10 transition-colors">
                      <td className="py-3 px-4 text-clay-700">{briefData.kpi2Name || "Deal Velocity"}</td>
                      <td className="py-3 px-4 text-clay-700">{briefData.kpi2Current || "45 days"}</td>
                      <td className="py-3 px-4 text-vibrant-blue font-medium">
                        {briefData.kpi2Target || "30 days (-33%)"}
                      </td>
                    </tr>
                    <tr className="hover:bg-pastel-purple/10 transition-colors">
                      <td className="py-3 px-4 text-clay-700">{briefData.kpi3Name || "Revenue per Rep"}</td>
                      <td className="py-3 px-4 text-clay-700">{briefData.kpi3Current || "$1.2M"}</td>
                      <td className="py-3 px-4 text-vibrant-teal font-medium">
                        {briefData.kpi3Target || "$1.8M (+50%)"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-pastel-blue/10 rounded-lg border border-pastel-blue mb-8">
                <p className="font-medium text-vibrant-blue flex items-center gap-2">
                  <span className="text-xl">⚡</span> Daily Impact:{" "}
                  <span className="text-clay-700">
                    {briefData.dailyImpact ||
                      "Sales reps save 2 hours/day on administrative tasks; customer satisfaction scores improve by 15%."}
                  </span>
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-vibrant-blue flex items-center gap-2">
                <span className="text-xl">💰</span> The Investment
              </h2>
              <p className="mb-4 text-clay-600 italic">Who, what, when—clear and actionable.</p>
              <div className="space-y-3 mb-8">
                <div className="p-4 bg-white rounded-lg border border-pastel-blue shadow-colorful">
                  <p className="font-medium text-vibrant-blue">
                    People:{" "}
                    <span className="font-normal text-clay-700">
                      {briefData.people || "Sales operations and IT teams commit 120 hours total."}
                    </span>
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-pastel-blue shadow-colorful">
                  <p className="font-medium text-vibrant-blue">
                    Time:{" "}
                    <span className="font-normal text-clay-700">
                      {briefData.time || "Kickoff by April 15, initial results by June 30."}
                    </span>
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-pastel-blue shadow-colorful">
                  <p className="font-medium text-vibrant-blue">
                    Scenarios:{" "}
                    <span className="font-normal text-clay-700">
                      {briefData.scenarios ||
                        "Base case: 2 dedicated staff; Accelerated: 4 staff for 30-day implementation."}
                    </span>
                  </p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-pastel-purple/20 to-pastel-blue/20 rounded-lg border border-pastel-purple mb-8">
                <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-vibrant flex items-center gap-2">
                  <span className="text-xl">✨</span> What's Better Here?
                </h2>
                <ol className="space-y-3">
                  <li className="flex gap-2">
                    <span className="font-medium text-vibrant-purple min-w-[24px]">1.</span>
                    <div>
                      <span className="font-medium text-vibrant-purple">Headline:</span>{" "}
                      <span className="text-clay-700">
                        {briefData.better1 || "Tighter, with a cause-effect hook that grabs attention."}
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-vibrant-blue min-w-[24px]">2.</span>
                    <div>
                      <span className="font-medium text-vibrant-blue">Challenge:</span>{" "}
                      <span className="text-clay-700">
                        {briefData.better2 ||
                          'Streamlined problem statements with a punchy "Why it matters" tie-in to company goals—keeps it strategic.'}
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-vibrant-teal min-w-[24px]">3.</span>
                    <div>
                      <span className="font-medium text-vibrant-teal">Approach:</span>{" "}
                      <span className="text-clay-700">
                        {briefData.better3 ||
                          "Broken into digestible chunks (solution, proof, requirements), with a smoother vendor segue."}
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-vibrant-purple min-w-[24px]">4.</span>
                    <div>
                      <span className="font-medium text-vibrant-purple">Payoff:</span>{" "}
                      <span className="text-clay-700">
                        {briefData.better4 ||
                          'Table format stays, but added a "Daily Impact" line for emotional resonance alongside exec metrics.'}
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-vibrant-blue min-w-[24px]">5.</span>
                    <div>
                      <span className="font-medium text-vibrant-blue">Investment:</span>{" "}
                      <span className="text-clay-700">
                        {briefData.better5 ||
                          "Clarified as a commitment, not just a cost, with optional scenarios for flexibility."}
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-vibrant-teal min-w-[24px]">6.</span>
                    <div>
                      <span className="font-medium text-vibrant-teal">Flow & Tone:</span>{" "}
                      <span className="text-clay-700">
                        {briefData.better6 ||
                          "Shorter sentences, active voice, and a mix of bold/italics for scannability—execs skim, so this helps."}
                      </span>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

