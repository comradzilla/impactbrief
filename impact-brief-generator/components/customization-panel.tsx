"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Save, RefreshCw, ArrowLeft } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CustomizationPanel({
  briefData,
  setBriefData,
  clientLogo,
  setClientLogo,
  vendorLogo,
  setVendorLogo,
  briefDate,
  setBriefDate,
  onStartOver = null,
}) {
  const [activeTab, setActiveTab] = useState("logos")

  const handleClientLogoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setClientLogo(e.target.files[0])
    }
  }

  const handleVendorLogoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setVendorLogo(e.target.files[0])
    }
  }

  const handleDateChange = (e) => {
    setBriefDate(e.target.value)
  }

  const handleFieldChange = (field, value) => {
    setBriefData({
      ...briefData,
      [field]: value,
    })
  }

  const handleSave = () => {
    // In a real app, this would save the brief to the user's account
    alert("Brief saved successfully!")
  }

  const handleRegenerate = () => {
    // In a real app, this would regenerate the brief with the same meeting notes
    alert("Regenerating brief...")
  }

  return (
    <div className="w-full md:w-80 flex flex-col border border-pastel-purple rounded-xl shadow-colorful bg-white overflow-hidden">
      <div className="p-4 border-b border-pastel-purple flex justify-between items-center bg-gradient-to-r from-pastel-purple to-pastel-blue">
        <h2 className="text-lg font-semibold text-vibrant-purple flex items-center gap-2">
          <span className="text-xl">🎨</span> Customize Brief
        </h2>
        {onStartOver && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onStartOver}
            className="text-vibrant-purple hover:text-vibrant-purple/80 hover:bg-white/20 bg-white/10"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            New Brief
          </Button>
        )}
      </div>

      <Tabs defaultValue="logos" className="flex-1 flex flex-col" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mx-4 mt-4 bg-pastel-purple/20 p-1 rounded-md">
          <TabsTrigger
            value="logos"
            className="data-[state=active]:bg-white data-[state=active]:text-vibrant-purple data-[state=active]:shadow-colorful text-clay-600 flex items-center"
          >
            <span className="mr-1.5 text-lg">🖼️</span>
            Logos
          </TabsTrigger>
          <TabsTrigger
            value="content"
            className="data-[state=active]:bg-white data-[state=active]:text-vibrant-blue data-[state=active]:shadow-colorful text-clay-600 flex items-center"
          >
            <span className="mr-1.5 text-lg">📝</span>
            Content
          </TabsTrigger>
          <TabsTrigger
            value="metrics"
            className="data-[state=active]:bg-white data-[state=active]:text-vibrant-teal data-[state=active]:shadow-colorful text-clay-600 flex items-center"
          >
            <span className="mr-1.5 text-lg">📊</span>
            Metrics
          </TabsTrigger>
        </TabsList>

        <ScrollArea className="flex-1 p-4">
          <TabsContent value="logos" className="space-y-6 mt-2">
            <div className="space-y-2">
              <Label htmlFor="briefDate" className="text-vibrant-purple">
                Brief Date
              </Label>
              <Input
                id="briefDate"
                type="date"
                value={briefDate}
                onChange={handleDateChange}
                className="border-pastel-purple focus:border-vibrant-purple focus:ring-vibrant-purple"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="clientLogo" className="text-vibrant-purple">
                Client Logo
              </Label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="w-full border-pastel-purple text-vibrant-purple hover:bg-pastel-purple/10 hover:text-vibrant-purple/80"
                  onClick={() => document.getElementById("clientLogo").click()}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  {clientLogo ? "Change Logo" : "Upload Logo"}
                </Button>
                {clientLogo && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setClientLogo(null)}
                    className="text-vibrant-purple hover:text-vibrant-purple/80 hover:bg-pastel-purple/10"
                  >
                    Remove
                  </Button>
                )}
              </div>
              <input
                id="clientLogo"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleClientLogoChange}
              />
              {clientLogo && (
                <div className="h-16 border border-pastel-purple rounded-lg p-2 flex items-center justify-center bg-pastel-purple/10">
                  <img
                    src={URL.createObjectURL(clientLogo) || "/placeholder.svg"}
                    alt="Client logo preview"
                    className="h-full object-contain"
                  />
                </div>
              )}
            </div>

            <div className="space-y-3">
              <Label htmlFor="vendorLogo" className="text-vibrant-purple">
                Your Company Logo
              </Label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="w-full border-pastel-purple text-vibrant-purple hover:bg-pastel-purple/10 hover:text-vibrant-purple/80"
                  onClick={() => document.getElementById("vendorLogo").click()}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  {vendorLogo ? "Change Logo" : "Upload Logo"}
                </Button>
                {vendorLogo && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setVendorLogo(null)}
                    className="text-vibrant-purple hover:text-vibrant-purple/80 hover:bg-pastel-purple/10"
                  >
                    Remove
                  </Button>
                )}
              </div>
              <input
                id="vendorLogo"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleVendorLogoChange}
              />
              {vendorLogo && (
                <div className="h-16 border border-pastel-purple rounded-lg p-2 flex items-center justify-center bg-pastel-purple/10">
                  <img
                    src={URL.createObjectURL(vendorLogo) || "/placeholder.svg"}
                    alt="Vendor logo preview"
                    className="h-full object-contain"
                  />
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-4 mt-2">
            <Accordion type="multiple" defaultValue={["header"]} className="space-y-2">
              <AccordionItem value="header" className="border border-pastel-blue rounded-lg overflow-hidden">
                <AccordionTrigger className="px-4 py-3 hover:bg-pastel-blue/10 text-vibrant-blue">
                  <span className="flex items-center gap-2">
                    <span className="text-lg">📋</span> Header Information
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 px-4 pb-4 pt-2 border-t border-pastel-blue">
                  <div className="space-y-2">
                    <Label htmlFor="headline" className="text-vibrant-blue">
                      Headline
                    </Label>
                    <Input
                      id="headline"
                      value={briefData?.headline || ""}
                      onChange={(e) => handleFieldChange("headline", e.target.value)}
                      className="border-pastel-blue focus:border-vibrant-blue focus:ring-vibrant-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="champion" className="text-vibrant-blue">
                      Champion Name
                    </Label>
                    <Input
                      id="champion"
                      value={briefData?.champion || ""}
                      onChange={(e) => handleFieldChange("champion", e.target.value)}
                      className="border-pastel-blue focus:border-vibrant-blue focus:ring-vibrant-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dealPlayers" className="text-vibrant-blue">
                      Key Deal Players
                    </Label>
                    <Input
                      id="dealPlayers"
                      value={briefData?.dealPlayers || ""}
                      onChange={(e) => handleFieldChange("dealPlayers", e.target.value)}
                      className="border-pastel-blue focus:border-vibrant-blue focus:ring-vibrant-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="headlineContent" className="text-vibrant-blue">
                      Headline Content
                    </Label>
                    <Textarea
                      id="headlineContent"
                      value={briefData?.headlineContent || ""}
                      onChange={(e) => handleFieldChange("headlineContent", e.target.value)}
                      className="border-pastel-blue focus:border-vibrant-blue focus:ring-vibrant-blue min-h-[80px]"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="challenge" className="border border-pastel-blue rounded-lg overflow-hidden">
                <AccordionTrigger className="px-4 py-3 hover:bg-pastel-blue/10 text-vibrant-blue">
                  <span className="flex items-center gap-2">
                    <span className="text-lg">🧩</span> The Challenge
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 px-4 pb-4 pt-2 border-t border-pastel-blue">
                  <div className="space-y-2">
                    <Label htmlFor="challenge1" className="text-vibrant-blue">
                      Challenge Option 1
                    </Label>
                    <Textarea
                      id="challenge1"
                      value={briefData?.challenge1 || ""}
                      onChange={(e) => handleFieldChange("challenge1", e.target.value)}
                      className="border-pastel-blue focus:border-vibrant-blue focus:ring-vibrant-blue min-h-[80px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="challenge2" className="text-vibrant-blue">
                      Challenge Option 2
                    </Label>
                    <Textarea
                      id="challenge2"
                      value={briefData?.challenge2 || ""}
                      onChange={(e) => handleFieldChange("challenge2", e.target.value)}
                      className="border-pastel-blue focus:border-vibrant-blue focus:ring-vibrant-blue min-h-[80px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whyItMatters" className="text-vibrant-blue">
                      Why It Matters
                    </Label>
                    <Input
                      id="whyItMatters"
                      value={briefData?.whyItMatters || ""}
                      onChange={(e) => handleFieldChange("whyItMatters", e.target.value)}
                      className="border-pastel-blue focus:border-vibrant-blue focus:ring-vibrant-blue"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="approach" className="border border-pastel-blue rounded-lg overflow-hidden">
                <AccordionTrigger className="px-4 py-3 hover:bg-pastel-blue/10 text-vibrant-blue">
                  <span className="flex items-center gap-2">
                    <span className="text-lg">🚀</span> The Approach
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 px-4 pb-4 pt-2 border-t border-pastel-blue">
                  <div className="space-y-2">
                    <Label htmlFor="solution" className="text-vibrant-blue">
                      Solution
                    </Label>
                    <Input
                      id="solution"
                      value={briefData?.solution || ""}
                      onChange={(e) => handleFieldChange("solution", e.target.value)}
                      className="border-pastel-blue focus:border-vibrant-blue focus:ring-vibrant-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="proof" className="text-vibrant-blue">
                      Proof
                    </Label>
                    <Input
                      id="proof"
                      value={briefData?.proof || ""}
                      onChange={(e) => handleFieldChange("proof", e.target.value)}
                      className="border-pastel-blue focus:border-vibrant-blue focus:ring-vibrant-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="requirements" className="text-vibrant-blue">
                      Requirements
                    </Label>
                    <Input
                      id="requirements"
                      value={briefData?.requirements || ""}
                      onChange={(e) => handleFieldChange("requirements", e.target.value)}
                      className="border-pastel-blue focus:border-vibrant-blue focus:ring-vibrant-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="resourcing" className="text-vibrant-blue">
                      Resourcing
                    </Label>
                    <Input
                      id="resourcing"
                      value={briefData?.resourcing || ""}
                      onChange={(e) => handleFieldChange("resourcing", e.target.value)}
                      className="border-pastel-blue focus:border-vibrant-blue focus:ring-vibrant-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vendorTransition" className="text-vibrant-blue">
                      Vendor Transition
                    </Label>
                    <Input
                      id="vendorTransition"
                      value={briefData?.vendorTransition || ""}
                      onChange={(e) => handleFieldChange("vendorTransition", e.target.value)}
                      className="border-pastel-blue focus:border-vibrant-blue focus:ring-vibrant-blue"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="investment" className="border border-pastel-blue rounded-lg overflow-hidden">
                <AccordionTrigger className="px-4 py-3 hover:bg-pastel-blue/10 text-vibrant-blue">
                  <span className="flex items-center gap-2">
                    <span className="text-lg">💰</span> The Investment
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 px-4 pb-4 pt-2 border-t border-pastel-blue">
                  <div className="space-y-2">
                    <Label htmlFor="people" className="text-vibrant-blue">
                      People
                    </Label>
                    <Input
                      id="people"
                      value={briefData?.people || ""}
                      onChange={(e) => handleFieldChange("people", e.target.value)}
                      className="border-pastel-blue focus:border-vibrant-blue focus:ring-vibrant-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-vibrant-blue">
                      Time
                    </Label>
                    <Input
                      id="time"
                      value={briefData?.time || ""}
                      onChange={(e) => handleFieldChange("time", e.target.value)}
                      className="border-pastel-blue focus:border-vibrant-blue focus:ring-vibrant-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="scenarios" className="text-vibrant-blue">
                      Scenarios
                    </Label>
                    <Input
                      id="scenarios"
                      value={briefData?.scenarios || ""}
                      onChange={(e) => handleFieldChange("scenarios", e.target.value)}
                      className="border-pastel-blue focus:border-vibrant-blue focus:ring-vibrant-blue"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="metrics" className="space-y-6 mt-2">
            <div className="space-y-2">
              <Label htmlFor="targetDate" className="text-vibrant-teal">
                Target Date
              </Label>
              <Input
                id="targetDate"
                value={briefData?.targetDate || ""}
                onChange={(e) => handleFieldChange("targetDate", e.target.value)}
                placeholder="Q4 2025"
                className="border-pastel-teal focus:border-vibrant-teal focus:ring-vibrant-teal"
              />
            </div>

            <div className="p-4 border border-pastel-teal rounded-lg bg-pastel-teal/10 space-y-4">
              <h3 className="font-medium text-vibrant-teal flex items-center gap-2">
                <span className="text-lg">📈</span> KPI 1
              </h3>
              <div className="space-y-2">
                <Label htmlFor="kpi1Name" className="text-vibrant-teal">
                  Metric Name
                </Label>
                <Input
                  id="kpi1Name"
                  value={briefData?.kpi1Name || ""}
                  onChange={(e) => handleFieldChange("kpi1Name", e.target.value)}
                  placeholder="Win Rate"
                  className="border-pastel-teal focus:border-vibrant-teal focus:ring-vibrant-teal bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="kpi1Current" className="text-vibrant-teal">
                  Current Value
                </Label>
                <Input
                  id="kpi1Current"
                  value={briefData?.kpi1Current || ""}
                  onChange={(e) => handleFieldChange("kpi1Current", e.target.value)}
                  placeholder="22%"
                  className="border-pastel-teal focus:border-vibrant-teal focus:ring-vibrant-teal bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="kpi1Target" className="text-vibrant-teal">
                  Target Value
                </Label>
                <Input
                  id="kpi1Target"
                  value={briefData?.kpi1Target || ""}
                  onChange={(e) => handleFieldChange("kpi1Target", e.target.value)}
                  placeholder="35% (+59%)"
                  className="border-pastel-teal focus:border-vibrant-teal focus:ring-vibrant-teal bg-white"
                />
              </div>
            </div>

            <div className="p-4 border border-pastel-teal rounded-lg bg-pastel-teal/10 space-y-4">
              <h3 className="font-medium text-vibrant-teal flex items-center gap-2">
                <span className="text-lg">⏱️</span> KPI 2
              </h3>
              <div className="space-y-2">
                <Label htmlFor="kpi2Name" className="text-vibrant-teal">
                  Metric Name
                </Label>
                <Input
                  id="kpi2Name"
                  value={briefData?.kpi2Name || ""}
                  onChange={(e) => handleFieldChange("kpi2Name", e.target.value)}
                  placeholder="Deal Velocity"
                  className="border-pastel-teal focus:border-vibrant-teal focus:ring-vibrant-teal bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="kpi2Current" className="text-vibrant-teal">
                  Current Value
                </Label>
                <Input
                  id="kpi2Current"
                  value={briefData?.kpi2Current || ""}
                  onChange={(e) => handleFieldChange("kpi2Current", e.target.value)}
                  placeholder="45 days"
                  className="border-pastel-teal focus:border-vibrant-teal focus:ring-vibrant-teal bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="kpi2Target" className="text-vibrant-teal">
                  Target Value
                </Label>
                <Input
                  id="kpi2Target"
                  value={briefData?.kpi2Target || ""}
                  onChange={(e) => handleFieldChange("kpi2Target", e.target.value)}
                  placeholder="30 days (-33%)"
                  className="border-pastel-teal focus:border-vibrant-teal focus:ring-vibrant-teal bg-white"
                />
              </div>
            </div>

            <div className="p-4 border border-pastel-teal rounded-lg bg-pastel-teal/10 space-y-4">
              <h3 className="font-medium text-vibrant-teal flex items-center gap-2">
                <span className="text-lg">💸</span> KPI 3
              </h3>
              <div className="space-y-2">
                <Label htmlFor="kpi3Name" className="text-vibrant-teal">
                  Metric Name
                </Label>
                <Input
                  id="kpi3Name"
                  value={briefData?.kpi3Name || ""}
                  onChange={(e) => handleFieldChange("kpi3Name", e.target.value)}
                  placeholder="Revenue per Rep"
                  className="border-pastel-teal focus:border-vibrant-teal focus:ring-vibrant-teal bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="kpi3Current" className="text-vibrant-teal">
                  Current Value
                </Label>
                <Input
                  id="kpi3Current"
                  value={briefData?.kpi3Current || ""}
                  onChange={(e) => handleFieldChange("kpi3Current", e.target.value)}
                  placeholder="$1.2M"
                  className="border-pastel-teal focus:border-vibrant-teal focus:ring-vibrant-teal bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="kpi3Target" className="text-vibrant-teal">
                  Target Value
                </Label>
                <Input
                  id="kpi3Target"
                  value={briefData?.kpi3Target || ""}
                  onChange={(e) => handleFieldChange("kpi3Target", e.target.value)}
                  placeholder="$1.8M (+50%)"
                  className="border-pastel-teal focus:border-vibrant-teal focus:ring-vibrant-teal bg-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dailyImpact" className="text-vibrant-teal">
                Daily Impact
              </Label>
              <Textarea
                id="dailyImpact"
                value={briefData?.dailyImpact || ""}
                onChange={(e) => handleFieldChange("dailyImpact", e.target.value)}
                placeholder="Sales reps save 2 hours/day on administrative tasks; customer satisfaction scores improve by 15%."
                className="border-pastel-teal focus:border-vibrant-teal focus:ring-vibrant-teal min-h-[80px] bg-white"
              />
            </div>
          </TabsContent>
        </ScrollArea>
      </Tabs>

      <div className="p-4 border-t border-pastel-purple flex gap-2 bg-gradient-to-r from-pastel-purple to-pastel-blue">
        <Button
          className="flex-1 bg-gradient-to-r from-vibrant-purple to-vibrant-blue hover:from-vibrant-purple/90 hover:to-vibrant-blue/90 text-white shadow-colorful hover:shadow-colorful-hover transition-all"
          onClick={handleSave}
        >
          <Save className="h-4 w-4 mr-2" />
          Save Brief ✨
        </Button>
        <Button
          variant="outline"
          onClick={handleRegenerate}
          className="border-white bg-white/20 text-white hover:bg-white/30 hover:text-white"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Regenerate
        </Button>
      </div>
    </div>
  )
}

